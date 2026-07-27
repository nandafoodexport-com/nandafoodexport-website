const ctaSection = document.querySelector("#cta");

const ctaObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-cta");
        }
    });
}, {
    threshold: 0.2
});

if(ctaSection){
    ctaObserver.observe(ctaSection);
}