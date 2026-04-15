import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { initializeDatabase, getDatabase } from './database.js';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize database
await initializeDatabase();
const db = getDatabase();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Get all menu items
app.get('/api/menu', (req, res) => {
  const category = req.query.category;
  let query = 'SELECT * FROM menu_items';
  
  if (category) {
    query += ` WHERE category = ?`;
    db.all(query, [category], (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  } else {
    db.all(query, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  }
});

// Get single menu item
app.get('/api/menu/:id', (req, res) => {
  db.get('SELECT * FROM menu_items WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Menu item not found' });
      return;
    }
    res.json(row);
  });
});

// Create new order
app.post('/api/orders', (req, res) => {
  const { customer_name, customer_email, items } = req.body;
  
  if (!customer_name || !customer_email || !items || items.length === 0) {
    res.status(400).json({ error: 'Missing required fields' });
    return;
  }

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const orderId = uuidv4();

  db.run(
    `INSERT INTO orders (id, customer_name, customer_email, items, total, status) 
     VALUES (?, ?, ?, ?, ?, 'pending')`,
    [orderId, customer_name, customer_email, JSON.stringify(items), total],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({ id: orderId, message: 'Order created successfully', total });
    }
  );
});

// Get all orders
app.get('/api/orders', (req, res) => {
  db.all('SELECT * FROM orders ORDER BY created_at DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows.map(order => ({
      ...order,
      items: JSON.parse(order.items)
    })));
  });
});

// Get specific order
app.get('/api/orders/:id', (req, res) => {
  db.get('SELECT * FROM orders WHERE id = ?', [req.params.id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.json({
      ...row,
      items: JSON.parse(row.items)
    });
  });
});

// Update order status
app.patch('/api/orders/:id', (req, res) => {
  const { status } = req.body;
  
  if (!status) {
    res.status(400).json({ error: 'Status is required' });
    return;
  }

  db.run(
    'UPDATE orders SET status = ? WHERE id = ?',
    [status, req.params.id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
      res.json({ message: 'Order updated successfully', status });
    }
  );
});

// Get menu statistics
app.get('/api/stats', (req, res) => {
  db.get('SELECT COUNT(*) as total_items FROM menu_items', (err, menuCount) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    db.get('SELECT COUNT(*) as total_orders FROM orders', (err, orderCount) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      db.get('SELECT SUM(total) as revenue FROM orders WHERE status = "completed"', (err, revenue) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.json({
          total_items: menuCount.total_items,
          total_orders: orderCount.total_orders,
          revenue: revenue.revenue || 0
        });
      });
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✓ Sedna Coffee Backend Server running on port ${PORT}`);
  console.log(`✓ API available at http://localhost:${PORT}/api`);
  console.log(`✓ Database initialized\n`);
});
