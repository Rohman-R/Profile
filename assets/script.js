// --- 1. FUNGSI TOMBOL KEMBALI KE ATAS (BACK TO TOP) ---
// Mengambil elemen tombol dari HTML berdasarkan ID
let mybutton = document.getElementById("btn-back-to-top");

// Menjalankan fungsi scrollFunction setiap kali pengguna melakukan scroll pada layar
window.onscroll = function () { 
    scrollFunction(); 
};

function scrollFunction() {
    // Jika posisi scroll lebih dari 100px dari atas, tampilkan tombol. Jika tidak, sembunyikan
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "flex"; 
    } else {
        mybutton.style.display = "none";
    }
}

// Menambahkan event klik: saat tombol diklik, layar akan meluncur ke posisi paling atas dengan halus
mybutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// --- 2. EFEK TEKS MENGETIK (TYPED.JS) ---
// Menginisialisasi efek mengetik pada elemen dengan ID 'typed-text'
var typed = new Typed('#typed-text', {
    strings: ['Web Development', 'Analisis Sistem', 'Algoritma'], // Daftar kata yang akan diketik
    typeSpeed: 50, // Kecepatan mengetik (dalam milidetik)
    backSpeed: 30, // Kecepatan menghapus kata
    loop: true      // Efek ini akan terus berulang tanpa henti
});


// --- 3. PENGATURAN MODE GELAP (DARK MODE) ---
// Mengambil elemen tombol toggle, body, dan ikon di dalam tombol
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = toggleBtn.querySelector('i');

// Mengecek apakah ada pengaturan tema 'dark' yang tersimpan di memori browser (Local Storage)
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

// Menjalankan fungsi ganti tema saat tombol matahari/bulan diklik
toggleBtn.addEventListener('click', () => {
    if(body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Fungsi untuk mengaktifkan Mode Gelap
function enableDarkMode() {
    body.classList.add('dark-mode'); // Menambah class 'dark-mode' ke body
    icon.classList.remove('bi-moon-stars-fill'); // Ganti ikon bulan
    icon.classList.add('bi-sun-fill');           // Menjadi ikon matahari
    icon.classList.remove('text-primary');       // Ubah warna ikon
    icon.classList.add('text-warning');
    localStorage.setItem('theme', 'dark');       // Simpan pilihan ke memori browser
}

// Fungsi untuk mengaktifkan Mode Terang
function disableDarkMode() {
    body.classList.remove('dark-mode');
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-stars-fill');
    icon.classList.add('text-primary');
    icon.classList.remove('text-warning');
    localStorage.setItem('theme', 'light');      // Simpan pilihan ke memori browser
}


// --- 4. ANIMASI MUNCUL SAAT SCROLL (SCROLLREVEAL.JS) ---
// Mengatur konfigurasi dasar animasi muncul dari arah bawah
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    reset: false, // Animasi hanya berjalan sekali saat pertama kali di-scroll
    mobile: true
});


// --- 5. NAVIGASI AKTIF OTOMATIS (SCROLL SPY) ---
// Mengambil semua bagian (section) dan semua link navigasi
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    // Memberikan jarak offset 200px agar perubahan menu aktif terasa lebih pas saat scroll
    const scrollPosition = window.scrollY + 200; 

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
            current = section.getAttribute("id"); // Mencatat ID section yang sedang dilihat
        }
    });

    // LOGIKA KHUSUS: Jika layar sudah sampai di paling bawah, paksa menu 'Kontak' menjadi aktif
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 10) {
        current = "contact";
    }

    // Menghapus tanda 'active' dari semua menu, lalu memberikannya ke menu yang sesuai posisi layar
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

// Menambah event klik: menu yang diklik akan langsung berwarna aktif secara manual
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});


// --- 6. MENENTUKAN ELEMEN MANA SAAT ANIMASI MUNCUL ---
// Memberikan jeda waktu (interval/delay) agar elemen muncul secara berurutan
sr.reveal('.hero h1, .hero p, .hero .btn', { interval: 100 }); // Muncul berurutan
sr.reveal('.profile-wrapper', { delay: 200 }); // Muncul dengan delay 200ms
sr.reveal('.about-card', { delay: 100 });
sr.reveal('.skill-box', { interval: 100 }); // Kotak-kotak skill muncul satu per satu
sr.reveal('#contact .social-btn', { interval: 100, delay: 200 });