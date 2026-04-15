document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const expanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("hidden");
    });
  }

  const dots = document.querySelectorAll("[data-hero-dot]");
  const slides = document.querySelectorAll("[data-hero-slide]");
  let activeIndex = 0;

  const showSlide = (index) => {
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("active", slideIndex === index);
    });
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
    activeIndex = index;
  };

  if (slides.length > 0) {
    showSlide(0);
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });
    setInterval(() => {
      const next = (activeIndex + 1) % slides.length;
      showSlide(next);
    }, 5000);
  }

  document.querySelectorAll(".faq-item").forEach((item) => {
    const button = item.querySelector(".faq-button");
    if (!button) return;
    button.addEventListener("click", () => {
      const isOpen = item.dataset.open === "true";
      item.dataset.open = String(!isOpen);
    });
  });
});
