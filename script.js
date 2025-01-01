// script.js
document.addEventListener("DOMContentLoaded", () => {
  const celebrateBtn = document.querySelector(".celebrate-btn");
  const fallingElements = document.querySelector(".falling-elements");

  // Array of celebration emojis
  const emojis = ["🎈", "⭐", "🎉", "🎊", "💫", "👶", "🍼", "🎀"];

  // Keep track of active emoji elements
  let activeEmojis = new Set();

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
                    animation: fall ${Math.random() * 2 + 3}s linear forwards;
                    z-index: -1;
                `;
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Add to tracking set
        activeEmojis.add(emoji);

        // Listen for animation end
        emoji.addEventListener("animationend", () => {
          emoji.remove();
          activeEmojis.delete(emoji);
        });

        fallingElements.appendChild(emoji);

        // Backup cleanup after 5 seconds
        setTimeout(() => {
          if (activeEmojis.has(emoji)) {
            emoji.remove();
            activeEmojis.delete(emoji);
          }
        }, 5000);
      }, i * 100);
    }
  }

  // Add falling animation
  const styleSheet = document.createElement("style");
  styleSheet.textContent = `
        @keyframes fall {
            0% { 
                transform: translateY(-20px) rotate(0deg);
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% { 
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(styleSheet);
});
