import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { v4 as uuidv4 } from 'uuid';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new sqlite3.Database('./sedna.db');

export function initializeDatabase() {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      // Create menu items table
      db.run(`
        CREATE TABLE IF NOT EXISTS menu_items (
          id TEXT PRIMARY KEY,
          name TEXT NOT NULL,
          description TEXT NOT NULL,
          category TEXT NOT NULL,
          price REAL NOT NULL,
          rating REAL NOT NULL,
          image_url TEXT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) reject(err);
      });

      // Create orders table
      db.run(`
        CREATE TABLE IF NOT EXISTS orders (
          id TEXT PRIMARY KEY,
          customer_name TEXT NOT NULL,
          customer_email TEXT NOT NULL,
          items TEXT NOT NULL,
          total REAL NOT NULL,
          status TEXT DEFAULT 'pending',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `, (err) => {
        if (err) reject(err);
      });

      // Insert menu items if they don't exist
      db.run(`
        SELECT COUNT(*) as count FROM menu_items
      `, (err, row) => {
        if (err) reject(err);
        if (row.count === 0) {
          insertMenuItems().then(() => resolve()).catch(reject);
        } else {
          resolve();
        }
      });
    });
  });
}

function insertMenuItems() {
  return new Promise((resolve, reject) => {
    const menuItems = [
      { name: 'Espresso', category: 'Coffee', price: 3.50, rating: 4.8, description: 'Classic Italian-style espresso shot, bold and concentrated', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop' },
      { name: 'Cappuccino', category: 'Coffee', price: 4.50, rating: 4.9, description: 'Silky smooth cappuccino with premium steamed milk and foam', image: 'https://images.unsplash.com/photo-1541877944-fe21dfe8aa36?w=400&h=400&fit=crop' },
      { name: 'Latte', category: 'Coffee', price: 4.75, rating: 5.0, description: 'Rich and creamy latte, perfectly balanced with espresso', image: 'https://images.unsplash.com/photo-1505252585461-04db1267ae5b?w=400&h=400&fit=crop' },
      { name: 'Americano', category: 'Coffee', price: 3.75, rating: 4.7, description: 'Strong, bold American-style coffee with hot water', image: 'https://images.unsplash.com/photo-1527701878885-c0a40eec8464?w=400&h=400&fit=crop' },
      { name: 'Macchiato', category: 'Coffee', price: 4.25, rating: 4.8, description: 'Espresso marked with steamed milk foam', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301995f?w=400&h=400&fit=crop' },
      { name: 'Flat White', category: 'Coffee', price: 5.00, rating: 5.0, description: 'Velvety microfoam blended with double espresso', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop' },
      { name: 'Mocha', category: 'Coffee', price: 5.25, rating: 4.9, description: 'Espresso with steamed milk and rich chocolate', image: 'https://images.unsplash.com/photo-1578432284048-a20db7f7e6dc?w=400&h=400&fit=crop' },
      { name: 'Cortado', category: 'Coffee', price: 4.00, rating: 4.7, description: 'Equal parts espresso and steamed milk', image: 'https://images.unsplash.com/photo-1442512671620-e2b4a30189f3?w=400&h=400&fit=crop' },
      { name: 'Green Tea', category: 'Tea', price: 3.50, rating: 4.6, description: 'Refreshing organic green tea with fresh aroma', image: 'https://images.unsplash.com/photo-1597318861130-b20b1cce1f0f?w=400&h=400&fit=crop' },
      { name: 'Earl Grey', category: 'Tea', price: 3.75, rating: 4.7, description: 'Classic black tea with bergamot essence', image: 'https://images.unsplash.com/photo-1597318861130-b20b1cce1f0f?w=400&h=400&fit=crop' },
      { name: 'Chai Latte', category: 'Tea', price: 4.50, rating: 4.9, description: 'Spiced chai tea with creamy steamed milk', image: 'https://images.unsplash.com/photo-1563208533-1bd39d9a6ec8?w=400&h=400&fit=crop' },
      { name: 'Matcha Latte', category: 'Tea', price: 5.00, rating: 4.8, description: 'Vibrant matcha green tea with premium milk', image: 'https://images.unsplash.com/photo-1546521521-08ce6e52949a?w=400&h=400&fit=crop' },
      { name: 'Croissant', category: 'Pastry', price: 4.00, rating: 4.9, description: 'Buttery, flaky French croissant, freshly baked', image: 'https://images.unsplash.com/photo-1585518419759-148b109aad9f?w=400&h=400&fit=crop' },
      { name: 'Chocolate Croissant', category: 'Pastry', price: 4.50, rating: 5.0, description: 'Rich chocolate croissant with premium chocolate bars', image: 'https://images.unsplash.com/photo-1509365338328-0b76038e4c7d?w=400&h=400&fit=crop' },
      { name: 'Blueberry Muffin', category: 'Pastry', price: 3.75, rating: 4.8, description: 'Moist homemade muffin with fresh blueberries', image: 'https://images.unsplash.com/photo-1607920591413-41ec4347f0d4?w=400&h=400&fit=crop' },
      { name: 'Cinnamon Roll', category: 'Pastry', price: 4.25, rating: 4.9, description: 'Soft, sweet cinnamon roll with cream cheese frosting', image: 'https://images.unsplash.com/photo-1611689342806-0863700ce1d8?w=400&h=400&fit=crop' }
    ];

    let completed = 0;
    menuItems.forEach((item, index) => {
      db.run(
        `INSERT INTO menu_items (id, name, description, category, price, rating, image_url) 
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [uuidv4(), item.name, item.description, item.category, item.price, item.rating, item.image],
        (err) => {
          if (err) reject(err);
          completed++;
          if (completed === menuItems.length) resolve();
        }
      );
    });
  });
}

export function getDatabase() {
  return db;
}
