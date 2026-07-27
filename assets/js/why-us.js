const whyItems = document.querySelectorAll(".why-item");

const whyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-why");
        }
    });
}, {
    threshold: 0.05
});

whyItems.forEach((item, index) => {
    item.style.transition = `0.6s ease ${index * 0.15}s`;
    whyObserver.observe(item);
});