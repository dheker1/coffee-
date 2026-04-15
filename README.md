# Sedna Coffee Full-Stack Application

A professional, production-ready coffee shop website with Next.js frontend and Express.js backend.

## Project Overview

**Frontend:** Next.js 15 + React + TypeScript + Tailwind CSS
**Backend:** Express.js + SQLite + Node.js
**Images:** Real coffee images from Unsplash

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation & Running

#### 1. Frontend (Next.js)
```bash
# Navigate to project root
cd c:\Users\Asus\projet

# Install dependencies (already done)
npm install

# Start development server
npm run dev

# Frontend runs on: http://localhost:3000
```

#### 2. Backend (Express.js)
```bash
# In a new terminal, navigate to backend
cd c:\Users\Asus\projet\backend

# Install backend dependencies
npm install

# Start backend server
npm start  # or npm run dev for development

# Backend API runs on: http://localhost:5000/api
```

#### 3. Both Running Together
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api
- Test API: http://localhost:5000/api/health

## 📁 Project Structure

```
projet/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Menu.tsx          ← Real images from Unsplash
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── assets/
├── backend/
│   ├── server.js              ← Express main server
│   ├── database.js            ← SQLite setup & menu data
│   ├── package.json
│   ├── README.md
│   └── sedna.db               ← Auto-created database
├── public/                    ← Static files
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.local                 ← Environment variables
├── .gitignore
└── .github/
    └── copilot-instructions.md
```

## 🎨 Features

### Frontend
✅ Responsive design (mobile, tablet, desktop)
✅ 16 menu items with real images
✅ Product ratings & descriptions
✅ Add to cart functionality
✅ Contact form
✅ Professional branding
✅ Smooth animations & transitions
✅ SEO optimized metadata

### Backend API
✅ RESTful API endpoints
✅ Menu management
✅ Order management system
✅ SQLite database
✅ CORS enabled
✅ Error handling
✅ Business statistics

## 📡 API Endpoints

### Menu
- `GET /api/menu` - All menu items
- `GET /api/menu?category=Coffee` - Filter by category
- `GET /api/menu/:id` - Single item

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - All orders
- `GET /api/orders/:id` - Single order
- `PATCH /api/orders/:id` - Update order status

### Utilities
- `GET /api/health` - Server health check
- `GET /api/stats` - Business statistics

## 🖼️ Menu Items (Auto-loaded)

### Coffee (8 items)
- Espresso, Cappuccino, Latte, Americano
- Macchiato, Flat White, Mocha, Cortado

### Tea (4 items)
- Green Tea, Earl Grey, Chai Latte, Matcha Latte

### Pastries (4 items)
- Croissant, Chocolate Croissant, Blueberry Muffin, Cinnamon Roll

All with real images from Unsplash and ratings.

## 🔧 Environment Variables

Create `.env.local` in project root:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NODE_ENV=development
```

## 🚢 Deployment

### Frontend (Vercel - Recommended)
```bash
npm run build
# Deploy to Vercel (automatic with GitHub)
```

### Backend (Any Node.js hosting)
- Heroku
- Railway
- Render
- AWS
- DigitalOcean

## 📝 Scripts

### Frontend
```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Run production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm start        # Start server
npm run dev      # Development with nodemon
```

## 🔌 Technologies

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Express.js, SQLite3, Node.js
- **APIs:** RESTful, JSON
- **Images:** Unsplash (free stock photos)
- **Hosted Images:** CDN-optimized Unsplash URLs

## 📊 Database

SQLite database automatically created with:
- 16 pre-loaded menu items
- Order management tables
- Automatic initialization on first run

## 🎯 Next Steps

1. **Customize:**
   - Update company info in `src/components/Contact.tsx`
   - Modify colors in `tailwind.config.ts`
   - Add your logo/branding

2. **Extend:**
   - Add user authentication
   - Implement payment processing
   - Add admin dashboard
   - Email notifications

3. **Deploy:**
   - Push to GitHub
   - Deploy frontend to Vercel
   - Deploy backend to hosting service

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Express.js Docs](https://expressjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [SQLite Docs](https://www.sqlite.org/docs.html)

## 🐛 Troubleshooting

### Port already in use
Change ports in configuration files or kill existing processes.

### Backend not connecting
- Ensure backend is running on port 5000
- Check NEXT_PUBLIC_API_URL in .env.local

### Database errors
- Delete backend/sedna.db and restart backend
- Database auto-reinitializes on startup

## 📞 Support

- Email: hello@sednacoffee.com
- Website: www.sednacoffee.com

## 📄 License

MIT License - Free to use and modify

---

**Version:** 1.0.0  
**Status:** Production Ready ✅  
**Last Updated:** April 15, 2026

