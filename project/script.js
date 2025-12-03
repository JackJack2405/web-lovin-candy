/*
   FADE-IN ON PAGE LOAD
   */
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    requestAnimationFrame(() => {
        document.body.style.transition = "opacity 0.6s ease";
        document.body.style.opacity = 1;
    });
});


/*
   PRODUCT CARD CLICK EFFECT
   */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.96)";
        setTimeout(() => {
            card.style.transform = "";
        }, 150);
    });
});


/*
   FLOATING CANDY PARTICLES (Soft Candy Vibes)
   */
function createCandyParticle() {
    const particle = document.createElement("div");
    particle.classList.add("candy-particle");

    const size = Math.random() * 12 + 6; // 6–18px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = Math.random() * 100 + "%";
    particle.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Soft particles every 300ms
setInterval(createCandyParticle, 300);


/* 
   PARTICLE STYLE (Injected automatically)
   */
const style = document.createElement("style");
style.textContent = `
.candy-particle {
    position: fixed;
    top: 110%;
    background: rgba(255, 180, 213, 0.8);
    border-radius: 50%;
    pointer-events: none;
    animation: floatUp 4s linear forwards;
    filter: blur(1px);
}

@keyframes floatUp {
    0% { transform: translateY(0); }
    100% { transform: translateY(-160vh); }
}
`;
document.head.appendChild(style);
