const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');

const router = express.Router();
const ORDERS_FILE = path.join(__dirname, '../../data/orders.json');
const PRODUCTS_FILE = path.join(__dirname, '../../data/products.json');

function readOrders() {
  const raw = fs.readFileSync(ORDERS_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeOrders(orders) {
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

function readProducts() {
  const raw = fs.readFileSync(PRODUCTS_FILE, 'utf-8');
  return JSON.parse(raw);
}

// GET all orders
// VULNERABILITY: No authorization — any authenticated user can see all orders
router.get('/', authenticate, (req, res) => {
  try {
    const orders = readOrders();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read orders' });
  }
});

// GET single order
// VULNERABILITY: No authorization — any user can view any order
router.get('/:id', authenticate, (req, res) => {
  try {
    const orders = readOrders();
    const order = orders.find(o => o.id === req.params.id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read order' });
  }
});

// POST create order
// VULNERABILITY: Does not verify product stock before creating order
router.post('/', authenticate, (req, res) => {
  try {
    const orders = readOrders();
    const products = readProducts();
    const { items } = req.body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Items array is required' });
    }

    let total = 0;
    const orderItems = [];

    for (const item of items) {
      const product = products.find(p => p.id === item.productId);

      if (!product) {
        return res.status(404).json({ error: `Product ${item.productId} not found` });
      }

      // NOTE: No stock check! Order proceeds even if stock is 0 or insufficient
      const quantity = item.quantity || 1;
      total += product.price * quantity;

      orderItems.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity
      });
    }

    const newOrder = {
      id: uuidv4(),
      userId: req.user.id,
      items: orderItems,
      total: Math.round(total * 100) / 100,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    orders.push(newOrder);
    writeOrders(orders);

    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// PUT update order status
router.put('/:id/status', authenticate, (req, res) => {
  try {
    const orders = readOrders();
    const index = orders.findIndex(o => o.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Order not found' });
    }

    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: `Invalid status. Must be one of: ${validStatuses.join(', ')}` });
    }

    orders[index].status = status;
    orders[index].updatedAt = new Date().toISOString();
    writeOrders(orders);

    res.json(orders[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update order' });
  }
});

module.exports = router;
