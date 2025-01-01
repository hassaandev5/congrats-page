// script.js
document.addEventListener("DOMContentLoaded", () => {
  const celebrateBtn = document.querySelector(".celebrate-btn");
  const fallingElements = document.querySelector(".falling-elements");

  // Array of celebration emojis
  const emojis = ["🎈", "⭐", "🎉", "🎊", "💫", "👶", "🍼", "🎀"];

  celebrateBtn.addEventListener("click", createCelebration);

  function createCelebration() {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const emoji = document.createElement("div");
        emoji.className = "falling-emoji";
        emoji.style.cssText = `
                    position: fixed;
                    top: -20px;
                    left: ${Math.random() * 100}vw;
                    font-size: ${Math.random() * 20 + 20}px;
                    animation: fall ${Math.random() * 2 + 3}s linear;
                    z-index: -1;
                `;
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        fallingElements.appendChild(emoji);

        // Remove emoji after animation
        setTimeout(() => {
          emoji.remove();
        }, 5000);
      }, i * 100);
    }
  }

  // Add falling animation
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes fall {
            0% { transform: translateY(-20px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(360deg); }
        }
    `;
  document.head.appendChild(styleSheet);
});
