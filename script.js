// --- 1. NAVBAR SCROLL EFFECT ---
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(42, 4, 4, 0.98)'; // Maroon makin solid
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'rgba(74, 8, 8, 0.95)';
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
    }
});

// --- 2. SCROLL REVEAL (MUNCUL PERLAHAN) ---
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Targetkan kotak fitur dan kartu menu
document.querySelectorAll('.feature-card, .menu-card').forEach(el => {
    el.classList.add('hidden-el'); // Pastikan class ini ada di CSS
    observer.observe(el);
});

// --- 3. TOMBOL PESAN (DIRECT KE WHATSAPP) ---
document.querySelectorAll('.btn-order').forEach(button => {
    button.addEventListener('click', (e) => {
        const menuName = e.target.parentElement.querySelector('h4').innerText;
        const message = `Halo Sate Premium, saya mau pesan menu: ${menuName}. Mohon infonya!`;
        const whatsappURL = `https://wa.me/628123456789?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, '_blank');
    });
});

// --- 4. SMOOTH SCROLL ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});