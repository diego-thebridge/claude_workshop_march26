const request = require('supertest');
const fs = require('fs');
const path = require('path');
const app = require('../src/index');
const jwt = require('jsonwebtoken');

const DATA_FILE = path.join(__dirname, '../data/users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'default-dev-secret';

let originalData;

beforeAll(() => {
  originalData = fs.readFileSync(DATA_FILE, 'utf-8');
});

afterAll(() => {
  fs.writeFileSync(DATA_FILE, originalData);
});

function getAuthToken(user = { id: 'user-001', email: 'alice@example.com', role: 'admin' }) {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });
}

describe('POST /api/users/register', () => {
  it('should register a new user with hashed password', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ name: 'Test User', email: 'test@example.com', password: 'testpass123' });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user).toHaveProperty('id');
    expect(res.body.user.email).toBe('test@example.com');
    // Password must NOT be in the response
    expect(res.body.user).not.toHaveProperty('password');
  });

  it('should store hashed password (not plaintext)', async () => {
    const users = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    const testUser = users.find(u => u.email === 'test@example.com');
    expect(testUser).toBeDefined();
    // bcrypt hashes start with $2b$
    expect(testUser.password).toMatch(/^\$2[ab]\$/);
    expect(testUser.password).not.toBe('testpass123');
  });

  it('should reject duplicate email', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ name: 'Dup', email: 'alice@example.com', password: 'pass123' });

    expect(res.status).toBe(409);
  });

  it('should reject missing fields', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ name: 'No Email' });

    expect(res.status).toBe(400);
  });
});

describe('POST /api/users/login', () => {
  it('should login with correct credentials and not return password', async () => {
    // Register a user first to have a known password
    await request(app)
      .post('/api/users/register')
      .send({ name: 'Login Test', email: 'login@example.com', password: 'mypassword' });

    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'login@example.com', password: 'mypassword' });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(res.body.user).not.toHaveProperty('password');
  });

  it('should reject wrong password', async () => {
    const res = await request(app)
      .post('/api/users/login')
      .send({ email: 'login@example.com', password: 'wrongpassword' });

    expect(res.status).toBe(401);
  });
});

describe('GET /api/users/profile', () => {
  it('should not include password in profile response', async () => {
    const token = getAuthToken();
    const res = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).not.toHaveProperty('password');
    expect(res.body).toHaveProperty('email');
  });
});

describe('GET /api/users (admin only)', () => {
  it('should allow admin to list users without passwords', async () => {
    const token = getAuthToken({ id: 'user-001', email: 'alice@example.com', role: 'admin' });
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    res.body.forEach(user => {
      expect(user).not.toHaveProperty('password');
    });
  });

  it('should reject non-admin users with 403', async () => {
    const token = getAuthToken({ id: 'user-002', email: 'bob@example.com', role: 'user' });
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.status).toBe(403);
  });
});
