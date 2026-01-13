# 📚 GitHub Update Tutorial - Portfolio Website

Complete guide on how to update your portfolio code on GitHub.

---

## 🎯 Quick Overview

There are **3 main ways** to update your GitHub repository:
1. **Git Command Line** (Most common, recommended)
2. **GitHub Desktop** (Easy GUI option)
3. **GitHub Web Interface** (Quick edits only)

---

## Method 1: Using Git Command Line (Recommended)

### Prerequisites
- Git installed on your computer
- Your repository cloned locally

### Step 1: Install Git (if not installed)

1. Download Git from: https://git-scm.com/download/win
2. Install with default settings
3. Open **Git Bash** or **Command Prompt**

### Step 2: Navigate to Your Project Folder

```bash
cd C:/xampp/htdocs/lucy_portfolio
```

### Step 3: Check Your Current Status

```bash
git status
```

This shows which files have been changed.

### Step 4: Add Files to Staging Area

**Add all changed files:**
```bash
git add .
```

**Or add specific files:**
```bash
git add index.html
git add style.css
git add script.js
```

### Step 5: Commit Your Changes

```bash
git commit -m "Update portfolio design and fix mobile sidebar"
```

**Good commit messages:**
- `"Update hero section styling"`
- `"Fix mobile navigation design"`
- `"Add dynamic image gallery"`
- `"Update contact information"`

### Step 6: Push to GitHub

```bash
git push origin main
```

**Note:** If your default branch is `master` instead of `main`:
```bash
git push origin master
```

### Step 7: Verify on GitHub

1. Go to your GitHub repository
2. Refresh the page
3. You should see your latest commit

---

## Method 2: Using GitHub Desktop (Easiest GUI Method)

### Step 1: Download GitHub Desktop

1. Go to: https://desktop.github.com/
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Clone Your Repository

1. Open GitHub Desktop
2. Click **File** → **Clone Repository**
3. Select your `lucy_portfolio` repository
4. Choose a local path (e.g., `C:/xampp/htdocs/lucy_portfolio`)
5. Click **Clone**

### Step 3: Make Changes

1. Edit your files in VS Code or any editor
2. Save your changes

### Step 4: Commit Changes

1. Open GitHub Desktop
2. You'll see your changed files on the left
3. **Check the boxes** next to files you want to commit
4. Write a **commit message** at the bottom
5. Click **Commit to main** (or master)

### Step 5: Push to GitHub

1. Click **Push origin** button at the top
2. Wait for it to complete
3. Done! Your changes are on GitHub

---

## Method 3: Using GitHub Web Interface (Quick Edits)

**Note:** This method is only for small, quick edits. Not recommended for multiple files.

### Step 1: Navigate to Your File

1. Go to your GitHub repository
2. Click on the file you want to edit (e.g., `index.html`)

### Step 2: Edit the File

1. Click the **pencil icon** (✏️) at the top right
2. Make your changes in the editor
3. Scroll down to the bottom

### Step 3: Commit Changes

1. Write a **commit message**
2. Select **"Commit directly to the main branch"**
3. Click **Commit changes**

**Limitation:** You can only edit one file at a time this way.

---

## 🔄 Complete Workflow Example

Here's a typical workflow when updating your portfolio:

```bash
# 1. Navigate to project folder
cd C:/xampp/htdocs/lucy_portfolio

# 2. Check what changed
git status

# 3. Add all changes
git add .

# 4. Commit with descriptive message
git commit -m "Improve mobile sidebar design and fix button alignment"

# 5. Push to GitHub
git push origin main

# Done! Your changes are live on GitHub
```

---

## 🚨 Common Issues & Solutions

### Issue 1: "Repository not found" or "Permission denied"

**Solution:**
```bash
# Check your remote URL
git remote -v

# If wrong, update it:
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Issue 2: "Updates were rejected"

**Solution:**
```bash
# Pull latest changes first
git pull origin main

# Resolve any conflicts, then:
git add .
git commit -m "Merge remote changes"
git push origin main
```

### Issue 3: "Branch 'main' does not exist"

**Solution:**
```bash
# Check your branch name
git branch

# If it's 'master', use:
git push origin master

# Or rename to main:
git branch -M main
git push origin main
```

### Issue 4: "Nothing to commit"

**Solution:**
- Make sure you've saved your files
- Check `git status` to see if files are tracked
- If files are new, you may need to add them first

---

## 📝 Best Practices

### 1. Commit Frequently
- Commit after completing a feature
- Don't wait too long between commits
- Small, focused commits are better than large ones

### 2. Write Good Commit Messages
**Good:**
- `"Fix mobile sidebar alignment"`
- `"Add dynamic image gallery feature"`
- `"Update contact email address"`

**Bad:**
- `"update"`
- `"changes"`
- `"fix"`

### 3. Always Pull Before Push
```bash
git pull origin main
git push origin main
```

### 4. Use Branches for Major Changes
```bash
# Create a new branch
git checkout -b feature/new-design

# Make changes, commit
git add .
git commit -m "New design changes"

# Push branch
git push origin feature/new-design

# Merge to main later via GitHub
```

---

## 🎨 Setting Up GitHub Pages (Deploy Your Portfolio)

After pushing your code, deploy it live:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**

### Step 2: Access Your Live Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

**Example:**
```
https://kenjielucy.github.io/lucy_portfolio/
```

---

## 🔧 Initial Setup (First Time Only)

If you haven't set up Git yet:

### Step 1: Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "kenjieflucy@gmail.com"
```

### Step 2: Clone Your Repository

```bash
cd C:/xampp/htdocs
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git lucy_portfolio
```

### Step 3: Copy Your Files

Copy all your portfolio files into the cloned folder.

### Step 4: First Commit

```bash
cd lucy_portfolio
git add .
git commit -m "Initial portfolio upload"
git push origin main
```

---

## 📋 Quick Reference Commands

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main

# View commit history
git log

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- filename
```

---

## 🎯 Recommended Workflow

1. **Make changes** to your files locally
2. **Test** in your browser (XAMPP)
3. **Commit** when satisfied
4. **Push** to GitHub
5. **Verify** on GitHub and GitHub Pages

---

## 💡 Tips

- **Always test locally** before pushing
- **Commit often** with descriptive messages
- **Pull before push** to avoid conflicts
- **Use GitHub Desktop** if command line seems difficult
- **Keep a backup** of your local files

---

## 🆘 Need Help?

- **Git Documentation:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **GitHub Desktop Help:** https://docs.github.com/en/desktop

---

**Happy Coding! 🚀**

