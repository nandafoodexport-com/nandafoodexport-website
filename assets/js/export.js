const exportSection = document.querySelector("#export");

const exportObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-export");
        }
    });
}, {
    threshold: 0.1
});

if(exportSection){
    exportObserver.observe(exportSection);
}