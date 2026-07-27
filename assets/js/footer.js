const footerSection = document.querySelector("#footer");

const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-footer");
        }
    });
}, {
    threshold: 0.2
});

if(footerSection){
    footerObserver.observe(footerSection);
}