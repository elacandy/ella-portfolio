document.addEventListener("DOMContentLoaded", () => {
  // Only run on desktop
  if (window.matchMedia("(pointer:fine)").matches) {
    document.addEventListener("mousemove", e => {
      // Create a few particles per mousemove
      for (let i = 0; i < 2; i++) {
        const dust = document.createElement("div");
        dust.className = "cursor-dust";

        // Random drift offsets
        const xOffset = (Math.random() - 0.5) * 30;
        const yOffset = (Math.random() - 0.5) * 30;

        dust.style.setProperty('--x-offset', `${xOffset}px`);
        dust.style.setProperty('--y-offset', `${yOffset}px`);

        
        const colors = [
          'rgba(255,255,255,0.8)',
          'rgba(255,215,200,0.6)',
          'rgba(255,182,193,0.5)',
        ];
        dust.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random()*colors.length)]} 0%, rgba(255,255,255,0) 70%)`;

        dust.style.left = `${e.clientX}px`;
        dust.style.top = `${e.clientY}px`;

        document.body.appendChild(dust);

        setTimeout(() => dust.remove(), 1200); // matches fade animation
      }
    });
  }
});
