/* ==========================================
   NANDA FOOD EXPORT
   EXPORT PAGE SCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initExportPage();

});

/* ==========================================
   INIT
========================================== */

function initExportPage(){

    initSectionSpy();

    initSmoothAnchor();

    console.log(
        "Nanda Food Export Page Loaded 🚢"
    );

}

/* ==========================================
   SECTION SPY
========================================== */

function initSectionSpy(){

    const sections = document.querySelectorAll(`
        #export-overview,
        #export-process,
        #export-documents,
        #private-label,
        #global-shipping,
        #global-buyers,
        #cta
    `);

    if(!sections.length) return;

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    document.body.setAttribute(
                        "data-section",
                        entry.target.id
                    );

                }

            });

        },

        {
            threshold:0.35
        }

    );

    sections.forEach(section => {

        observer.observe(section);

    });

}

/* ==========================================
   SMOOTH ANCHOR
========================================== */

function initSmoothAnchor(){

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );

    if(!links.length) return;

    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if(
                    targetId === "#" ||
                    targetId.length <= 1
                ){
                    return;
                }

                const target =
                    document.querySelector(
                        targetId
                    );

                if(!target) return;

                event.preventDefault();

                target.scrollIntoView({

                    behavior:"smooth",
                    block:"start"

                });

            }
        );

    });

}

/* ==========================================
   FUTURE EXPORT COUNTER SUPPORT
========================================== */

window.exportPage = {

    version : "1.0",

    page : "nandafood-export",

    initialized : true

};