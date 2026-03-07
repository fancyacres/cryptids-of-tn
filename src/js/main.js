// Cryptids of Tennessee - main.js
// Highlight active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('#site-nav a').forEach(link => {
    if (link.getAttribute('href') === path ||
       (path.startsWith(link.getAttribute('href')) && link.getAttribute('href') !== '/')) {
      link.style.color = 'var(--gold-light)';
      link.style.background = 'var(--bg-card)';
    }
  });
});
