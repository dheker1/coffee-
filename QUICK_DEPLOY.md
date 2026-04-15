# 🚀 QUICK START: Deploy Sedna Coffee

## Current Status ✅
- ✅ Frontend: Next.js application ready
- ✅ Backend: Express API ready  
- ✅ Database: SQLite with 16 menu items
- ✅ GitHub: Repository pushed to https://github.com/dheker1/coffee-.git
- ✅ Vercel configs: Created and optimized

---

## 🎯 Deploy in 5 Minutes

### STEP 1: Deploy Frontend to Vercel (2 minutes)

**Via GitHub (Easiest):**
1. Go to https://vercel.com/
2. Click "New Project"
3. Click "Import Git Repository"
4. Search for: `dheker1/coffee-` (your repo)
5. Click "Import"
6. Click "Deploy" (uses vercel.json automatically)
7. **Wait for deployment** (~2 minutes)
8. Copy your Vercel URL: `https://sedna-coffee-xxxxx.vercel.app`

### STEP 2: Deploy Backend to Railway (2 minutes)

1. Go to https://railway.app/
2. Sign up/login
3. Click "New Project"
4. Click "Deploy from GitHub"
5. Select: `dheker1/coffee-`
6. Configure root directory: `backend`
7. Click "Deploy"
8. **Wait for deployment** (~1 minute)
9. Get your Backend URL from Railway dashboard
   - Look for "Domains" section
   - Copy URL: `https://xxxx.railway.app`

### STEP 3: Connect Frontend to Backend (1 minute)

1. Go back to Vercel Project Settings
2. Click "Environment Variables"
3. Add new variable:
   - Name: `NEXT_PUBLIC_API_URL`
   - Value: `https://xxxx.railway.app/api` (from Railway Step 9)
4. Click "Save"
5. **Redeploy**: Click your deployment → "Redeploy" button
6. Wait ~30 seconds

---

## ✅ VERIFY DEPLOYMENT

### Test Frontend
```bash
# Open in browser
https://sedna-coffee-xxxxx.vercel.app
```
✅ Should see website with menu items, images, and styling

### Test Backend
```bash
# Test health check
https://xxxx.railway.app/api/health

# Test menu endpoint
https://xxxx.railway.app/api/menu
```
✅ Should return JSON menu data

### Test API Integration
1. Open frontend: https://sedna-coffee-xxxxx.vercel.app
2. Check browser console (F12 → Console)
3. Should see menu items loading from API
4. Click "Add to Cart" - should work

---

## 📊 Deployment URLs

After deployment, you'll have:

| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | `https://sedna-coffee-xxxxx.vercel.app` | Website |
| Backend | `https://xxxx.railway.app/api` | API endpoints |
| Admin | https://vercel.com | Manage frontend |
| Admin | https://railway.app | Manage backend |

---

## 🆘 Troubleshooting

### "Menu not loading on production"
1. Check Vercel environment variable is set
2. Redeploy Vercel project
3. Check Railway backend is running

### "API endpoint returns 404"
1. Go to Railway dashboard
2. Check logs for errors
3. Verify PORT is set to 5000

### "CORS error in browser"
1. Check backend has CORS enabled (it does ✅)
2. Clear browser cache
3. Hard refresh (Ctrl+Shift+R)

---

## 📋 Deployment Checklist

- [ ] Frontend deployed to Vercel
- [ ] Backend deployed to Railway
- [ ] Environment variable `NEXT_PUBLIC_API_URL` set
- [ ] Frontend redeployed after env variable
- [ ] Frontend URL accessible
- [ ] Backend URL accessible
- [ ] Menu items loading on production
- [ ] Add to cart working
- [ ] No console errors

---

## 💡 Pro Tips

1. **Bookmark your URLs**
   - Frontend: `https://sedna-coffee-xxxxx.vercel.app`
   - Backend: `https://xxxx.railway.app/api`

2. **Monitor Logs**
   - Vercel: Project → Deployments → View logs
   - Railway: Services → View logs

3. **Update from Git**
   - Both Vercel and Railway auto-deploy when you `git push`
   - No manual redeploy needed for future updates

4. **Custom Domain**
   - Vercel: Project Settings → Domains (add your own)
   - Railway: Services → Settings → Domains

---

## 🎉 You're Done!

Your Sedna Coffee website is now **live on the internet** 🌍

Share your URL: `https://sedna-coffee-xxxxx.vercel.app`

---

**Need help? Check VERCEL_DEPLOYMENT.md for detailed instructions**
