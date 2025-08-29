  // Mobile menu toggle
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
    console.log(toggleBtn);
    console.log(mobileMenu);
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

document.addEventListener("DOMContentLoaded", function() {
  new SimpleLightbox('.gallery a', { captions: false });
});

const filterContainer = document.querySelector(".gallery-filter");
const galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-item")) return;

    // Supprime les classes actives des autres boutons
    filterContainer.querySelectorAll(".filter-item").forEach(btn => {
        btn.classList.remove("bg-blue-600", "text-white");
        btn.classList.add("bg-gray-200", "text-gray-800");
    });

    // Applique le style actif au bouton cliqué
    e.target.classList.remove("bg-gray-200", "text-gray-800");
    e.target.classList.add("bg-blue-600", "text-white");

    // Filtrage des images
    const filter = e.target.getAttribute("data-filter");
    galleryItems.forEach(item => {
        item.style.display = (filter === 'all' || item.classList.contains(filter)) ? 'block' : 'none';
    });
});

