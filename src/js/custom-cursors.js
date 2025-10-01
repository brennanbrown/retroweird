// Custom Cursor Effects - Retro Web Style

(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (prefersReducedMotion) return;

  const cursorEffects = {
    // Sparkle trail cursor
    sparkle: function() {
      document.body.style.cursor = 'crosshair';
      
      document.addEventListener('mousemove', function(e) {
        createSparkle(e.clientX, e.clientY);
      });
      
      function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'cursor-sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
      }
    },

    // Rainbow trail
    rainbow: function() {
      const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
      let colorIndex = 0;
      
      document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.className = 'cursor-rainbow';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 500);
      });
    },

    // Retro pointer
    retroPointer: function() {
      const pointer = document.createElement('div');
      pointer.className = 'custom-cursor-pointer';
      pointer.innerHTML = '👆';
      document.body.appendChild(pointer);
      document.body.style.cursor = 'none';
      
      document.addEventListener('mousemove', function(e) {
        pointer.style.left = (e.clientX - 10) + 'px';
        pointer.style.top = (e.clientY - 10) + 'px';
      });
      
      // Click effect
      document.addEventListener('click', function(e) {
        const click = document.createElement('div');
        click.className = 'cursor-click-effect';
        click.innerHTML = '💥';
        click.style.left = e.clientX + 'px';
        click.style.top = e.clientY + 'px';
        document.body.appendChild(click);
        
        setTimeout(() => click.remove(), 500);
      });
    },

    // Heart trail
    hearts: function() {
      document.addEventListener('mousemove', function(e) {
        if (Math.random() > 0.8) {
          const heart = document.createElement('div');
          heart.className = 'cursor-heart';
          heart.innerHTML = ['💖', '💕', '💗', '💓'][Math.floor(Math.random() * 4)];
          heart.style.left = e.clientX + 'px';
          heart.style.top = e.clientY + 'px';
          document.body.appendChild(heart);
          
          setTimeout(() => heart.remove(), 1500);
        }
      });
    },

    // Default (star trail) - already implemented in retro-effects.js
    default: function() {
      // Use existing cursor trail from retro-effects.js
    }
  };

  // Add CSS for cursor effects
  const style = document.createElement('style');
  style.textContent = `
    .cursor-sparkle {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      font-size: 20px;
      animation: sparkle-fade 1s forwards;
    }

    @keyframes sparkle-fade {
      to {
        opacity: 0;
        transform: translateY(-30px) scale(0.5);
      }
    }

    .cursor-rainbow {
      position: fixed;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9998;
      animation: rainbow-fade 0.5s forwards;
    }

    @keyframes rainbow-fade {
      to {
        opacity: 0;
        transform: scale(2);
      }
    }

    .custom-cursor-pointer {
      position: fixed;
      pointer-events: none;
      z-index: 10000;
      font-size: 24px;
      transform: translate(-12px, -12px);
      transition: transform 0.1s;
    }

    .cursor-click-effect {
      position: fixed;
      pointer-events: none;
      z-index: 10001;
      font-size: 30px;
      animation: click-burst 0.5s forwards;
    }

    @keyframes click-burst {
      to {
        opacity: 0;
        transform: scale(2) rotate(360deg);
      }
    }

    .cursor-heart {
      position: fixed;
      pointer-events: none;
      z-index: 9998;
      font-size: 20px;
      animation: heart-float 1.5s forwards;
    }

    @keyframes heart-float {
      0% {
        opacity: 1;
        transform: translateY(0) rotate(0deg);
      }
      100% {
        opacity: 0;
        transform: translateY(-50px) rotate(15deg);
      }
    }

    /* Custom cursor styles */
    .cursor-style-sparkle { cursor: crosshair; }
    .cursor-style-pointer { cursor: none; }
    .cursor-style-hearts { cursor: pointer; }
    .cursor-style-rainbow { cursor: crosshair; }
  `;
  document.head.appendChild(style);

  // Initialize cursor effect based on saved preference
  const savedCursor = localStorage.getItem('cursor-effect') || 'default';
  
  if (cursorEffects[savedCursor]) {
    cursorEffects[savedCursor]();
  }

  // Cursor selector widget (can be added to sidebar)
  window.setCursorEffect = function(effect) {
    localStorage.setItem('cursor-effect', effect);
    location.reload(); // Reload to apply new cursor
  };

})();
