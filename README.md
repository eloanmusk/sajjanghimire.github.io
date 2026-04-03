# Sajjan Ghimire - Software Engineer Portfolio

A modern, minimalist portfolio website built with pure HTML, CSS, and JavaScript. Perfect for showcasing your software engineering projects and skills.

## 📋 Features

- **Minimalist Design** - Clean black and white aesthetic with elegant typography
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Static Site** - No build process needed, ready for GitHub Pages
- **Smooth Animations** - Fade-in effects and hover interactions
- **Fast Loading** - Optimized performance with minimal dependencies
- **Professional Layout** - Hero section, About, Projects showcase, and Contact

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new repository** on GitHub:
   - Go to github.com and create a new repository named `yourusername.github.io`
   - (Replace `yourusername` with your actual GitHub username)

2. **Extract the portfolio files** to your computer

3. **Upload files to your repository**:
   - Option A: Drag and drop files into GitHub web interface
   - Option B: Use Git command line:
     ```bash
     git clone https://github.com/yourusername/yourusername.github.io.git
     cd yourusername.github.io
     # Copy portfolio files here
     git add .
     git commit -m "Initial portfolio commit"
     git push origin main
     ```

4. **View your site**:
   - Visit `https://yourusername.github.io`
   - Your portfolio is now live! 🎉

### Option 2: Local Testing

1. **Extract the portfolio files**
2. **Open `index.html`** in your web browser
3. The site will work perfectly locally

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactions
├── assets/             # Images and SVG files
│   ├── profile.jpg     # Your profile photo
│   ├── project1.svg    # Project placeholder
│   ├── project2.svg    # Project placeholder
│   ├── project3.svg    # Project placeholder
│   └── project4.svg    # Project placeholder
└── README.md           # This file
```

## ✏️ Customization Guide

### Change Your Information

**Edit `index.html`:**

1. **Update your name and contact**:
   ```html
   <a href="mailto:oksajjan@gmail.com" class="btn btn-primary">Get in Touch</a>
   ```
   Replace email with your own.

2. **Update About section**:
   - Find the `<section id="about">` section
   - Replace the text with your bio

3. **Update project details**:
   - Find `<section id="projects">`
   - Update project titles, descriptions, and links

### Change Colors

**Edit `styles.css` (top of the file)**:

```css
:root {
    --primary: #000000;        /* Change black */
    --secondary: #ffffff;      /* Change white */
    --text: #000000;           /* Text color */
    --text-light: #666666;     /* Light gray text */
}
```

### Change Fonts

Already optimized with professional fonts:
- **Titles**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

To change, replace in `index.html` line with fonts from Google Fonts.

### Update Profile Image

1. Replace `assets/profile.jpg` with your image
2. Keep the same filename or update the reference in `index.html`

### Add Project Images

1. Add your project screenshots to the `assets/` folder
2. Update `index.html` to reference them:
   ```html
   <img src="assets/your-project-image.png" alt="Project Name">
   ```

## 🔗 Add Real Links

Update project links in `index.html`:

```html
<a href="https://github.com/yourrepo" class="link-btn">View Project</a>
```

## 🎨 Design Details

- **Hero Section** - Large display with profile image
- **About Section** - Bio with skill tags
- **Projects Grid** - 4-column responsive layout
- **Contact Section** - Call-to-action with email link
- **Responsive** - Adapts beautifully to all screen sizes

## 🛠️ Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The site is fully responsive:
- Navigation adapts to smaller screens
- Single column layout on mobile
- Touch-friendly buttons
- Fast loading on all connections

## 🚀 Next Steps

1. Deploy to GitHub Pages
2. Add your real project images
3. Update project descriptions and links
4. Share your portfolio URL!

## 📧 Contact & Support

If you need help with GitHub Pages:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Help & Support](https://support.github.com)

---

**Created with precision and design excellence.** ✨

Make it your own and share with the world! 🌍
