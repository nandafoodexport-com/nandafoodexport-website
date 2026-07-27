document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("section");

    const indicator = document.querySelector(".nav-indicator");

    const hint = document.querySelector(".testimonial-swipe-hint");
    const testimonialWrapper = document.querySelector(".testimonial-wrapper");

    if (!navbar || !hamburger || !nav) return;

    /* =========================
       MENU CONTROL
    ========================= */

    const openMenu = () => {
        hamburger.classList.add("active");
        nav.classList.add("active");

        if (window.innerWidth <= 768) {
            document.body.style.overflow = "hidden";
        }
    };

    const closeMenu = () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");

        if (window.innerWidth <= 768) {
            document.body.style.overflow = "";
        }
    };

    hamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.contains("active") ? closeMenu() : openMenu();
    });

    navLinks.forEach(link => {
        link.addEventListener("click", function(e){

            const targetId = this.getAttribute("href");

            if(targetId.startsWith("#")){
                const target = document.querySelector(targetId);

                if(target){
                    e.preventDefault();

                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: "smooth"
                    });

                    moveIndicator(this);
                }
            }

            closeMenu();
        });
    });

    document.addEventListener("click", (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            closeMenu();
        }
    });

    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const handleNavbarScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleNavbarScroll);
    handleNavbarScroll();

    /* =========================
       SCROLL SPY
    ========================= */

    function activateMenu(){
        let scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){

                navLinks.forEach(link => {
                    link.classList.remove("active");

                    if(link.getAttribute("href") === "#" + sectionId){
                        link.classList.add("active");
                    }
                });

            }
        });
    }

    window.addEventListener("scroll", activateMenu);

    /* =========================
       NAV INDICATOR
    ========================= */

    function moveIndicator(el){
        if(!indicator) return;

        const rect = el.getBoundingClientRect();
        const parentRect = el.parentElement.parentElement.getBoundingClientRect();

        indicator.style.width = rect.width + "px";
        indicator.style.left = (rect.left - parentRect.left) + "px";
    }

    window.addEventListener("scroll", () => {
        const active = document.querySelector(".nav-menu a.active");
        if(active){
            moveIndicator(active);
        }
    });

    /* =========================
       TESTIMONIAL SWIPE HINT
    ========================= */

    if (hint && testimonialWrapper){

        setTimeout(() => {
            hint.style.opacity = "0";
            hint.style.transition = "opacity .4s ease";
        }, 3000);

        testimonialWrapper.addEventListener("scroll", () => {
            hint.style.opacity = "0";
        });

    }

    /* =========================
       ACTIVE CARD SYSTEM
    ========================= */

    function setActiveCard(wrapperSelector, cardSelector){

        const wrapper = document.querySelector(wrapperSelector);
        const cards = document.querySelectorAll(cardSelector);

        if(!wrapper || !cards.length) return;

        function updateActive(){
            const center = window.innerWidth / 2;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;

                const distance = Math.abs(center - cardCenter);

                if(distance < rect.width / 2){
                    card.classList.add("active");
                } else {
                    card.classList.remove("active");
                }
            });
        }

        wrapper.addEventListener("scroll", updateActive);
        window.addEventListener("resize", updateActive);

        updateActive();
    }

    /* APPLY ACTIVE CARD */
    setActiveCard(".products-wrapper", ".product-card");
    setActiveCard(".testimonial-wrapper", ".testimonial-card");

});