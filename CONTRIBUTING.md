# Contributing to Retroweird

First off, thanks for considering contributing to Retroweird! 🎉

The web needs more weird, creative personal sites, and your contributions help make that happen.

## Code of Conduct

Be excellent to each other. This is a fun project about bringing back the creative spirit of the old web. Let's keep it positive, inclusive, and welcoming.

## How Can I Contribute?

### 🎨 Design Contributions

- **New Themes** - Create additional retro-inspired themes
- **Component Designs** - Design new widgets and components
- **Graphics** - Share retro graphics, dividers, badges
- **Layout Ideas** - Propose new layout options

### 💻 Code Contributions

- **Bug Fixes** - Fix issues and improve stability
- **New Features** - Implement new widgets or functionality
- **Performance** - Optimize load times and performance
- **Accessibility** - Improve accessibility features

### 📚 Documentation

- **Tutorials** - Write guides for beginners
- **Examples** - Share example sites and use cases
- **Translations** - Translate docs to other languages
- **Improvements** - Fix typos, clarify instructions

### 🐛 Bug Reports

- **Report Issues** - Found a bug? Let us know!
- **Test** - Try the theme on different platforms
- **Reproduce** - Help confirm reported issues

## Getting Started

### Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/retroweird.git
   cd retroweird
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a branch:
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
5. Make your changes
6. Test locally:
   ```bash
   npm start
   ```
7. Build to verify:
   ```bash
   npm run build
   ```

### Project Structure

```
retroweird/
├── _data/              # Configuration & data files
├── src/
│   ├── _includes/
│   │   ├── layouts/    # Page templates
│   │   └── components/ # Reusable components
│   ├── posts/          # Sample blog posts
│   ├── pages/          # Static pages
│   ├── css/
│   │   ├── themes/     # Theme CSS files
│   │   └── components/ # Component styles
│   ├── js/             # JavaScript enhancements
│   └── images/         # Graphics and images
└── .eleventy.js        # Eleventy config
```

## Contribution Guidelines

### Code Style

- **CSS**: Use CSS custom properties for themeable values
- **JavaScript**: Use vanilla JS, avoid dependencies when possible
- **HTML**: Use semantic HTML5 elements
- **Templates**: Keep Nunjucks templates clean and well-commented

### Naming Conventions

- **Files**: Use kebab-case (`my-file.njk`)
- **CSS Classes**: Use kebab-case (`.my-class`)
- **JavaScript**: Use camelCase (`myFunction`)
- **Data Files**: Use snake_case for keys (`my_value`)

### Commit Messages

Use clear, descriptive commit messages:

```
Add: New vaporwave theme variant
Fix: Sidebar alignment on mobile
Update: README with deployment instructions
Refactor: Simplify badge grid layout
```

### Adding a New Theme

1. Create CSS file in `src/css/themes/your-theme.css`
2. Define theme class: `.theme-yourtheme`
3. Set CSS custom properties
4. Style all major components
5. Test on sample content
6. Document in README
7. Add to theme options

Example structure:
```css
.theme-mytheme {
  --primary-color: #color;
  --secondary-color: #color;
}

.theme-mytheme body {
  /* Styles */
}

/* Additional styling */
```

### Adding a New Component

1. Create component file in `src/_includes/components/`
2. Add component styles in `src/css/components/`
3. Add data structure in `_data/` if needed
4. Document usage in README
5. Add example to sample site

### Adding a New Widget

1. Create widget component
2. Add configuration option in `site.json`
3. Add conditional logic in sidebar
4. Style the widget
5. Test in all themes
6. Document in README

## Pull Request Process

1. **Update Documentation** - Document any new features
2. **Test Thoroughly** - Test in multiple browsers
3. **Check Accessibility** - Ensure accessibility isn't compromised
4. **Keep It Retro** - Maintain the retro aesthetic
5. **One Feature Per PR** - Keep PRs focused

### PR Checklist

- [ ] Code follows project style
- [ ] Tested locally
- [ ] Works in all themes
- [ ] Accessible (keyboard nav, screen readers)
- [ ] Responsive on mobile
- [ ] Documentation updated
- [ ] No console errors
- [ ] Respects `prefers-reduced-motion`

## Testing

Before submitting:

```bash
# Start dev server
npm start

# Build for production
npm run build

# Check for errors
# Test in multiple browsers
# Test on mobile device
# Test with screen reader
# Test keyboard navigation
```

## What We're Looking For

### High Priority
- Bug fixes
- Accessibility improvements
- Performance optimizations
- Browser compatibility fixes
- Documentation improvements

### Medium Priority
- New widgets/components
- New themes
- Feature enhancements
- Examples and tutorials

### Low Priority (but still cool!)
- Easter eggs
- Fun animations
- Experimental features
- Creative ideas

## Design Philosophy

When contributing, keep in mind:

1. **Maximalism Over Minimalism** - More is more!
2. **Personality Over Perfection** - Weird is good
3. **Accessibility Matters** - Retro doesn't mean inaccessible
4. **No JavaScript Required** - Core functionality should work without JS
5. **User Control** - Let users customize everything
6. **Keep It Simple** - Easy for beginners to use

## Questions?

- 💬 [GitHub Discussions](https://github.com/yourusername/retroweird/discussions)
- 🐛 [GitHub Issues](https://github.com/yourusername/retroweird/issues)
- 📧 Email: your@email.com

## Recognition

Contributors will be:
- Listed in README
- Credited in CHANGELOG
- Celebrated in the community
- Given eternal glory in the annals of web history

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for helping make the web weird again! 🌈✨💫**
