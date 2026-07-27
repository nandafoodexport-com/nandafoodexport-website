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

/* ==========================================
   ABOUT SECTION INTERACTION
========================================== */

const aboutSection = document.querySelector("#about");
const counters = document.querySelectorAll(".stat-box h3");

/* ==========================================
   COUNTER FUNCTION
========================================== */

const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1200;

    let start = null;

    const animate = (timestamp) => {
        if (!start) start = timestamp;

        const progress = Math.min((timestamp - start) / duration, 1);
        const value = Math.floor(progress * target);

        counter.innerText = value;

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            // FINAL VALUE FORMAT
            if (target >= 100 || target >= 95) {
                counter.innerText = target + "+";
            } else {
                counter.innerText = target;
            }
        }
    };

    requestAnimationFrame(animate);
};

/* ==========================================
   OBSERVER
========================================== */

const aboutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // SHOW ANIMATION
            entry.target.classList.add("show-about");

            // RUN COUNTER
            counters.forEach(counter => {
                runCounter(counter);
            });

            // RUN ONLY ONCE
            observer.unobserve(entry.target);
        }

    });
}, {
    threshold: 0.3
});

/* ==========================================
   INIT
========================================== */

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}
