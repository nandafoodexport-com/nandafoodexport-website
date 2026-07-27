const featuredSection = document.querySelector("#featured-product");

const featuredObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-featured");
        }
    });
}, {
    threshold: 0.2
});

if(featuredSection){
    featuredObserver.observe(featuredSection);
}