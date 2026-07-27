document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".testimonial-item");

    items.forEach(item => {

        item.addEventListener("click", (e) => {

            e.stopPropagation();

            const isActive = item.classList.contains("active");

            // reset semua
            items.forEach(i => i.classList.remove("active"));

            // toggle
            if(!isActive){
                item.classList.add("active");
            }

        });

    });

    // klik luar = tutup
    document.addEventListener("click", () => {
        items.forEach(i => i.classList.remove("active"));
    });

});