const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '../../data/products.json');

function readProducts() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeProducts(products) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(products, null, 2));
}

// GET all products
router.get('/', (req, res) => {
  try {
    const products = readProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read products' });
  }
});

// GET search products
// VULNERABILITY: String concatenation in filter simulating injection pattern
router.get('/search', (req, res) => {
  try {
    const products = readProducts();
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required' });
    }

    // Dangerous: building a filter function from user input via string concatenation
    const filterFn = new Function('product', 'return product.name.toLowerCase().includes("' + q.toLowerCase() + '") || product.description.toLowerCase().includes("' + q.toLowerCase() + '")');
    const results = products.filter(filterFn);

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

// GET single product
router.get('/:id', (req, res) => {
  try {
    const products = readProducts();
    const product = products.find(p => p.id === req.params.id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Failed to read product' });
  }
});

// POST create product
// VULNERABILITY: No input validation — accepts any body shape
router.post('/', authenticate, (req, res) => {
  try {
    const products = readProducts();

    const newProduct = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date().toISOString()
    };

    products.push(newProduct);
    writeProducts(products);

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

// PUT update product
// VULNERABILITY: No input validation — accepts any fields including id override
router.put('/:id', authenticate, (req, res) => {
  try {
    const products = readProducts();
    const index = products.findIndex(p => p.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    products[index] = { ...products[index], ...req.body };
    writeProducts(products);

    res.json(products[index]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

// DELETE product
// VULNERABILITY: No authentication check — anyone can delete
router.delete('/:id', (req, res) => {
  try {
    const products = readProducts();
    const index = products.findIndex(p => p.id === req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const deleted = products.splice(index, 1);
    writeProducts(products);

    res.json({ message: 'Product deleted', product: deleted[0] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

module.exports = router;
