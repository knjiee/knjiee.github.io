# 📸 Dynamic Gallery Setup Guide

## Overview

The portfolio uses a **dynamic image gallery** that automatically detects images from project folders. No backend required - works perfectly on GitHub Pages!

## 🎯 Maximum Gallery Size

**Maximum images per project: 50 images**

This is more than enough for showcasing any project. The system will automatically detect all images you add.

## 📁 Folder Structure

Create a folder for each project inside `images/projects/`:

```
images/
└── projects/
    ├── capstone-loan-system/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   ├── 3.png
    │   └── ...
    ├── attendance-system/
    │   ├── 1.jpg
    │   ├── 2.jpg
    │   └── ...
    └── ...
```

## 🖼️ Image Naming Convention

**Name your images sequentially starting from 1:**

- `1.jpg` (or `1.png`, `1.webp`, etc.)
- `2.jpg`
- `3.jpg`
- `4.jpg`
- ...and so on

### Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

## ✨ How It Works

1. **Automatic Detection**: When you click a project image, the system automatically scans the project folder for images numbered 1, 2, 3, etc.

2. **Smart Detection**: It tries different file extensions (jpg, png, webp, etc.) for each number until it finds a match.

3. **Dynamic Loading**: No need to update HTML or JavaScript - just add images to the folder with sequential names!

## 📝 Adding Images to a Project

### Step 1: Create Project Folder

Create a folder in `images/projects/` with your project ID:

```
images/projects/your-project-name/
```

### Step 2: Add Images

Add your images with sequential names:

```
images/projects/your-project-name/
├── 1.jpg    ← First image (main image)
├── 2.jpg    ← Second image
├── 3.jpg    ← Third image
├── 4.png    ← Fourth image (can mix formats)
└── 5.jpg    ← Fifth image
```

### Step 3: Update projects.json (if adding new project)

If you're adding a **new project**, update `projects.json`:

```json
{
  "your-project-name": {
    "title": "Your Project Title",
    "folder": "images/projects/your-project-name",
    "mainImage": "images/your-main-image.jpg"
  }
}
```

**Note**: For existing projects, you only need to add images to the folder - no JSON update needed!

## 🚀 Quick Start Example

Let's say you want to add 5 screenshots to the "Attendance System" project:

1. **Navigate to**: `images/projects/attendance-system/`

2. **Add your images**:
   - `1.jpg` (dashboard screenshot)
   - `2.jpg` (face recognition page)
   - `3.jpg` (reports page)
   - `4.jpg` (settings page)
   - `5.jpg` (user management)

3. **Done!** The gallery will automatically detect all 5 images.

## 💡 Tips

- **Main Image**: The first image (`1.jpg`) is typically used as the main thumbnail on the project card
- **Consistent Naming**: Use the same extension for consistency, but mixing is fine
- **No Gaps**: Don't skip numbers (1, 2, 3, 5 will stop at 3 - missing 4)
- **Optimize Images**: Compress images for web (use tools like TinyPNG) for faster loading

## 🔧 Troubleshooting

### Images Not Showing?

1. **Check folder name**: Must match the `data-project` attribute in HTML
2. **Check naming**: Must start from `1.jpg` (or `1.png`, etc.)
3. **Check path**: Folder should be in `images/projects/[project-name]/`
4. **Check format**: Use supported formats (jpg, png, webp, gif)

### Gallery Shows "No images found"

- Verify the folder exists: `images/projects/[project-name]/`
- Check that images are named starting from `1`
- Check browser console for errors

## 📊 Current Projects

All projects are configured in `projects.json`. Current projects:

- `capstone-loan-system`
- `lavalust-loan-system`
- `attendance-system`
- `hotel-management`
- `password-manager`
- `campusconnect`
- `student-services`
- `inventory-management`
- `endless-room-game`
- `time-keeping-system`

## 🎨 Best Practices

1. **Image Size**: Keep images under 2MB each for fast loading
2. **Aspect Ratio**: Use consistent aspect ratios for better gallery experience
3. **Resolution**: 1920x1080 or similar is ideal for screenshots
4. **Naming**: Use descriptive names in your file manager, but keep sequential numbers in the folder

---

**That's it!** Just add images with sequential numbers and the gallery will automatically detect them. No coding required! 🎉

