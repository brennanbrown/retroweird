# 🌈 Retroweird Blog Theme 🌈

> **Make the web weird again!**

A maximalist, customizable blog theme for [Eleventy](https://www.11ty.dev/) inspired by GeoCities, MySpace, and the creative chaos of 1990s-2000s personal homepages.

Created by [Brennan Kenneth Brown](https://brennanbrown.ca) | A [Berry House](https://berryhouse.ca) project

![Version](https://img.shields.io/badge/version-1.0.0-ff00ff)
![Eleventy](https://img.shields.io/badge/eleventy-2.0+-00ffff)
![License](https://img.shields.io/badge/license-MIT-ffff00)
[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/retroweird/deploys)

## ✨ Features

- 🎨 **6 Pre-built Themes** - Default, Vaporwave, GeoCities, MySpace, Brutalist, Academia
- 🧩 **Modular Widget System** - Easy to customize sidebar components
- 🏆 **88x31 Badge Wall** - Display your web button collection
- 🎨 **Badge Generator** - Create custom 88x31 badges with live preview
- 📖 **Guestbook** - Let visitors leave messages
- 🔗 **Blogroll** - Curated links with random link button
- 💫 **Webring Support** - Connect with other sites
- 🎵 **Now Playing Widget** - Share what you're listening to
- 🎵 **Music Player** - Background music with volume control
- ✨ **Custom Cursors** - 6 different cursor trail effects
- 📊 **Visitor Counter** - Retro LED-style hit counter
- 📡 **RSS Feed** - Full Atom feed for blog posts
- 🚫 **Custom 404 Page** - Fun error page with easter eggs
- 🌐 **IndieWeb Ready** - Microformats2, RSS, Webmentions support
- ♿ **Accessible** - Despite the retro aesthetic, still screen-reader friendly
- 🚀 **No JavaScript Required** - Progressive enhancement only
- 📱 **Responsive** - Works on all devices (yes, even mobile!)

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/brennanbrown/retroweird.git
cd retroweird

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Your site will be available at `http://localhost:8080`

---

## 🚀 Deploying to Netlify

### One-Click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brennanbrown/retroweird)

### Manual Deployment

1. **Push your site to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com) and sign in
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `_site`
   - **Node version**: 14 or higher

4. **Deploy!**
   - Click "Deploy site"
   - Your site will be live at `https://your-site-name.netlify.app`

### Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

### Environment Variables (Optional)

If you need environment variables:
- Go to Site settings → Build & deploy → Environment
- Add your variables (e.g., API keys)

### ⚠️ About Images

**The theme works perfectly without images** (they gracefully hide if missing), but to get the full retro experience, you'll want to add:
- Background patterns
- Divider graphics  
- 88x31 badges
- Animated GIFs

**📖 See [docs/IMAGE-RESOURCES.md](docs/IMAGE-RESOURCES.md) for a complete guide** on where to find thousands of free retro graphics!

## 📝 Customization

### Basic Configuration

Edit `_data/site.json` to customize your site:

```json
{
  "title": "My Radical Homepage",
  "description": "Welcome to my corner of the web!",
  "author": {
    "name": "Your Name",
    "email": "you@example.com",
    "bio": "Your bio here"
  },
  "theme": "default",
  "modules": {
    "guestbook": true,
    "blogroll": true,
    "badgeWall": true
  }
}
```

### Changing Themes

Choose from 6 pre-built themes:
- `default` - Classic GeoCities with rainbow gradients
- `vaporwave` - A E S T H E T I C pink and cyan
- `geocities` - Maximum 90s nostalgia
- `myspace` - Early 2000s social media vibes
- `brutalist` - Maximum visual chaos with neon colors
- `academia` - 1990s university homepage style

Just change the `theme` value in `site.json`!

### Adding Content

#### Create a Blog Post

```bash
# Create a new markdown file in src/posts/
touch src/posts/my-new-post.md
```

Add frontmatter:

```yaml
---
title: My Post Title
description: A short description
date: 2025-10-01
tags: [personal, coding]
layout: layouts/post.njk
mood: excited
music: "Your Favorite Song"
---

Your content here!
```

#### Create a Static Page

```bash
# Create a new file in src/pages/
touch src/pages/projects.md
```

Add frontmatter:

```yaml
---
layout: layouts/page.njk
title: My Projects
permalink: /projects/
---

Your page content here!
```

### Customizing Widgets

Enable/disable widgets in `_data/site.json`:

```json
{
  "modules": {
    "aboutMe": true,
    "visitorCounter": true,
    "nowPlaying": true,
    "updates": true,
    "webring": true,
    "badgeWall": true,
    "blogroll": true,
    "adSpace": true
  }
}
```

### Managing Your Badge Collection

Edit `_data/badges.json` to add your 88x31 buttons:

```json
{
  "categories": [
    {
      "name": "Web Standards",
      "badges": [
        {
          "title": "Valid HTML",
          "image": "/images/badges/valid-html.gif",
          "url": "https://validator.w3.org/",
          "alt": "Valid HTML"
        }
      ]
    }
  ]
}
```

### Creating a Blogroll

Edit `_data/blogroll.json` to add your favorite sites:

```json
{
  "categories": [
    {
      "name": "Cool Personal Sites",
      "links": [
        {
          "title": "Friend's Site",
          "url": "https://example.com",
          "description": "My friend's awesome page",
          "status": "active"
        }
      ]
    }
  ]
}
```

## 🎨 Themes

### 1. Default Theme
Classic GeoCities aesthetic with:
- Rainbow gradient backgrounds
- Hot pink, cyan, and yellow color scheme
- Animated elements
- Maximum nostalgia

### 2. Vaporwave Theme
A E S T H E T I C vibes with:
- Pink (#FF71CE) and cyan (#01CDFE) colors
- Neon glow effects
- Grid backgrounds
- Glitch animations

### 3. GeoCities Theme
Pure 1990s web with:
- Comic Sans and bold colors
- Under construction graphics
- Beveled borders everywhere
- Rainbow scrolling headers

### 4. MySpace Theme
Early 2000s social networking style:
- Blue and orange color scheme
- Profile-style layouts
- Rounded corners
- Clean but retro

### 5. Brutalist Theme ⭐ NEW
Maximum visual chaos featuring:
- Neon colors (Red, Green, Blue, Yellow)
- Overlapping elements with multiple shadows
- Glitch and shake animations
- Black background with neon text
- All uppercase typography

### 6. Academia Theme ⭐ NEW
1990s university homepage style:
- Gray (#C0C0C0) background
- Times New Roman and Arial fonts
- Minimal styling with simple borders
- Professional, readable design
- No animations for serious look

## 🛠️ Advanced Customization

### Creating Your Own Theme

1. Create a new CSS file in `src/css/themes/`
2. Define theme variables:

```css
.theme-mytheme {
  --primary-color: #yourcolor;
  --secondary-color: #yourcolor;
  /* ... more variables */
}
```

3. Add theme-specific styling
4. Set `"theme": "mytheme"` in `site.json`

### Adding Custom Components

1. Create a new component in `src/_includes/components/`
2. Include it in your layout or sidebar:

```njk
{% include "components/your-component.njk" %}
```

### Customizing Layouts

Edit layouts in `src/_includes/layouts/`:
- `base.njk` - Base HTML structure
- `post.njk` - Blog post layout
- `page.njk` - Static page layout

## 📚 Documentation

### Project Structure

```
retroweird/
├── _data/              # Site configuration & data files
│   ├── site.json
│   ├── badges.json
│   ├── blogroll.json
│   ├── webring.json
│   └── guestbook.json
├── src/
│   ├── _includes/
│   │   ├── layouts/    # Page layouts
│   │   └── components/ # Reusable components
│   ├── posts/          # Blog posts (markdown)
│   ├── pages/          # Static pages
│   ├── css/
│   │   ├── themes/     # Theme CSS files
│   │   └── components/ # Component styles
│   ├── js/             # JavaScript enhancements
│   └── images/         # Images and graphics
├── .eleventy.js        # Eleventy configuration
└── package.json
```

### Available Filters

- `readableDate` - Format dates nicely
- `htmlDateString` - ISO date format
- `limit` - Limit array length
- `random` - Get random array item
- `shuffle` - Shuffle an array

### Shortcodes

- `{% year %}` - Current year
- `{% badge image, alt, url %}` - 88x31 badge
- `{% marquee content %}` - Scrolling text

## 🌐 Deployment

### Neocities

Perfect thematic match!

```bash
npm run build
# Upload contents of _site/ to Neocities
```

### Netlify

1. Connect your GitHub repo
2. Build command: `npm run build`
3. Publish directory: `_site`
4. Deploy!

### GitHub Pages

1. Enable GitHub Pages in repo settings
2. Set up GitHub Actions for automatic deployment
3. Done!

### Other Platforms

The built site in `_site/` is just HTML/CSS/JS. Upload it anywhere!

## ♿ Accessibility

Despite the retro aesthetic, this theme is built with accessibility in mind:

- ✅ Semantic HTML
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader friendly
- ✅ Alt text for images
- ✅ Skip to content link
- ✅ Respects `prefers-reduced-motion`
- ✅ Sufficient color contrast (with accessible mode)

### Accessible Mode

Users can toggle accessible mode which:
- Disables animations
- Improves contrast
- Adds focus indicators
- Pauses marquees

## 📚 Documentation

**Essential Guides:**
- **[Getting Started Guide](docs/GETTING-STARTED.md)** - Step-by-step setup tutorial
- **[Image Resources](docs/IMAGE-RESOURCES.md)** - Where to find free retro graphics
- **[Quick Reference](docs/QUICK-REFERENCE.md)** - Cheat sheet for common tasks

**Additional Documentation:**
- [CHANGELOG.md](CHANGELOG.md) - Version history and updates
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- [docs/PROJECT-SUMMARY.md](docs/PROJECT-SUMMARY.md) - Complete feature overview
- [docs/PHASE-2-FEATURES.md](docs/PHASE-2-FEATURES.md) - Advanced features documentation

## 🐛 Browser Support

- ✅ Chrome/Edge (modern)
- ✅ Firefox (modern)
- ✅ Safari (modern)
- ⚠️ Internet Explorer (graceful degradation)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Ideas for Contributions

- New theme designs
- Additional widgets/components
- Documentation improvements
- Bug fixes
- Accessibility improvements

## 📄 License

This project uses a dual license:

- **Code** (HTML, CSS, JavaScript, Eleventy configuration): [MIT License](LICENSE)
- **Content** (Sample blog posts, documentation): [Public Domain (CC0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/)

Feel free to use this theme for your own site! Attribution is appreciated but not required.

## 💖 Credits & Inspiration

- **GeoCities** - RIP, you magnificent beast
- **MySpace** - For teaching us all HTML
- **Neocities** - Keeping the spirit alive
- **IndieWeb** - For the community
- **88x31.org** - Badge collections
- **GifCities** - Animated GIF archives
- **The Yesterweb** - Inspiration and resources

## 🔗 Links

- 🌐 [Demo Site](https://retroweird.netlify.app)
- 💻 [GitHub Repository](https://github.com/brennanbrown/retroweird)
- 👤 [Brennan's Portfolio](https://brennanbrown.ca)
- 🏠 [Berry House](https://berryhouse.ca)
- 📚 [Eleventy Documentation](https://www.11ty.dev/docs/)
- 🌍 [Neocities](https://neocities.org)
- 🕸️ [IndieWeb](https://indieweb.org)

## 📬 Support

- 🐛 [Report a bug](https://github.com/brennanbrown/retroweird/issues)
- 💡 [Request a feature](https://github.com/brennanbrown/retroweird/issues)
- 💬 [Discussions](https://github.com/brennanbrown/retroweird/discussions)
- ☕ [Support on Ko-fi](https://ko-fi.com/brennan)
- 💝 [GitHub Sponsors](https://github.com/sponsors/brennanbrown)

---

**Made with 💖 and nostalgia by [Brennan Kenneth Brown](https://brennanbrown.ca)**

A [Berry House](https://berryhouse.ca) project

🌈 **Make the web weird again!** 🌈
