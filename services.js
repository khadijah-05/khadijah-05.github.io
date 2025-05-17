document.addEventListener("DOMContentLoaded", () => {// Wait till to load 
    const images = document.querySelectorAll(".services-list img");
  
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";// Enlarge the image
        img.style.transition = "transform 0.3s ease";
      });
  
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";// Return to original size
      });
    });
  });
  
  