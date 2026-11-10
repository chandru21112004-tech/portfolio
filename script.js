// Bootstrap handles the menu toggle and the active link (scrollspy).
// Here: close the mobile menu after a link is tapped.
function initNav() {
  const menu = document.getElementById('nav');
  if (!menu) return;

  menu.addEventListener('click', (e) => {
    if (e.target.closest('.nav-link') && menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
}

// Fade items in once; CSS hides them only when JS is running
function initReveal() {
  const items = document.querySelectorAll('.card, .section-head, .portrait');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  items.forEach((el) => io.observe(el));
}

initNav();
initReveal();
