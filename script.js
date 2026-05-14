function startCelebration() {
    const overlay = document.getElementById('celebration-overlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.getElementById('main-scene').classList.remove('hidden');
        createConfetti();
    }, 800);
}

function toggleLetter() {
    const letterModal = document.getElementById('full-letter-overlay');
    letterModal.classList.toggle('letter-hidden');
}

function createConfetti() {
    const container = document.getElementById('confetti-wrapper');
    const colors = ['#ffd700', '#ff4d6d', '#ffb3c1', '#ffffff'];
    for (let i = 0; i < 70; i++) {
        const c = document.createElement('div');
        c.style.position = 'absolute';
        c.style.width = Math.random() * 8 + 4 + 'px';
        c.style.height = c.style.width;
        c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        c.style.top = '-10px';
        c.style.left = Math.random() * 100 + 'vw';
        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        c.style.opacity = Math.random();
        c.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        container.appendChild(c);
    }
}

// Inline animation for confetti
const style = document.createElement("style");
style.innerHTML = `@keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }`;
document.head.appendChild(style);