# Vercel Deployment Guide - Sedna Coffee

## 🚀 Deployment Strategy

You have **2 options** to deploy your full-stack application:

---

## **OPTION 1: Frontend on Vercel + Backend on Railway (⭐ Recommended)**

### Deploy Frontend to Vercel

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
# In project root
vercel login
vercel
```

**Or via GitHub:**
1. Push to GitHub (already done ✅)
2. Go to https://vercel.com/
3. Click "New Project"
4. Import from GitHub: `dheker1/coffee-`
5. Click "Deploy"

#### Step 3: Set Environment Variables
1. Go to Project Settings on Vercel
2. Add "Environment Variables"
3. Add: `NEXT_PUBLIC_API_URL` = `https://your-backend-railway-url.cloud/api`

### Deploy Backend to Railway

#### Step 1: Sign Up
Go to: https://railway.app/ and sign up

#### Step 2: Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub"
3. Choose: `dheker1/coffee-` repository
4. Select root directory: `backend`

#### Step 3: Configure
1. In "Variables" tab, no special config needed (SQLite works locally)
2. Click "Deploy"

#### Step 4: Get Backend URL
1. Go to Railway dashboard
2. Find your service
3. Copy the public URL (e.g., `https://xxx.railway.app`)
4. Add this to Vercel environment: `NEXT_PUBLIC_API_URL=https://xxx.railway.app/api`

---

## **OPTION 2: Monorepo on Vercel (Frontend + Backend Functions)**

### Create Vercel Functions for Backend

#### Step 1: Update Project Structure
```
projet/
├── src/
│   ├── app/          (Next.js pages)
│   └── pages/
│       └── api/      (API routes - serverless functions)
├── backend/          (Keep for reference)
├── vercel.json
└── package.json
```

#### Step 2: Create API Route
**File: `src/pages/api/menu.ts`**
```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string
  message?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    // Return menu data
    res.status(200).json({ message: 'Menu endpoint' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
```

#### Step 3: Deploy to Vercel
```bash
vercel
```

---

## 🏆 Recommended: OPTION 1 (Frontend Vercel + Backend Railway)

### Why?
✅ Vercel specializes in Next.js frontend
✅ Railway is perfect for Node.js backend
✅ Easy to manage both separately
✅ Better performance
✅ Easy scaling

---

## 📝 Environment Variables

### Vercel (Frontend) - Add these in Dashboard:
```
NEXT_PUBLIC_API_URL=https://your-backend-railway-url.railway.app/api
NODE_ENV=production
```

### Railway (Backend) - Auto-configured:
```
PORT=5000
NODE_ENV=production
```

---

## 🔗 Update Frontend After Backend Deploy

Once backend is deployed on Railway:

1. Get the Railway URL (e.g., `https://sedna-backend-prod-xyz.railway.app`)
2. Go to Vercel Project Settings
3. Environment Variables
4. Update `NEXT_PUBLIC_API_URL`: `https://sedna-backend-prod-xyz.railway.app/api`
5. Redeploy/Revalidate

---

## ✅ Verify Deployment

### Frontend (Vercel)
```bash
# Test your frontend URL
https://sedna-coffee-yourdomain.vercel.app
```

### Backend (Railway)
```bash
# Test API endpoint
https://your-backend-railway-url.railway.app/api/health
https://your-backend-railway-url.railway.app/api/menu
```

---

## 🆘 Troubleshooting

### "Environment variable not found"
- Go to Vercel project → Settings → Environment Variables
- Make sure `NEXT_PUBLIC_API_URL` is set for the correct environment

### "Backend API not responding"
- Verify Railway backend is running
- Check Railway logs for errors
- Ensure CORS is enabled in backend

### "Build failed"
- Check Vercel build logs
- Ensure all dependencies are in package.json
- Verify no .env.local file is being deployed

---

## 📊 Deployment Checklist

- [ ] Frontend pushed to GitHub
- [ ] Backend pushed to GitHub
- [ ] Vercel project created from GitHub
- [ ] Railway backend deployed
- [ ] Backend URL obtained from Railway
- [ ] Environment variable set on Vercel
- [ ] Vercel redeployed with new environment variable
- [ ] Test frontend URL working
- [ ] Test API endpoint working
- [ ] Verify menu items loading from API

---

## 🚀 Quick Deploy Commands

### Option 1: Using GitHub (Easiest)
```bash
# Just push to GitHub, Vercel auto-deploys
git push

# For backend, connect Railway to GitHub
```

### Option 2: Using CLI
```bash
# Frontend
vercel

# Backend (from backend folder)
cd backend
vercel
```

---

## 📚 Resources

- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app/
- Next.js Environment: https://nextjs.org/docs/basic-features/environment-variables
- ExpressJS on Vercel: https://vercel.com/guides/nodejs

---

## 💡 Pro Tips

1. **Use Railway for Backend**: Better Node.js support than Vercel
2. **Keep Secrets Safe**: Never commit `.env.local` or sensitive keys
3. **Test Locally First**: Run both frontend and backend locally before deploying
4. **Monitor Logs**: Check both Vercel and Railway logs for errors
5. **Use CORS**: Backend needs CORS enabled for frontend requests

---

## 🎯 Summary

**Best Setup:**
- Frontend: Vercel (Next.js optimized, auto-deploys from GitHub)
- Backend: Railway (Node.js optimized, easy database integration)
- Database: SQLite on Railway (included with deployment)
- Domain: Vercel provides free domain, add custom domain later

---

**Ready to deploy? Start with OPTION 1!** 🚀
