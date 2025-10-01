# 🚀 Deployment Guide

## Deploying to Netlify

### Quick Deploy (Recommended)

1. **One-Click Deploy**
   
   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/brennanbrown/retroweird)

### Manual Deployment

#### Step 1: Prepare Your Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Retroweird theme"

# Add your GitHub repo as remote
git remote add origin https://github.com/yourusername/your-site.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [https://netlify.com](https://netlify.com)
2. Sign in with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** as your Git provider
5. Select your repository from the list

#### Step 3: Configure Build Settings

Netlify should auto-detect the settings, but verify:

- **Build command**: `npm run build`
- **Publish directory**: `_site`
- **Branch to deploy**: `main`

#### Step 4: Advanced Settings (Optional)

**Environment variables** (if needed):
- Go to: Site settings → Build & deploy → Environment
- Add any required variables

**Node version** (already configured in `netlify.toml`):
- Version: 14 or higher

#### Step 5: Deploy!

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at: `https://random-name-12345.netlify.app`

---

## Custom Domain Setup

### Option 1: Netlify Subdomain

1. Go to: Site settings → Domain management
2. Click **"Options"** → **"Edit site name"**
3. Choose your preferred subdomain: `your-site-name.netlify.app`

### Option 2: Custom Domain

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)
2. In Netlify: Site settings → Domain management
3. Click **"Add custom domain"**
4. Enter your domain (e.g., `yoursite.com`)
5. Follow the DNS configuration instructions

**DNS Configuration:**

For root domain (`yoursite.com`):
```
A Record: 75.2.60.5
```

For www subdomain:
```
CNAME Record: your-site.netlify.app
```

**Enable HTTPS:**
- Netlify provides free SSL certificates via Let's Encrypt
- After DNS propagates, click "Verify DNS configuration"
- Then "Provision certificate"

---

## Deployment Features

### Automatic Deploys

Every time you push to `main`, Netlify automatically:
1. Pulls the latest code
2. Runs `npm install`
3. Runs `npm run build`
4. Publishes the `_site` directory
5. Invalidates the CDN cache

### Deploy Previews

- Every Pull Request gets a preview deploy
- Test changes before merging
- Share preview links with others

### Branch Deploys (Optional)

Deploy specific branches:
1. Go to: Site settings → Build & deploy → Deploy contexts
2. Enable branch deploys
3. Choose which branches to deploy

---

## Performance Optimization

The included `netlify.toml` already configures:

### Headers
- Security headers (XSS, frame options, etc.)
- Cache-Control headers for static assets
- Content-Type enforcement

### Redirects
- `/feed` → `/feed.xml` (301 redirect)
- Add custom redirects as needed

### Asset Optimization
- Images: Cached for 1 year
- CSS/JS: Cached for 1 year
- HTML: Not cached (to get updates immediately)

---

## Monitoring & Analytics

### Netlify Analytics (Paid)

- Server-side analytics (no cookies needed)
- Go to: Site settings → Analytics
- Enable for $9/month

### Free Alternatives

**Plausible** (Privacy-focused):
```html
<script defer data-domain="yoursite.com" src="https://plausible.io/js/script.js"></script>
```

**Goat Counter** (Open source):
```html
<script data-goatcounter="https://yoursite.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
```

Add to `src/_includes/layouts/base.njk` before `</body>`

---

## Troubleshooting

### Build Fails

**Error**: "Module not found"
- **Solution**: Make sure `package.json` includes all dependencies
- Run `npm install` locally to verify

**Error**: "Command failed"
- **Solution**: Check the build log for specific errors
- Test `npm run build` locally first

### Site Not Updating

**Issue**: Changes not showing
- **Solution**: 
  1. Clear Netlify cache: Deploys → Trigger deploy → Clear cache and deploy
  2. Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)

### Images Not Loading

**Issue**: Images show broken
- **Solution**: 
  1. Check image paths are relative to `_site/`
  2. Verify images are in `src/images/` directory
  3. Check `onerror` attributes are in place

### Custom Domain Not Working

**Issue**: Domain shows error
- **Solution**:
  1. Wait for DNS propagation (up to 48 hours)
  2. Verify DNS settings with registrar
  3. Check Netlify DNS configuration page

---

## Build Time Optimization

### Reduce Build Time

1. **Use `.eleventyignore`** to exclude unnecessary files
2. **Limit image processing** if using plugins
3. **Cache node_modules** (Netlify does this automatically)

### Current Build Stats

- **Average build time**: ~10-15 seconds
- **Deploy time**: ~5 seconds
- **Total time**: ~20 seconds

---

## Environment Variables

If you need environment variables (API keys, etc.):

### In Netlify Dashboard

1. Go to: Site settings → Build & deploy → Environment
2. Click **"Edit variables"**
3. Add your variables:
   ```
   API_KEY=your-key-here
   SITE_URL=https://yoursite.com
   ```

### In Your Code

Access them in Eleventy:
```js
// .eleventy.js
module.exports = function(eleventyConfig) {
  const apiKey = process.env.API_KEY;
  // Use as needed
};
```

---

## Continuous Deployment Workflow

### Recommended Git Workflow

```bash
# 1. Create a new branch
git checkout -b feature/new-post

# 2. Make changes
# ... edit files ...

# 3. Commit changes
git add .
git commit -m "Add new blog post"

# 4. Push to GitHub
git push origin feature/new-post

# 5. Create Pull Request
# - GitHub will show a "Compare & pull request" button
# - Netlify will create a deploy preview

# 6. Review preview deploy
# - Check the preview link in the PR
# - Test everything works

# 7. Merge to main
# - Netlify automatically deploys to production
```

---

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Eleventy Deployment Docs](https://www.11ty.dev/docs/deployment/)
- [Netlify Status](https://www.netlifystatus.com/)
- [Netlify Community](https://answers.netlify.com/)

---

## Support

Need help with deployment?
- 💬 [Netlify Community Forums](https://answers.netlify.com/)
- 🐛 [Report an issue](https://github.com/brennanbrown/retroweird/issues)
- 📧 [Email Brennan](mailto:mail@brennanbrown.ca)

---

**🎉 Happy deploying! Make the web weird again! 🌈**
