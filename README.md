# Kenjie Lucy - Web/Software Developer Portfolio

A clean, modern, and fully responsive portfolio website showcasing projects and skills in System Development & Web Applications.

## 🚀 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design suitable for recruiters and academic defense
- **Bootstrap 5** - Built with the latest Bootstrap framework
- **Smooth Animations** - Subtle animations and transitions for better user experience
- **10 Project Showcases** - Display all your major projects with screenshots
- **Contact Form** - Frontend-only contact form (ready for backend integration)

## 📁 Project Structure

```
lucy_portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript for interactivity
├── README.md           # This file
│
└── images/             # (Create this folder for project screenshots)
    ├── project1.jpg
    ├── project2.jpg
    └── ...
```

## 🖼️ How to Replace Project Screenshots

### Step 1: Prepare Your Screenshots

1. Take screenshots of each project (recommended size: 800x500px or 4:5 ratio)
2. Save them with descriptive names:
   - `capstone-loan-system.jpg`
   - `lavalust-loan-system.jpg`
   - `attendance-system.jpg`
   - `hotel-management.jpg`
   - `password-manager.jpg`
   - `campusconnect.jpg`
   - `student-services.jpg`
   - `inventory-management.jpg`
   - `endless-room-game.jpg`
   - `time-keeping-system.jpg`

### Step 2: Create Images Folder

Create a folder named `images` in the same directory as `index.html`:

```
lucy_portfolio/
├── images/
│   ├── capstone-loan-system.jpg
│   ├── lavalust-loan-system.jpg
│   └── ...
```

### Step 3: Update HTML Image Sources

Open `index.html` and find each project's image tag. Replace the placeholder URLs with your actual image paths.

**Example:**

**Before:**
```html
<img src="https://via.placeholder.com/400x250/4A90E2/FFFFFF?text=Loan+Management+System" 
     alt="Capstone Loan Management System" class="img-fluid">
```

**After:**
```html
<img src="images/capstone-loan-system.jpg" 
     alt="Capstone Loan Management System" class="img-fluid">
```

### Step 4: Find All Image Placeholders

Search for `<!-- REPLACE THIS IMAGE:` in `index.html` to find all 10 project images that need to be replaced.

### Quick Find & Replace Guide

| Project | Line to Find | Replace With |
|---------|-------------|--------------|
| Capstone Loan Management | `Loan+Management+System` | `images/capstone-loan-system.jpg` |
| Lavalust Loan System | `Lavalust+Loan+System` | `images/lavalust-loan-system.jpg` |
| Attendance System | `Attendance+System+Face+Recognition` | `images/attendance-system.jpg` |
| Hotel Management | `Hotel+Management+System` | `images/hotel-management.jpg` |
| Password Manager | `Password+Manager` | `images/password-manager.jpg` |
| CampusConnect | `CampusConnect` | `images/campusconnect.jpg` |
| Student Services | `Student+Services+Portal` | `images/student-services.jpg` |
| Inventory Management | `Inventory+Management` | `images/inventory-management.jpg` |
| Endless Room Game | `Endless+Room+Game` | `images/endless-room-game.jpg` |
| Time Keeping System | `Time+Keeping+System` | `images/time-keeping-system.jpg` |

## 🔗 How to Update Project Links

### Update "View Project" Links

Find each project's "View Project" button and update the `href` attribute:

```html
<!-- Before -->
<a href="#" class="btn btn-sm btn-primary">View Project</a>

<!-- After (if you have a live demo) -->
<a href="https://your-project-demo.com" class="btn btn-sm btn-primary" target="_blank">View Project</a>
```

### Update "View Code" Links

Find each project's "View Code" button and update the `href` attribute:

```html
<!-- Before -->
<a href="#" class="btn btn-sm btn-outline-primary">View Code</a>

<!-- After (if you have GitHub repos) -->
<a href="https://github.com/yourusername/project-name" class="btn btn-sm btn-outline-primary" target="_blank">View Code</a>
```

## 📧 How to Update Contact Information

### Update Email Address

In `index.html`, find the contact section and update:

```html
<!-- Line ~350 -->
<a href="mailto:your.email@example.com" class="text-decoration-none">your.email@example.com</a>
```

Replace `your.email@example.com` with your actual email address.

### Update Social Links

Find the social links section and update:

```html
<!-- GitHub Link -->
<a href="https://github.com/yourusername" class="btn btn-outline-dark me-2" target="_blank">
    <i class="bi bi-github"></i> GitHub
</a>

<!-- Portfolio Link (if you have another portfolio) -->
<a href="https://your-portfolio-link.com" class="btn btn-outline-primary" target="_blank">
    <i class="bi bi-link-45deg"></i> Portfolio
</a>
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **main** branch
   - Click **Save**
   - Your site will be live at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free)

1. **Drag & Drop Method**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/login
   - Drag and drop your project folder onto Netlify
   - Your site will be live instantly!

2. **Git Integration Method**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically deploy on every push

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. Follow the prompts to deploy your site.

### Option 4: XAMPP (Local Development)

Since you're using XAMPP, you can view the site locally:

1. Place the project folder in `C:\xampp\htdocs\lucy_portfolio`
2. Open your browser
3. Navigate to: `http://localhost/lucy_portfolio`

## 🎨 Customization

### Change Color Scheme

Edit `style.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #0d6efd;    /* Change this to your preferred color */
    --secondary-color: #6c757d;
    --dark-color: #212529;
    --light-color: #f8f9fa;
}
```

### Modify Hero Section Background

In `style.css`, find `.hero-section` and change the gradient:

```css
.hero-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* Change colors to match your preference */
}
```

### Add More Projects

To add more projects, copy one of the existing project card structures in `index.html` and paste it before the closing `</div>` of the projects row.

## 📝 Notes

- **Contact Form**: The contact form is frontend-only. To make it functional, you'll need to:
  - Set up a backend service (PHP, Node.js, etc.)
  - Use a service like Formspree, EmailJS, or Netlify Forms
  - Update the form submission handler in `script.js`

- **Browser Compatibility**: This portfolio works on all modern browsers (Chrome, Firefox, Safari, Edge)

- **Performance**: Images are optimized for web. Make sure your screenshots are compressed (use tools like TinyPNG or ImageOptim)

## 🐛 Troubleshooting

### Images Not Showing
- Check that the `images` folder exists in the correct location
- Verify image file names match exactly (case-sensitive)
- Ensure image file extensions are correct (.jpg, .png, etc.)

### Styles Not Loading
- Make sure `style.css` is in the same directory as `index.html`
- Check that the CSS link in `index.html` is correct: `<link rel="stylesheet" href="style.css">`

### JavaScript Not Working
- Ensure `script.js` is in the same directory as `index.html`
- Check browser console for any errors (F12 → Console)
- Verify the script tag is before the closing `</body>` tag

## 📄 License

This portfolio template is free to use and modify for personal and commercial projects.

## 👨‍💻 Developer

**Kenjie Lucy** - Web/Software Developer  
Specializing in System Development & Web Applications

---

**Last Updated**: 2024
