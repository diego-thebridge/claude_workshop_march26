const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../src/index');
const jwt = require('jsonwebtoken');

const DATA_FILE = path.join(__dirname, '../data/products.json');
const JWT_SECRET = 'super-secret-key-12345';

// Helper to get a valid token
function getAuthToken(user = { id: 'user-001', email: 'alice@example.com', role: 'admin' }) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

// Save original data to restore after tests
let originalData;

beforeAll(() => {
  originalData = fs.readFileSync(DATA_FILE, 'utf-8');
});

afterAll(() => {
  fs.writeFileSync(DATA_FILE, originalData);
});

describe('GET /api/products', () => {
  it('should return all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(10);
  });

  it('should return products with expected fields', async () => {
    const res = await request(app).get('/api/products');
    const product = res.body[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('stock');
    expect(product).toHaveProperty('category');
  });
});

describe('GET /api/products/:id', () => {
  it('should return a single product by id', async () => {
    const res = await request(app).get('/api/products/prod-001');
    expect(res.status).toBe(200);
    expect(res.body.id).toBe('prod-001');
    expect(res.body.name).toBe('Wireless Bluetooth Headphones');
  });

  it('should return 404 for non-existent product', async () => {
    const res = await request(app).get('/api/products/nonexistent');
    expect(res.status).toBe(404);
  });
});

describe('POST /api/products', () => {
  it('should create a new product with valid token', async () => {
    const token = getAuthToken();
    const newProduct = {
      name: 'Test Product',
      description: 'A test product',
      price: 9.99,
      stock: 10,
      category: 'test'
    };

    const res = await request(app)
      .post('/api/products')
      .set('Authorization', `Bearer ${token}`)
      .send(newProduct);

    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Test Product');
    expect(res.body).toHaveProperty('id');
  });

  it('should reject request without auth token', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({ name: 'Unauthorized Product' });

    expect(res.status).toBe(401);
  });
});

// NOTE: Tests are intentionally incomplete.
// Missing tests for:
// - PUT /api/products/:id
// - DELETE /api/products/:id (which has no auth!)
// - GET /api/products/search
// - Edge cases (empty body, invalid data types, etc.)
// - Concurrent access scenarios
