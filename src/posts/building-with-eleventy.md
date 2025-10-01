---
title: Building a Retro Site with Eleventy
description: How I built this site using Eleventy and a lot of nostalgia
date: 2025-09-15
tags:
  - tutorial
  - eleventy
  - web development
layout: layouts/post.njk
mood: creative
---

## How This Site Was Made

A lot of people have been asking me how I built this site. The short answer? **[Eleventy](https://www.11ty.dev/)** and a whole lot of 90s inspiration.

### Why Eleventy?

I chose Eleventy for a few reasons:

1. **Simple** - It's just JavaScript. No complex build processes.
2. **Fast** - Static sites are lightning quick.
3. **Flexible** - Use any template language you want.
4. **No JavaScript Required** - The output is pure HTML and CSS.

Plus, it's perfect for personal sites like this one!

### The Tech Stack

Here's what powers this retro wonderland:

```javascript
{
  "generator": "Eleventy",
  "templates": "Nunjucks",
  "styling": "Pure CSS",
  "hosting": "Your choice!",
  "vibes": "Immaculate"
}
```

### Project Structure

The basic structure looks like this:

```
retroweird/
├── src/
│   ├── _includes/
│   │   ├── layouts/
│   │   └── components/
│   ├── posts/
│   ├── pages/
│   ├── css/
│   └── js/
├── _data/
└── .eleventy.js
```

### Key Features

#### 1. Modular Components

Everything is broken down into reusable components:

- Header
- Footer
- Sidebar widgets
- Badge wall
- Guestbook
- Webring

This makes it easy to customize what shows up where.

#### 2. Multiple Themes

I built four different themes:

- **Default** - Classic GeoCities vibes
- **Vaporwave** - A E S T H E T I C
- **GeoCities** - Maximum nostalgia
- **MySpace** - Early 2000s social media

You can switch between them by changing one line in the config!

#### 3. Data-Driven Content

All the customizable stuff lives in JSON files:

- `site.json` - Site settings
- `badges.json` - 88x31 button collection
- `blogroll.json` - Cool links
- `webring.json` - Webring navigation
- `guestbook.json` - Visitor messages

#### 4. IndieWeb Ready

The theme includes support for:

- Microformats2
- RSS feeds
- Webmentions (optional)
- rel="me" links

### The CSS

The styling is pure CSS with CSS custom properties for easy theming:

```css
:root {
  --font-pixel: 'Silkscreen', monospace;
  --font-display: 'Press Start 2P', monospace;
  --font-body: 'VT323', cursive;
}
```

Each theme overrides these variables to create totally different looks.

### JavaScript Enhancements

The site works perfectly without JavaScript, but I added some fun extras:

- Cursor trail effects
- Random link button
- Visitor counter animation
- Easter eggs (try the Konami code!)

All of it respects `prefers-reduced-motion` for accessibility.

### Getting Started

Want to build your own retro site? Here's how:

1. **Install Eleventy**
   ```bash
   npm install @11ty/eleventy
   ```

2. **Clone the theme**
   ```bash
   git clone https://github.com/yourusername/retroweird
   ```

3. **Customize**
   Edit `_data/site.json` with your info

4. **Build**
   ```bash
   npm run build
   ```

5. **Deploy**
   Upload to Neocities, Netlify, or anywhere!

### Tips for Retro Design

1. **Embrace maximalism** - More is more!
2. **Use web-safe fonts** - Or fun Google Fonts
3. **Don't be afraid of color** - Neon everything!
4. **Add personality** - This is YOUR site
5. **Have fun** - That's the whole point!

### Resources

- [Eleventy Docs](https://www.11ty.dev/docs/)
- [GifCities](https://gifcities.org/) - Free retro GIFs
- [88x31 Buttons](https://cyber.dabamos.de/88x31/) - Button collection
- [Google Fonts](https://fonts.google.com/) - Retro fonts

---

Questions? Comments? Sign my [guestbook](/guestbook/) or check out the [GitHub repo](https://github.com/yourusername/retroweird)!

**Happy building! 🚀**
