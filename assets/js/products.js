const productCards = document.querySelectorAll(".product-card");

const productObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){

            entry.target.classList.add("show-product");

            productObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

productCards.forEach((card, index) => {

    // delay stagger (lebih clean)
    card.style.setProperty("--delay", `${index * 0.12}s`);

    productObserver.observe(card);
});