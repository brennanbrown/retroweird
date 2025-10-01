# 🚀 Getting Started with Retroweird

Welcome! This guide will help you get your retro website up and running.

## Step 1: Installation

First, make sure you have Node.js installed on your computer. Then:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```

Visit `http://localhost:8080` to see your site!

## Step 2: Personalize Your Site

### Edit Site Information

Open `_data/site.json` and update:

```json
{
  "title": "YOUR SITE NAME HERE",
  "description": "YOUR DESCRIPTION",
  "author": {
    "name": "YOUR NAME",
    "email": "your@email.com",
    "bio": "Write a short bio about yourself"
  }
}
```

### Choose Your Theme

Pick one of the 4 themes:
- `default` - Classic GeoCities rainbow
- `vaporwave` - Pink and cyan aesthetic
- `geocities` - Maximum 90s vibes
- `myspace` - Early 2000s social media

Change it in `_data/site.json`:
```json
{
  "theme": "vaporwave"
}
```

### Turn Widgets On/Off

Decide which widgets to show:

```json
{
  "modules": {
    "guestbook": true,      // Show guestbook
    "blogroll": true,       // Show links page
    "badgeWall": true,      // Show 88x31 badges
    "visitorCounter": true, // Show hit counter
    "nowPlaying": true,     // Show music widget
    "aboutMe": true,        // Show about section
    "updates": true         // Show updates feed
  }
}
```

## Step 3: Write Your First Post

Create a new file: `src/posts/my-first-post.md`

```markdown
---
title: My First Post!
description: Hello, world!
date: 2025-10-01
tags: [personal, welcome]
layout: layouts/post.njk
---

# Hello!

This is my first blog post. Welcome to my site!
```

Save it and it will automatically appear on your blog!

## Step 4: Customize Your About Page

Edit `src/pages/about.md` to tell visitors about yourself.

## Step 5: Add Your Links

Edit `_data/blogroll.json` to add your favorite websites:

```json
{
  "categories": [
    {
      "name": "My Friends",
      "links": [
        {
          "title": "Cool Site",
          "url": "https://example.com",
          "description": "A really cool site",
          "status": "active"
        }
      ]
    }
  ]
}
```

## Step 6: Add Badges

Edit `_data/badges.json` to manage your 88x31 badge collection.

Find badges at:
- https://cyber.dabamos.de/88x31/
- https://anlucas.neocities.org/88x31Buttons

## Step 7: Add Graphics

⚠️ **Important**: The site works without images! They gracefully hide if missing.

But for the full retro experience, add graphics to `src/images/`:

- **backgrounds/** - Tiled patterns for page backgrounds
- **dividers/** - Rainbow lines, stars, etc.
- **badges/** - Your 88x31 button collection
- **animations/** - Animated GIFs

**📖 Complete guide with download links**: [IMAGE-RESOURCES.md](IMAGE-RESOURCES.md)

Quick resources:
- **GifCities.org** - Thousands of archived GIFs
- **cyber.dabamos.de/88x31** - 4,540+ badges
- **pixelsafari.neocities.org** - Organized dividers

## Step 8: Test Your Site

```bash
# Build for production
npm run build

# Output is in _site/ directory
```

Check that everything works!

## Step 9: Deploy

### Option 1: Neocities (Recommended!)

1. Sign up at [Neocities.org](https://neocities.org)
2. Build your site: `npm run build`
3. Upload the contents of `_site/` to Neocities

### Option 2: Netlify

1. Push your code to GitHub
2. Sign up at [Netlify.com](https://netlify.com)
3. Connect your repo
4. Build command: `npm run build`
5. Publish directory: `_site`

### Option 3: GitHub Pages

1. Push to GitHub
2. Enable Pages in repo settings
3. Set up GitHub Actions
4. Done!

## Quick Customization Checklist

- [ ] Updated `_data/site.json` with your info
- [ ] Chose a theme
- [ ] Enabled/disabled desired widgets
- [ ] Wrote your first blog post
- [ ] Updated the About page
- [ ] Added links to blogroll
- [ ] Collected some 88x31 badges
- [ ] Added retro graphics
- [ ] Tested the site locally
- [ ] Deployed to hosting

## Need Help?

- 📖 Read the [README.md](README.md)
- 🐛 [Report issues](https://github.com/yourusername/retroweird/issues)
- 💬 [Ask questions](https://github.com/yourusername/retroweird/discussions)

## Tips for Success

1. **Start Simple** - Get the basics working first
2. **Have Fun** - This is YOUR site, make it weird!
3. **Be Patient** - Learning takes time
4. **Explore** - Look at other retro sites for inspiration
5. **Share** - Show off your site in the Neocities community

---

**Now go make the web weird! 🌈✨**
