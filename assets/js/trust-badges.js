document.addEventListener("DOMContentLoaded", () => {
const trustSection = document.querySelector("#trust-badges");
const trustItems = document.querySelectorAll("#trust-badges .trust-item");

```
if (!trustSection || !trustItems.length) return;

/* Only Tablet & Mobile */
if (window.innerWidth <= 992) {
    /* prepare animation safely */
    trustSection.classList.add("animate-ready");

    const revealItems = () => {
        trustItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 140);
        });
    };

    /* small delay to ensure render complete */
    setTimeout(revealItems, 200);
}
```

});
