/*
============================================================
NANDA FOOD EXPORT — PROPRIETARY SOURCE CODE
Copyright © 2026 PT. Nanda Food And Agriculture.
All Rights Reserved.

Unauthorized copying, modification, distribution, publication,
or reuse of this proprietary source code, in whole or in substantial
part, is prohibited without prior written permission from
PT. Nanda Food And Agriculture.

Third-party materials remain subject to their respective licenses.
============================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       INIT APP (CENTRAL CONTROLLER)
    ========================================== */
    initApp();

    function initApp() {
        enableJS();
        initScrollAnimation();
        initTestimonial(); // 🔥 MASUKKAN KE SINI
        initLazyScripts();
    }

    /* ==========================================
       ENABLE JS
    ========================================== */
    function enableJS() {
        document.body.classList.remove("no-js");
        console.log("Nanda Food Export (Ultra Smooth) 🚀");
    }

    /* ==========================================
       SCROLL ANIMATION ENGINE
    ========================================== */
    function initScrollAnimation() {

        const isDesktop = window.innerWidth > 992;
        const sections = document.querySelectorAll("section");

        document.querySelectorAll("#hero .fade-up").forEach(el => {
            el.classList.add("show");
        });

        sections.forEach(section => {

            const elements = section.querySelectorAll(".fade-up");
            if (!elements.length) return;

            let localIndex = 0;

            const observer = new IntersectionObserver((entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        const el = entry.target;

                        if (el.closest("#hero")) {
                            observer.unobserve(el);
                            return;
                        }

                        if (isDesktop) {
                            const baseDelay = localIndex * 45;
                            const randomOffset = Math.random() * 30;
                            const delay = Math.min(baseDelay + randomOffset, 200);

                            el.style.transitionDelay = `${delay}ms`;
                            localIndex++;
                        }

                        el.classList.add("show");
                        observer.unobserve(el);
                    }

                });

            }, {
                threshold: 0.12,
                rootMargin: "0px 0px -25% 0px"
            });

            elements.forEach(el => observer.observe(el));

        });
    }

    /* ==========================================
       TESTIMONIAL (FINAL CLEAN)
    ========================================== */

   function initTestimonial(){

    const track = document.querySelector(".testimonial-track");

    if (!track) {
        console.warn("❌ testimonial-track tidak ditemukan");
        return;
    }

    track.addEventListener("click", (e) => {

        const item = e.target.closest(".testimonial-item");

        if (!item) return;

        e.stopPropagation();

        const items = document.querySelectorAll(".testimonial-item");

        const isActive = item.classList.contains("active");

        // reset semua
        items.forEach(i => i.classList.remove("active"));

        // toggle
        if (!isActive) {
            item.classList.add("active");
        }

    });

    // klik luar
    document.addEventListener("click", () => {
        document.querySelectorAll(".testimonial-item")
            .forEach(i => i.classList.remove("active"));
    });

}

    /* ==========================================
       SMART JS LOADER
    ========================================== */

    function loadScript(src) {
        if (document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement("script");
        script.src = src;
        script.defer = true;

        document.body.appendChild(script);
    }

    function initLazyScripts() {

        const scripts = [
            "assets/js/hero.js",
            "assets/js/trust-badges.js",
            "assets/js/featured-product.js",
            "assets/js/about.js",
            "assets/js/why-us.js",
            "assets/js/export.js",
            "assets/js/products.js",
            "assets/js/cta.js",
            "assets/js/footer.js",
            "assets/js/scroll-buttons.js"
        ];

        if ("requestIdleCallback" in window) {
            requestIdleCallback(() => {
                scripts.forEach(src => loadScript(src));
            });
        } else {
            setTimeout(() => {
                scripts.forEach(src => loadScript(src));
            }, 1000);
        }
    }

});
