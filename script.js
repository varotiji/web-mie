// --- KONFIGURASI NOMOR WHATSAPP ---
const WA_NUMBER = "6287894457000"; 

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Fungsi Klik Global
    document.addEventListener('click', function(e) {
        
        // CEK A: Jika klik tombol "Pesan" di menu (Ayam Geprek, Mie, dll)
        if(e.target.classList.contains('btn-order')) {
            e.preventDefault();
            const itemName = e.target.getAttribute('data-item');
            const message = `Halo Bu Sri, saya ingin pesan: ${itemName}. Mohon info totalnya ya.`;
            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        }

        // CEK B: Jika klik tombol WA umum (Navbar/Footer)
        else if(e.target.closest('.main-wa-link')) {
            e.preventDefault(); 
            const message = "Halo Bu Sri, saya ingin tanya-tanya tentang Menu Anda.";
            const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        }
    });

    // 2. Smooth Scroll untuk Navigasi Internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== "#" && targetId.startsWith("#")) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// 3. Animasi Reveal saat Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.menu-card, .feature-card, .list-category, .testi-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = '0.8s all ease-out';
    observer.observe(el);
});