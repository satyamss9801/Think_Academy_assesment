document.addEventListener("DOMContentLoaded", function() {
    // Lightbox functionality
    const images = document.querySelectorAll(".product-card img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("close");
    lightbox.appendChild(closeButton);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.add("show");
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            lightbox.classList.remove("show");
        }
    });
});