# GitHub Setup Guide for Sedna Coffee

## Option 1: Using GitHub Desktop (Recommended & Easiest)

### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com/
2. Install and sign in with your GitHub account

### Step 2: Clone or Add Repository
1. Open GitHub Desktop
2. Go to `File → Clone Repository`
3. Paste: `https://github.com/dheker1/coffee-.git`
4. Choose local path: `C:\Users\Asus\projet`
5. Click "Clone"

### Step 3: Make Changes & Commit
1. GitHub Desktop will detect your changes
2. In the "Changes" tab, enter commit message: "Initial commit: Add frontend and backend"
3. Click "Commit to main"
4. Click "Push origin" to push to GitHub

## Option 2: Using Command Line (Git Bash or Terminal)

```bash
# Navigate to project directory
cd C:\Users\Asus\projet

# Initialize git repository (if not already cloned)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Add frontend and backend for Sedna Coffee"

# Add remote URL
git remote add origin https://github.com/dheker1/coffee-.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Option 3: Using VS Code Git Extension

1. Open VS Code with the project
2. Click the "Source Control" tab (left sidebar)
3. Click "Initialize Repository"
4. Stage all changes
5. Enter commit message
6. Click the "..." menu → "Publish Branch"
7. Select your GitHub account and repository

## GitHub Push URL

**Repository:** `https://github.com/dheker1/coffee-.git`

## What Gets Pushed

✅ Frontend code (Next.js)
✅ Backend code (Express.js)
✅ Configuration files
✅ README and documentation
❌ node_modules (ignored)
❌ .next build files (ignored)
❌ Database files (ignored)
❌ .env.local (ignored for security)

## Verify on GitHub

1. Visit: https://github.com/dheker1/coffee-
2. You should see:
   - `src/` folder
   - `backend/` folder
   - `README.md`
   - `package.json`
   - All source files

## Future Updates

Each time you make changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

Or via GitHub Desktop:
1. Commit changes
2. Click "Push origin"

## Troubleshooting

### "Repository not found"
- Check URL: `https://github.com/dheker1/coffee-.git`
- Ensure you have access to the repository
- Try https://github.com/dheker1/coffee-.git (with http://)

### "Permission denied"
- Use SSH key authentication in GitHub Desktop
- Or use personal access token in settings

### Files not pushing
- Ensure files aren't in .gitignore
- Check .gitignore file for excluded patterns
- Verify you have commit rights

## Repository Structure After Push

```
coffee-/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Menu.tsx (with real images)
│       ├── About.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── backend/
│   ├── server.js
│   ├── database.js
│   ├── package.json
│   └── README.md
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── .env.local (local only, not pushed)
├── .gitignore
└── README.md
```

## Next Steps After Push

1. **GitHub Pages Setup** (Optional)
   - Go to repository settings
   - Enable GitHub Pages
   - Select "main" branch

2. **Continuous Integration** (Optional)
   - Add GitHub Actions workflow
   - Auto-deploy to Vercel on push

3. **Collaboration** (Optional)
   - Invite team members
   - Set access permissions

## Resources

- GitHub Desktop: https://desktop.github.com/
- Git Documentation: https://git-scm.com/docs
- GitHub Guide: https://guides.github.com

---

**Need help?** Check GitHub's official documentation or contact hello@sednacoffee.com
