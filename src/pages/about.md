---
layout: layouts/page.njk
title: About Me
description: Learn more about me and this website
permalink: /about/
---

## 👋 Hey There!

Welcome to my little corner of the internet! I'm **{{ site.author.name }}**, and this is my personal website where I share my thoughts, projects, and whatever else strikes my fancy.

### 🎨 About This Site

This website is built with [Eleventy](https://www.11ty.dev/), a fantastic static site generator, and uses the **Retroweird** theme — a love letter to the creative, chaotic, and wonderfully weird websites of the 1990s and early 2000s.

Remember when the web was fun? When sites had personality? When Comic Sans was unironically cool? That's what I'm trying to capture here.

### 💫 What I Do

{{ site.author.bio }}

I believe in:
- The **IndieWeb** movement
- **Creativity** over conformity
- **Personal expression** in web design
- Making the web **weird** again

### 🌈 Why Retro?

I'm tired of every website looking the same. Clean, minimal, boring. Where's the personality? Where's the fun?

The early web was a place of experimentation and self-expression. Every site was unique, created by people who weren't afraid to try new things and break the rules.

This site is my small rebellion against the homogenization of the modern web. It's maximalist, colorful, and unapologetically retro.

### 📫 Get In Touch

Want to connect? Here's how you can reach me:

- **Email:** [{{ site.author.email }}](mailto:{{ site.author.email }})
{% if site.social.github %}- **GitHub:** [@{{ site.social.github }}](https://github.com/{{ site.social.github }})
{% endif %}{% if site.social.mastodon %}- **Mastodon:** [{{ site.social.mastodon }}]({{ site.social.mastodon }})
{% endif %}

### 🔗 Link to Me!

Want to add my site to your links page? Use this badge:

<div style="text-align: center; margin: 2rem 0;">
  <img src="{{ badges.myBadge.image }}" alt="{{ site.title }}" width="88" height="31" onerror="this.alt='Badge coming soon!'">
</div>

```html
{{ badges.myBadge.code }}
```

### 🤝 Credits & Inspiration

This site wouldn't exist without:

- The **GeoCities** archive projects
- The **Neocities** community
- The **IndieWeb** movement
- All the amazing retro web resources out there
- Everyone who's keeping the spirit of Web 1.0 alive

---

**"Make the web weird again!" 🌈✨💫**
