/* ===== SHARED APP JAVASCRIPT ===== */

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

// ---- Toast System ----
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100px)'; toast.style.transition = 'all 0.3s ease'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// ---- Navbar scroll effect ----
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}

// ---- Hamburger menu ----
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburgerBtn && mobileMenu) {
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

// ---- Active Nav Link ----
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});

// ---- Filter Chips (shared) ----
function initFilterChips(container, onFilter) {
  if (!container) return;
  const chips = container.querySelectorAll('.chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      if (onFilter) onFilter(chip.dataset.filter);
    });
  });
}

// ---- Tab System ----
function initTabs(tabsEl, contentEls) {
  if (!tabsEl) return;
  const btns = tabsEl.querySelectorAll('.tab-btn');
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      contentEls.forEach((el, j) => {
        el.classList.toggle('hidden', i !== j);
      });
    });
  });
}

// ---- Animate on scroll ----
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .glass-card, .feature-card, .job-card, .prep-track-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// ---- Progress bar animation ----
function animateProgress() {
  document.querySelectorAll('.progress-fill').forEach(fill => {
    const target = parseInt(fill.dataset.width || fill.style.width);
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = target + '%'; }, 200);
  });
}
setTimeout(animateProgress, 500);

// ---- Search ----
function initSearch(inputEl, items, fields) {
  if (!inputEl) return;
  inputEl.addEventListener('input', () => {
    const q = inputEl.value.toLowerCase().trim();
    items.forEach(item => {
      const text = fields.map(f => item.dataset[f] || '').join(' ').toLowerCase();
      item.style.display = q === '' || text.includes(q) ? '' : 'none';
    });
  });
}

// ---- Bookmark system ----
function toggleBookmark(id, type) {
  const key = `bookmarks_${type}`;
  const bookmarks = JSON.parse(localStorage.getItem(key) || '[]');
  const idx = bookmarks.indexOf(id);
  if (idx === -1) {
    bookmarks.push(id);
    showToast('Added to bookmarks!', 'success');
  } else {
    bookmarks.splice(idx, 1);
    showToast('Removed from bookmarks', 'info');
  }
  localStorage.setItem(key, JSON.stringify(bookmarks));
  return idx === -1;
}

function isBookmarked(id, type) {
  const bookmarks = JSON.parse(localStorage.getItem(`bookmarks_${type}`) || '[]');
  return bookmarks.includes(id);
}

// ---- DSA Progress tracking ----
function markDSAProblem(problemId, solved) {
  const key = 'dsa_solved';
  const solved_set = JSON.parse(localStorage.getItem(key) || '[]');
  if (solved) {
    if (!solved_set.includes(problemId)) solved_set.push(problemId);
  } else {
    const idx = solved_set.indexOf(problemId);
    if (idx !== -1) solved_set.splice(idx, 1);
  }
  localStorage.setItem(key, JSON.stringify(solved_set));
  return solved_set.length;
}

function isDSASolved(problemId) {
  const solved_set = JSON.parse(localStorage.getItem('dsa_solved') || '[]');
  return solved_set.includes(problemId);
}

function getDSAProgress() {
  return JSON.parse(localStorage.getItem('dsa_solved') || '[]').length;
}
