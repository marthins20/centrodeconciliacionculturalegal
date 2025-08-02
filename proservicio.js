// script.js

document.addEventListener('DOMContentLoaded', () => {
  // ===== Reveal on scroll for .card =====
  const cards = document.querySelectorAll('.card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.2
  });
  cards.forEach(card => observer.observe(card));

  // ===== Opcional: Destacar menú según URL =====
  const menuLinks = document.querySelectorAll('.nav-links a');
  menuLinks.forEach(link => {
    if (link.href === location.href) {
      link.classList.add('active');
    }
  });
});
