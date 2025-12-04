// === DARK MODE ===
const themeBtn = document.getElementById("themeBtn");
const body = document.body;
const header = document.getElementById("header");
const navbar = document.getElementById("navbar");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    header.classList.toggle("dark-mode");
    navbar.classList.toggle("dark-mode");

    console.log("Tombol tema diklik.");

    if (body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});

// === SAPA PENGUNJUNG ===
const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", () => {
    console.log("Tombol sapaan diklik.");

    let nama = prompt("Siapa nama Anda?");
    if (nama && nama.trim() !== "") {
        alert("Halo, " + nama + "! Senang bertemu denganmu 😊");
    } else {
        alert("Halo! Terima kasih sudah berkunjung 💗");
    }
});

/*
=============================
✨ REFLEKSI TUGAS (SINGKAT)
=============================
Bagian yang awalnya sulit saya pahami adalah bagaimana tombol bisa 
mengubah gaya halaman (DOM manipulation). Tetapi setelah mencobanya dan 
dark mode langsung berubah saat diklik, rasanya WOW sekali! 
JavaScript ternyata menyenangkan dan membuat halaman terasa hidup.
*/