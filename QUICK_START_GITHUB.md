# 🚀 Quick Start - Connect Your Local Project to GitHub

Since you've already uploaded files manually to GitHub, here's how to connect your local folder and keep it synced.

---

## Step 1: Check if Git is Already Set Up

Open **Command Prompt** or **Git Bash** in your project folder:

```bash
cd C:/xampp/htdocs/lucy_portfolio
git status
```

**If you see:** "fatal: not a git repository"
→ You need to initialize Git (go to Step 2)

**If you see:** File list or "nothing to commit"
→ Git is already set up (skip to Step 3)

---

## Step 2: Initialize Git and Connect to GitHub

### A. Initialize Git Repository

```bash
cd C:/xampp/htdocs/lucy_portfolio
git init
```

### B. Configure Git (First Time Only)

```bash
git config --global user.name "Kenjie Lucy"
git config --global user.email "kenjieflucy@gmail.com"
```

### C. Connect to Your GitHub Repository

```bash
git remote add origin https://github.com/knjiee/knjiee.github.io.git
```

**Verify connection:**
```bash
git remote -v
```

You should see:
```
origin  https://github.com/knjiee/knjiee.github.io.git (fetch)
origin  https://github.com/knjiee/knjiee.github.io.git (push)
```

### D. Pull Existing Files from GitHub

```bash
git pull origin main --allow-unrelated-histories
```

**Note:** If your branch is `master` instead of `main`:
```bash
git pull origin master --allow-unrelated-histories
```

---

## Step 3: Add Your Local Changes

```bash
# Check what files are different
git status

# Add all your local files
git add .

# Commit your changes
git commit -m "Sync local changes with GitHub"
```

---

## Step 4: Push to GitHub

```bash
# Push to main branch
git push origin main
```

**If you get an error about branch name:**
```bash
# Check your branch
git branch

# If it says 'master', use:
git push origin master

# Or rename to main:
git branch -M main
git push origin main
```

---

## Step 5: Enable GitHub Pages (Make Your Site Live!)

1. Go to your repository: https://github.com/knjiee/knjiee.github.io
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main** (or master)
   - Folder: **/ (root)**
5. Click **Save**

### Your Live Website URL:

Your portfolio will be live at:
```
https://knjiee.github.io/
```

**Note:** It may take 1-2 minutes to go live after enabling.

---

## 🔄 Daily Workflow (After Setup)

Every time you make changes:

```bash
# 1. Navigate to project
cd C:/xampp/htdocs/lucy_portfolio

# 2. Check changes
git status

# 3. Add changes
git add .

# 4. Commit
git commit -m "Describe your changes"

# 5. Push to GitHub
git push origin main
```

---

## 🎯 What to Do Right Now

Based on your current situation:

1. **Open Command Prompt** or **Git Bash**
2. **Run these commands:**

```bash
cd C:/xampp/htdocs/lucy_portfolio
git init
git remote add origin https://github.com/knjiee/knjiee.github.io.git
git pull origin main --allow-unrelated-histories
git add .
git commit -m "Connect local project to GitHub repository"
git push origin main
```

3. **Enable GitHub Pages** (follow Step 5 above)

---

## ✅ Verify Everything Works

1. Go to: https://github.com/knjiee/knjiee.github.io
2. Check that all your files are there
3. Enable GitHub Pages
4. Visit: https://knjiee.github.io/
5. Your portfolio should be live!

---

## 🆘 Troubleshooting

### "Repository already exists"
```bash
git remote remove origin
git remote add origin https://github.com/knjiee/knjiee.github.io.git
```

### "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

### "Branch 'main' does not exist"
Your repository uses `master`:
```bash
git push origin master
```

---

**That's it! Your portfolio is now connected and ready to update! 🎉**

