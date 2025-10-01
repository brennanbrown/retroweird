// Retro Effects JavaScript
// Progressive enhancement for nostalgic web effects

(function() {
  'use strict';

  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize all effects when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    if (!prefersReducedMotion) {
      initCursorTrail();
      initSparkles();
      initMarqueeAlternative();
    }
    
    initRandomLink();
    initBadgeHover();
    initThemeSwitcher();
    initAccessibilityToggle();
  }

  // Cursor trail effect (stars following cursor)
  function initCursorTrail() {
    const trail = [];
    const maxTrail = 10;
    
    document.addEventListener('mousemove', function(e) {
      if (trail.length >= maxTrail) {
        const oldStar = trail.shift();
        if (oldStar && oldStar.parentNode) {
          oldStar.parentNode.removeChild(oldStar);
        }
      }
      
      const star = document.createElement('span');
      star.textContent = '✨';
      star.style.position = 'fixed';
      star.style.left = e.clientX + 'px';
      star.style.top = e.clientY + 'px';
      star.style.pointerEvents = 'none';
      star.style.zIndex = '9999';
      star.style.fontSize = '20px';
      star.style.animation = 'fade-out 1s forwards';
      star.setAttribute('aria-hidden', 'true');
      
      document.body.appendChild(star);
      trail.push(star);
      
      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 1000);
    });
  }

  // Sparkle effect on random page elements
  function initSparkles() {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-out {
        to {
          opacity: 0;
          transform: translateY(-20px) scale(0);
        }
      }
      
      @keyframes sparkle {
        0%, 100% { opacity: 0; }
        50% { opacity: 1; }
      }
      
      .sparkle {
        position: absolute;
        pointer-events: none;
        animation: sparkle 1s ease-in-out;
      }
    `;
    document.head.appendChild(style);
  }

  // CSS-based marquee alternative for better accessibility
  function initMarqueeAlternative() {
    const marquees = document.querySelectorAll('marquee');
    
    marquees.forEach(marquee => {
      const content = marquee.innerHTML;
      const direction = marquee.getAttribute('behavior') || 'scroll';
      const scrollamount = marquee.getAttribute('scrollamount') || '3';
      
      // Create CSS animation alternative
      const wrapper = document.createElement('div');
      wrapper.className = 'marquee-wrapper';
      wrapper.setAttribute('role', 'region');
      wrapper.setAttribute('aria-label', 'Scrolling announcement');
      
      const inner = document.createElement('div');
      inner.className = 'marquee-content';
      inner.innerHTML = content + ' ' + content; // Duplicate for seamless loop
      
      wrapper.appendChild(inner);
      marquee.parentNode.replaceChild(wrapper, marquee);
      
      // Add CSS animation
      const speed = 30 - (parseInt(scrollamount) * 3);
      inner.style.animation = `scroll-left ${speed}s linear infinite`;
    });
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
      .marquee-wrapper {
        overflow: hidden;
        white-space: nowrap;
      }
      
      .marquee-content {
        display: inline-block;
        padding-left: 100%;
        animation: scroll-left 15s linear infinite;
      }
      
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      
      @media (prefers-reduced-motion: reduce) {
        .marquee-content {
          animation: none;
          padding-left: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }

  // Random link button functionality
  function initRandomLink() {
    const randomButtons = document.querySelectorAll('[data-random-link]');
    
    randomButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        const links = Array.from(document.querySelectorAll('.blogroll-item a'))
          .map(a => a.href);
        
        if (links.length > 0) {
          const randomLink = links[Math.floor(Math.random() * links.length)];
          window.open(randomLink, '_blank');
        }
      });
    });
  }

  // Badge hover effects
  function initBadgeHover() {
    const badges = document.querySelectorAll('.badge-grid img');
    
    badges.forEach(badge => {
      badge.addEventListener('mouseenter', function() {
        if (!prefersReducedMotion) {
          this.style.transform = 'scale(1.2) rotate(5deg)';
        }
      });
      
      badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
      });
    });
  }

  // Theme switcher
  function initThemeSwitcher() {
    // Check if theme switcher exists
    const themeSwitcher = document.getElementById('theme-switcher');
    if (!themeSwitcher) return;
    
    // Load saved theme
    const savedTheme = localStorage.getItem('retroweird-theme') || 'default';
    document.documentElement.className = 'theme-' + savedTheme;
    if (themeSwitcher.value) {
      themeSwitcher.value = savedTheme;
    }
    
    // Handle theme change
    themeSwitcher.addEventListener('change', function() {
      const newTheme = this.value;
      document.documentElement.className = 'theme-' + newTheme;
      localStorage.setItem('retroweird-theme', newTheme);
      
      // Reload CSS for new theme
      const themeLink = document.getElementById('theme-css');
      if (themeLink) {
        themeLink.href = '/css/themes/' + newTheme + '.css';
      }
    });
  }

  // Accessibility toggle
  function initAccessibilityToggle() {
    const toggleButton = document.getElementById('accessibility-toggle');
    if (!toggleButton) return;
    
    const accessibleMode = localStorage.getItem('retroweird-accessible') === 'true';
    
    if (accessibleMode) {
      document.body.classList.add('accessible-mode');
    }
    
    toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('accessible-mode');
      const isAccessible = document.body.classList.contains('accessible-mode');
      localStorage.setItem('retroweird-accessible', isAccessible);
      
      // Update button text
      this.textContent = isAccessible ? 'Classic Mode' : 'Accessible Mode';
    });
  }

  // Easter egg: Konami code
  (function() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', function(e) {
      if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
          activateEasterEgg();
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    });
    
    function activateEasterEgg() {
      // Add rainbow animation to everything
      const style = document.createElement('style');
      style.id = 'easter-egg-style';
      style.textContent = `
        * {
          animation: rainbow-bg 2s linear infinite !important;
        }
        
        @keyframes rainbow-bg {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
      
      // Show message
      const message = document.createElement('div');
      message.textContent = '🌈 RETRO MODE ACTIVATED! 🌈';
      message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #000;
        color: #0f0;
        padding: 2rem;
        font-family: 'Press Start 2P', monospace;
        font-size: 1.5rem;
        border: 4px solid #0f0;
        z-index: 99999;
        animation: blink 1s step-start infinite;
      `;
      document.body.appendChild(message);
      
      setTimeout(() => {
        document.body.removeChild(message);
        const eggStyle = document.getElementById('easter-egg-style');
        if (eggStyle) {
          eggStyle.parentNode.removeChild(eggStyle);
        }
      }, 3000);
    }
  })();

  // Click counter for fun
  (function() {
    let clickCount = 0;
    const clickMessages = [
      '🎉 Nice click!',
      '⭐ You\'re on fire!',
      '🌈 Keep clicking!',
      '💫 Amazing!',
      '🚀 To the moon!',
      '🎨 So retro!',
      '✨ Radical!',
      '🌟 Awesome!'
    ];
    
    document.addEventListener('click', function(e) {
      if (prefersReducedMotion) return;
      
      clickCount++;
      
      if (clickCount % 10 === 0) {
        const message = clickMessages[Math.floor(Math.random() * clickMessages.length)];
        showTemporaryMessage(message, e.clientX, e.clientY);
      }
    });
    
    function showTemporaryMessage(text, x, y) {
      const msg = document.createElement('div');
      msg.textContent = text;
      msg.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        z-index: 9999;
        font-family: 'Press Start 2P', monospace;
        font-size: 0.875rem;
        color: #ff00ff;
        text-shadow: 0 0 10px #ff00ff;
        animation: float-up 2s forwards;
      `;
      msg.setAttribute('aria-hidden', 'true');
      document.body.appendChild(msg);
      
      setTimeout(() => {
        if (msg.parentNode) {
          msg.parentNode.removeChild(msg);
        }
      }, 2000);
    }
    
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float-up {
        to {
          opacity: 0;
          transform: translateY(-50px);
        }
      }
    `;
    document.head.appendChild(style);
  })();

  // Accessible mode styles
  const accessibleStyles = document.createElement('style');
  accessibleStyles.textContent = `
    .accessible-mode marquee,
    .accessible-mode .marquee-wrapper {
      animation: none !important;
    }
    
    .accessible-mode .marquee-content {
      animation: none !important;
      padding-left: 0 !important;
    }
    
    .accessible-mode * {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
    
    .accessible-mode a:focus,
    .accessible-mode button:focus,
    .accessible-mode input:focus,
    .accessible-mode textarea:focus {
      outline: 3px solid #000 !important;
      outline-offset: 2px !important;
    }
  `;
  document.head.appendChild(accessibleStyles);

})();
