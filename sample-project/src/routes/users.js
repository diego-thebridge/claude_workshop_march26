const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { authenticate } = require('../middleware/auth');

const router = express.Router();
const DATA_FILE = path.join(__dirname, '../../data/users.json');

// VULNERABILITY: Hardcoded JWT secret (duplicated from middleware)
const JWT_SECRET = 'super-secret-key-12345';

function readUsers() {
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeUsers(users) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(users, null, 2));
}

// POST register
// VULNERABILITY: No password hashing — stores plaintext password
router.post('/register', (req, res) => {
  try {
    const users = readUsers();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    const newUser = {
      id: uuidv4(),
      name,
      email,
      password, // Stored in plaintext!
      role: 'user',
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    writeUsers(users);

    const token = jwt.sign({ id: newUser.id, email: newUser.email, role: newUser.role }, JWT_SECRET, { expiresIn: '24h' });

    res.status(201).json({ user: newUser, token });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

// POST login
// VULNERABILITY: No password hashing — compares plaintext
router.post('/login', (req, res) => {
  try {
    const users = readUsers();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '24h' });

    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// GET profile
// VULNERABILITY: Returns full user object including plaintext password
router.get('/profile', authenticate, (req, res) => {
  try {
    const users = readUsers();
    const user = users.find(u => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Returns everything, including the password
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

// GET all users (admin only — but check is weak)
router.get('/', authenticate, (req, res) => {
  try {
    const users = readUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
