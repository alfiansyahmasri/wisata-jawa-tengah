// ===========================
// LOADING SCREEN
// ===========================

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 1200);
});

// ===========================
// LIVE SEARCH
// ===========================

const searchInput = document.getElementById("searchInput");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("keyup", function () {

    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {

        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});

// ===========================
// TOMBOL SCROLL KE ATAS
// ===========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// ===========================
// DARK MODE
// ===========================

const darkBtn = document.getElementById("darkMode");

darkBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkBtn.classList.remove("fa-moon");
        darkBtn.classList.add("fa-sun");

    } else {

        darkBtn.classList.remove("fa-sun");
        darkBtn.classList.add("fa-moon");

    }

});

// ===========================
// ANIMASI CARD SAAT SCROLL
// ===========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// ===========================
// EFEK NAVBAR
// ===========================

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 100) {

        nav.style.background = "#14532d";

    } else {

        nav.style.background = "rgba(0,0,0,.5)";

    }

});

// ===========================
// EFEK TOMBOL
// ===========================

const buttons = document.querySelectorAll(".btn, .content a");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

// ===========================
// PESAN SELAMAT DATANG
// ===========================

setTimeout(() => {

    console.log("Selamat datang di Website Wisata Jawa Tengah");

}, 1500);

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {
    music.play().catch(err => console.log(err));
}, { once: true });