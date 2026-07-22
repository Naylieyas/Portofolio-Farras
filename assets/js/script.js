document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("toggle-anim");
        });
    }

    // 2. Highlight Menu Aktif Berdasarkan URL File
    const currentPath = window.location.pathname.split("/").pop();
    const navItems = document.querySelectorAll(".nav-links a");
    
    navItems.forEach(item => {
        if (item.getAttribute("href") === currentPath || (currentPath === "" && item.getAttribute("href") === "index.html")) {
            item.classList.add("active");
        }
    });

    // 3. Animasi Progress Bar Otomatis Saat Masuk Viewport (Untuk Halaman Skills & Index)
    const progressBars = document.querySelectorAll(".progress-bar");
    if (progressBars.length > 0) {
        const animateProgress = () => {
            progressBars.forEach(bar => {
                const speed = bar.getAttribute("data-target");
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    bar.style.width = speed + "%";
                }
            });
        };
        window.addEventListener("scroll", animateProgress);
        animateProgress(); // Jalankan sekali saat load
    }

    // 4. Fitur Back to Top Button
    const backBtn = document.getElementById("backToTop");
    if (backBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                backBtn.style.display = "block";
            } else {
                backBtn.style.display = "none";
            }
        });
        backBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 5. Efek Klik Kasar Neo-Brutalism Tambahan untuk Komponen Utama
    const interactiveBoxes = document.querySelectorAll(".neo-box");
    interactiveBoxes.forEach(box => {
        box.addEventListener("mousedown", () => {
            box.style.transform = "translate(3px, 3px)";
            box.style.boxShadow = "2px 2px 0px #000000";
        });
        box.addEventListener("mouseup", () => {
            box.style.transform = "none";
            box.style.boxShadow = "6px 6px 0px #000000";
        });
    });
});
