/* ─── Hide nav on scroll down, reveal on scroll up ─── */
(function () {
  const nav = document.querySelector('nav');
  let lastY = window.scrollY;
  let ticking = false;

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        const y = window.scrollY;
        if (y > lastY && y > 80) {
          nav.classList.add('nav--hidden');
        } else {
          nav.classList.remove('nav--hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}());

/* ─── Hamburger menu ─── */
(function () {
  const btn = document.querySelector('.nav-hamburger');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', function () {
    const open = links.classList.toggle('nav-links--open');
    btn.classList.toggle('nav-hamburger--open', open);
    btn.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is tapped
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('nav-links--open');
      btn.classList.remove('nav-hamburger--open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}());
