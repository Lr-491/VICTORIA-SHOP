// Script for menu button
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenu = document.getElementById('close-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.add('-translate-x-full');
  });

  // (Optionnel) Ferme menu quand on clique sur un lien
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('-translate-x-full');
    });
  });
