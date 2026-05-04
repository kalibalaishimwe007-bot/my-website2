function loginUser() {
    const box = document.querySelector('.login-box');
    if(box) {
        box.style.transform = "scale(0.9)";
        box.style.opacity = "0";
    }
    setTimeout(() => {
        sessionStorage.setItem("isLoggedIn", "true");
        window.location.href = "home.html";
    }, 400);
}

function checkAuth() {
    if (sessionStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    document.body.style.opacity = "0";              
    document.body.style.transition = "opacity 0.5s ease";
    
    setTimeout(() => {
        sessionStorage.removeItem("isLoggedIn");
        window.location.href = "index.html";
    }, 500);
}

let currentSlide = 0;
const slidesContainer = document.getElementById('slides');
const totalSlides = 10;

function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;
    
    currentSlide = index;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

setInterval(nextSlide, 5000);

const searchInput = document.getElementById('searchInput');
const quickProducts = document.getElementById('quickProducts');
const latestArrivals = document.getElementById('latestArrivals');
const noResults = document.getElementById('no-results');

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    Array.from(quickProducts.children).forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        if (name.includes(searchTerm)) visibleCount++;
    });

    Array.from(latestArrivals.children).forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        card.style.display = name.includes(searchTerm) ? 'block' : 'none';
        if (name.includes(searchTerm)) visibleCount++;
    });

    noResults.style.display = (visibleCount === 0 && searchTerm !== "") ? 'block' : 'none';
}

searchInput.addEventListener('input', filterProducts);
// About Page - View Our Mission Button
document.addEventListener('DOMContentLoaded', function() {
    const missionBtn = document.getElementById('mission-btn');
    const missionSection = document.getElementById('mission-section');

    if (missionBtn && missionSection) {
        missionBtn.addEventListener('click', function() {
            if (missionSection.style.maxHeight && missionSection.style.maxHeight !== '0px') {
                missionSection.style.maxHeight = '0px';
            } else {
                missionSection.style.maxHeight = missionSection.scrollHeight + "px";
            }
        });
    }
});

