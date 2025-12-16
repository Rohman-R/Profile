// 1. BACK TO TOP FUNCTION
let mybutton = document.getElementById("btn-back-to-top");

// Memantau scroll untuk memunculkan tombol
window.onscroll = function () { 
    scrollFunction(); 
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex"; 
    } else {
        mybutton.style.display = "none";
    }
}

// Event klik untuk kembali ke atas
mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 2. TYPING EFFECT (Typed.js)
var typed = new Typed('#typed-text', {
    strings: ['Web Development', 'Analisis Sistem', 'Algoritma'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
});

// 3. DARK MODE TOGGLE & LOCAL STORAGE
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// Cek preferensi tema yang tersimpan
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

toggleBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-mode');
    icon.classList.remove('bi-moon-stars-fill');
    icon.classList.add('bi-sun-fill');
    icon.classList.remove('text-primary');
    icon.classList.add('text-warning');
    localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
    body.classList.remove('dark-mode');
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-stars-fill');
    icon.classList.add('text-primary');
    icon.classList.remove('text-warning');
    localStorage.setItem('theme', 'light');
}

// 4. ANIMASI SCROLL (ScrollReveal.js)
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    reset: false,
    mobile: true
});

sr.reveal('.hero h1, .hero p, .hero .btn', { interval: 100 });
sr.reveal('.profile-wrapper', { delay: 200 });
sr.reveal('.about-card', { delay: 100 });
sr.reveal('.skill-box', { interval: 100 });
sr.reveal('#contact .social-btn', { interval: 100, delay: 200 });