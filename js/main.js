document.addEventListener("DOMContentLoaded", function() {
  new SimpleLightbox('.gallery a', { captions: false });
});

  // Mobile menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Fermer le menu mobile après un clic sur un lien
  document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

// Marquer le lien actif
  const currentPage = window.location.pathname.split("/").pop(); // exemple: 'services.html'

  document.querySelectorAll(".nav-link").forEach(link => {
    const linkHref = link.getAttribute("href").split("/").pop(); // extrait: 'services.html'
    
    if (linkHref === currentPage) {
      link.classList.add(
        "text-blue-600",
        "font-semibold",
        "border-l-4",
        "border-blue-600",
        "bg-blue-50",      // petit fond doux bleu
        "pl-2",             // petit espace entre texte et bordure
        "rounded-sm",
        "w-32",
        "Px-4",
        "py-2" 
         );
    }
  });