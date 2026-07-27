window.addEventListener("DOMContentLoaded", () => {

    const heroContent = document.querySelector(".hero-content");
    const heroImage = document.querySelector(".hero-image");
    const heroButtonsMobile = document.querySelector(".hero-buttons-mobile");

    /* ==========================================
       TABLET + MOBILE ONLY
    ========================================== */

    if (window.innerWidth <= 992) {

        /* CONTENT */
        if (heroContent) {
            heroContent.style.opacity = "0";
            heroContent.style.transform = "translateY(16px)";
            heroContent.style.transition =
                "opacity .75s ease, transform .75s cubic-bezier(.22,1,.36,1)";
        }

        /* PRODUCT IMAGE */
        if (heroImage) {
            heroImage.style.opacity = "0";
            heroImage.style.transform = "scale(.96)";
            heroImage.style.transition =
                "opacity .95s ease, transform .95s cubic-bezier(.22,1,.36,1)";
        }

        /* CTA */
        if (heroButtonsMobile) {
            heroButtonsMobile.style.opacity = "0";
            heroButtonsMobile.style.transform = "translateY(8px)";
            heroButtonsMobile.style.transition =
                "opacity .65s ease, transform .65s ease";
        }

        /* STEP 1 */
        requestAnimationFrame(() => {

            setTimeout(() => {

                if (heroContent) {
                    heroContent.style.opacity = "1";
                    heroContent.style.transform = "translateY(0)";
                }

            }, 120);

            /* STEP 2 */

            setTimeout(() => {

                if (heroImage) {
                    heroImage.style.opacity = "1";
                    heroImage.style.transform = "scale(1)";
                }

            }, 320);

            /* STEP 3 */

            setTimeout(() => {

                if (heroButtonsMobile) {
                    heroButtonsMobile.style.opacity = "1";
                    heroButtonsMobile.style.transform = "translateY(0)";
                }

            }, 620);

        });

    }

});