# Sedna Coffee Backend API

A robust Express.js backend for the Sedna Coffee Shop website.

## Features

- **Menu Management API** - Get coffee, tea, and pastry items
- **Order Management** - Create, view, and update orders
- **SQLite Database** - Lightweight, file-based database
- **CORS Support** - Frontend-backend integration
- **RESTful API** - Clean, standard API endpoints

## Quick Start

### Installation

```bash
cd backend
npm install
```

### Running the Server

#### Development
```bash
npm run dev
```

#### Production
```bash
npm start
```

Server runs on `http://localhost:5000` by default.

## API Endpoints

### Menu Endpoints

- `GET /api/menu` - Get all menu items
- `GET /api/menu?category=Coffee` - Filter by category (Coffee, Tea, Pastry)
- `GET /api/menu/:id` - Get specific menu item

### Order Endpoints

- `POST /api/orders` - Create new order
  ```json
  {
    "customer_name": "John Doe",
    "customer_email": "john@example.com",
    "items": [
      { "name": "Espresso", "price": 3.50, "quantity": 2 }
    ]
  }
  ```

- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get specific order
- `PATCH /api/orders/:id` - Update order status
  ```json
  {
    "status": "completed"
  }
  ```

### Statistics

- `GET /api/stats` - Get business statistics (total items, orders, revenue)

### Health Check

- `GET /api/health` - Check if server is running

## Database Schema

### menu_items Table
```sql
CREATE TABLE menu_items (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  price REAL NOT NULL,
  rating REAL NOT NULL,
  image_url TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

### orders Table
```sql
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  items TEXT NOT NULL,
  total REAL NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Environment Variables

Create a `.env` file (optional):

```
PORT=5000
NODE_ENV=development
```

## Technologies Used

- **Express.js** - Web framework
- **SQLite3** - Database
- **CORS** - Cross-origin support
- **UUID** - Unique ID generation
- **Body-Parser** - Request parsing

## Project Structure

```
backend/
├── server.js       - Main Express server
├── database.js     - Database initialization and setup
├── package.json    - Dependencies
└── sedna.db        - SQLite database (created at runtime)
```

## Default Menu Items (Auto-loaded)

### Coffee (8 items)
- Espresso, Cappuccino, Latte, Americano, Macchiato, Flat White, Mocha, Cortado

### Tea (4 items)
- Green Tea, Earl Grey, Chai Latte, Matcha Latte

### Pastries (4 items)
- Croissant, Chocolate Croissant, Blueberry Muffin, Cinnamon Roll

All items include real images from Unsplash.

## Error Handling

The API includes comprehensive error handling:
- 400 Bad Request - Missing or invalid data
- 404 Not Found - Resource doesn't exist
- 500 Internal Server Error - Server issues

## Future Enhancements

- [ ] User authentication
- [ ] Payment integration
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Analytics
- [ ] Inventory management

## License

MIT

## Support

For issues or questions, contact: hello@sednacoffee.com
