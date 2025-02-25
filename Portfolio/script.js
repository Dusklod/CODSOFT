const canvas = document.getElementById("asciiCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas
const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
resize();
window.addEventListener("resize", resize);

// ASCII characters and animation setup
const chars = "01";
const charSize = 12;
const columns = Math.floor(window.innerWidth / charSize);
const drops = Array(columns).fill(0);

const draw = () => {
    ctx.fillStyle = "rgba(17, 24, 39, 0.1)"; // bg-gray-900 with opacity
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#ef4444"; // text-red-500
    ctx.font = `${charSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * charSize;
        const y = drops[i] * charSize;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.99) {
            drops[i] = 0;
        }

        drops[i]++;
    }
};

setInterval(draw, 50);
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});
