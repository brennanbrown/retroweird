# Quick Reference Card

## Commands

```bash
npm install          # Install dependencies
npm start           # Start dev server (localhost:8080)
npm run build       # Build for production (_site/)
```

## File Locations

| What                  | Where                          |
|-----------------------|--------------------------------|
| Site config           | `_data/site.json`              |
| Blog posts            | `src/posts/*.md`               |
| Static pages          | `src/pages/*.md`               |
| Layouts               | `src/_includes/layouts/`       |
| Components            | `src/_includes/components/`    |
| Themes                | `src/css/themes/`              |
| Images                | `src/images/`                  |
| JavaScript            | `src/js/retro-effects.js`      |

## Quick Edits

### Change Theme
Edit `_data/site.json`:
```json
{ "theme": "vaporwave" }
```
Options: `default`, `vaporwave`, `geocities`, `myspace`

### Toggle Widgets
Edit `_data/site.json`:
```json
{
  "modules": {
    "guestbook": true,
    "badgeWall": false
  }
}
```

### Add Blog Post
Create `src/posts/my-post.md`:
```yaml
---
title: My Post
date: 2025-10-01
tags: [personal]
layout: layouts/post.njk
---
Content here!
```

### Add Link
Edit `_data/blogroll.json` and add to a category's `links` array.

### Add Badge
Edit `_data/badges.json` and add to a category's `badges` array.

## Themes

| Theme       | Style                      | Colors              |
|-------------|----------------------------|---------------------|
| default     | GeoCities classic          | Pink/Cyan/Yellow    |
| vaporwave   | A E S T H E T I C          | Pink/Cyan/Purple    |
| geocities   | Maximum 90s                | Rainbow everything  |
| myspace     | Early 2000s social         | Blue/Orange/White   |

## Components

| Component      | File                          | Data File            |
|----------------|-------------------------------|----------------------|
| Header         | `components/header.njk`       | `site.json`          |
| Footer         | `components/footer.njk`       | `site.json`          |
| Sidebar        | `components/sidebar.njk`      | `site.json`          |
| Badge Wall     | `components/badge-wall.njk`   | `badges.json`        |
| Guestbook      | `components/guestbook.njk`    | `guestbook.json`     |
| Blogroll       | `components/blogroll.njk`     | `blogroll.json`      |
| Webring        | `components/webring.njk`      | `webring.json`       |

## Filters

```njk
{{ date | readableDate }}          → "October 1, 2025"
{{ date | htmlDateString }}        → "2025-10-01"
{{ array | limit(5) }}             → First 5 items
{{ array | random }}               → Random item
{{ array | shuffle }}              → Shuffled array
```

## Shortcodes

```njk
{% year %}                         → 2025
{% badge img, alt, url %}          → 88x31 badge
{% marquee %}text{% endmarquee %}  → Scrolling text
```

## Layouts

| Layout    | Use For         | Frontmatter                        |
|-----------|-----------------|-------------------------------------|
| base.njk  | Base template   | Extended by other layouts          |
| post.njk  | Blog posts      | `layout: layouts/post.njk`         |
| page.njk  | Static pages    | `layout: layouts/page.njk`         |

## Image Resources

- **GifCities**: gifcities.org
- **88x31 Badges**: cyber.dabamos.de/88x31/
- **Pixel Safari**: pixelsafari.neocities.org
- **Gifs.cc**: gifs.cc

## Deployment

### Neocities
1. `npm run build`
2. Upload `_site/` contents

### Netlify
1. Connect GitHub repo
2. Build: `npm run build`
3. Publish: `_site`

### GitHub Pages
1. Push to GitHub
2. Enable Pages
3. Set up Actions

## Common Tasks

**Add new page:**
```bash
touch src/pages/mypage.md
```

**Add navigation link:**
Edit `src/_includes/components/header.njk`

**Change colors:**
Edit theme file in `src/css/themes/`

**Add widget:**
Edit `src/_includes/components/sidebar.njk`

## Help

- 📖 [README.md](README.md) - Full docs
- 🚀 [GETTING-STARTED.md](GETTING-STARTED.md) - Setup guide
- 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute
- 🐛 GitHub Issues - Report bugs
- 💬 GitHub Discussions - Ask questions

---

**Make the web weird! 🌈**
