/* ===== SHARED CLIENT JAVASCRIPT ===== */

// ---- Theme Management (Dark / Light Mode) ----
function getPreferredTheme() {
  const saved = localStorage.getItem('portal_theme');
  if (saved) return saved;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme, notify = false) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('portal_theme', theme);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    const icon = btn.querySelector('.theme-toggle-icon');
    const text = btn.querySelector('.theme-toggle-text');
    if (theme === 'light') {
      if (icon) icon.textContent = '☀️';
      if (text) text.textContent = 'Light';
      btn.setAttribute('aria-label', 'Switch to Dark Mode');
      btn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      if (icon) icon.textContent = '🌙';
      if (text) text.textContent = 'Dark';
      btn.setAttribute('aria-label', 'Switch to Light Mode');
      btn.setAttribute('title', 'Switch to Light Mode');
    }
  });

  if (notify && typeof showToast === 'function') {
    showToast(`Switched to ${theme === 'light' ? 'Light' : 'Dark'} Mode`, 'info');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const target = current === 'dark' ? 'light' : 'dark';
  applyTheme(target, true);
}

function initTheme() {
  const theme = getPreferredTheme();
  applyTheme(theme, false);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.onclick = (e) => {
      e.preventDefault();
      toggleTheme();
    };
  });
}

// Run immediately for fast style application
(function() {
  const theme = localStorage.getItem('portal_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
})();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTheme);
} else {
  initTheme();
}

// ---- Toast Notification System ----
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ---- Navbar Scroll Effect ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ---- Hamburger Menu ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}
