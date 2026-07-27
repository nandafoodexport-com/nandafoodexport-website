/* =====================================================
   NANDA FOOD EXPORT
   PRODUCT DATABASE & PRODUCT MANAGER
   Version : 1.0
===================================================== */

const productCatalog = [

/* =====================================================
   PREMIUM CHIPS
===================================================== */

{
    id:"nanchip-kepok",
    category:"premium-chips",
    name:"Nanchip Pisang Kepok",
    image:"assets/img/product-1.webp",
    price:2.00,
    currency:"USD",
    shortDescription:"Crispy banana chips made from selected Kepok bananas with a naturally sweet flavor.",
    description:"Premium banana chips produced from carefully selected Kepok bananas. Processed using strict quality control standards to deliver consistent taste, crispy texture, and export-grade quality.",
    moq:"500 Packs",
    packaging:["100g","250g"],
    shelfLife:"12 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "banana chips",
        "kepok banana",
        "indonesian snack",
        "export snack"
    ]
},

{
    id:"nanchip-wak",
    category:"premium-chips",
    name:"Nanchip Pisang Wak",
    image:"assets/img/nanchips-wak.webp",
    price:2.20,
    currency:"USD",
    shortDescription:"Premium banana chips with distinctive aroma and crispy texture.",
    description:"Made from carefully selected Wak bananas with a unique aroma and authentic Indonesian flavor. Suitable for wholesalers, distributors, and export buyers.",
    moq:"500 Packs",
    packaging:["100g","250g"],
    shelfLife:"12 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "wak banana",
        "banana chips supplier",
        "snack exporter"
    ]
},

{
    id:"cassava-chips",
    category:"premium-chips",
    name:"Cassava Chips",
    image:"assets/img/keripik-singkong.webp",
    price:1.80,
    currency:"USD",
    shortDescription:"Traditional Indonesian cassava chips with authentic savory taste.",
    description:"Premium cassava chips produced from selected Indonesian cassava. Crispy texture, authentic taste, and suitable for domestic and international markets.",
    moq:"500 Packs",
    packaging:["100g","250g"],
    shelfLife:"12 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "cassava chips",
        "keripik singkong",
        "export snack"
    ]
},

/* =====================================================
   PREMIUM COOKIES
===================================================== */

{
    id:"palm-cookies",
    category:"premium-cookies",
    name:"Palm Cookies",
    image:"assets/img/palm-cookies.webp",
    price:3.20,
    currency:"USD",
    shortDescription:"Cookies made with palm sugar and premium chocolate chips.",
    description:"Premium cookies combining authentic palm sugar sweetness with rich chocolate chips. Perfect for modern retail and export markets.",
    moq:"300 Boxes",
    packaging:["200g","400g"],
    shelfLife:"10 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "cookies",
        "palm sugar cookies",
        "export cookies"
    ]
},

{
    id:"sagu-cheese-cookies",
    category:"premium-cookies",
    name:"Sagu Cheese Cookies",
    image:"assets/img/sagu-cheese-cookies.webp",
    price:3.50,
    currency:"USD",
    shortDescription:"Soft and delicious sago cookies blended with premium cheese.",
    description:"Traditional Indonesian sago cookies with premium cheese flavor. Light texture and suitable for global consumers.",
    moq:"300 Boxes",
    packaging:["200g","400g"],
    shelfLife:"10 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "sago cookies",
        "cheese cookies",
        "indonesian cookies"
    ]
},

{
    id:"malinda-cookies",
    category:"premium-cookies",
    name:"Malinda Cookies",
    image:"assets/img/malinda-cookies.webp",
    price:3.00,
    currency:"USD",
    shortDescription:"Traditional cookies with rich peanut flavor and crispy texture.",
    description:"Authentic Indonesian peanut cookies with premium ingredients and consistent quality for export distribution.",
    moq:"300 Boxes",
    packaging:["200g","400g"],
    shelfLife:"10 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "peanut cookies",
        "malinda cookies",
        "export cookies"
    ]
},

{
    id:"nastar-cookies",
    category:"premium-cookies",
    name:"Nastar Cookies",
    image:"assets/img/nastar.webp",
    price:3.80,
    currency:"USD",
    shortDescription:"Premium pineapple-filled cookies with authentic Indonesian taste.",
    description:"Traditional nastar cookies filled with premium pineapple jam and crafted using export-grade quality standards.",
    moq:"300 Boxes",
    packaging:["200g","400g"],
    shelfLife:"10 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "nastar",
        "pineapple cookies",
        "indonesian cookies"
    ]
},

{
    id:"purple-sweet-potato-chips",
    category:"premium-cookies",
    name:"Purple Sweet Potato Chips",
    image:"assets/img/keripik-ubi-ungu.webp",
    price:2.80,
    currency:"USD",
    shortDescription:"Crispy purple sweet potato chips with natural color and flavor.",
    description:"Premium purple sweet potato chips made from selected Indonesian sweet potatoes. Naturally colorful, crispy, and suitable for export markets.",
    moq:"300 Boxes",
    packaging:["200g","400g"],
    shelfLife:"10 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:true,
    keywords:[
        "purple sweet potato",
        "sweet potato chips",
        "export snack"
    ]
},

/* =====================================================
   AGRICULTURE PRODUCTS
===================================================== */

{
    id:"betel-nut",
    category:"agriculture-products",
    name:"Betel Nut",
    image:"assets/img/pinang.webp",
    price:850.00,
    currency:"USD",
    shortDescription:"Premium quality betel nut carefully selected for export markets.",
    description:"High-quality Indonesian betel nut sourced directly from trusted farmers and prepared according to export standards.",
    moq:"1 Ton",
    packaging:["Bulk Packaging"],
    shelfLife:"Based on commodity standards",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:false,
    keywords:[
        "betel nut",
        "pinang",
        "agriculture export"
    ]
},

{
    id:"coconut",
    category:"agriculture-products",
    name:"Coconut",
    image:"assets/img/kelapa.webp",
    price:1200.00,
    currency:"USD",
    shortDescription:"Fresh Indonesian coconut suitable for food processing and export.",
    description:"Premium Indonesian coconuts sourced from selected plantations and ready for local and international distribution.",
    moq:"1 Container",
    packaging:["Bulk Packaging"],
    shelfLife:"Commodity Based",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:false,
    keywords:[
        "coconut",
        "fresh coconut",
        "coconut export"
    ]
},

{
    id:"ketapang-leaves",
    category:"agriculture-products",
    name:"Dried Ketapang Leaves",
    image:"assets/img/daun-ketapang.webp",
    price:4.50,
    currency:"USD",
    shortDescription:"Naturally dried ketapang leaves suitable for aquascape and herbal applications.",
    description:"Naturally dried ketapang leaves selected and prepared for aquascape, ornamental fish, and herbal-related industries.",
    moq:"50 Kg",
    packaging:["Bulk Packaging"],
    shelfLife:"24 Months",
    origin:"Indonesia",
    exportReady:true,
    privateLabel:false,
    keywords:[
        "ketapang leaves",
        "terminalia catappa",
        "aquascape"
    ]
}
];


/* =====================================================
   PRODUCT HELPERS
===================================================== */

function getProductById(productId) {
    return productCatalog.find(
        product => product.id === productId
    );
}

function getProductsByCategory(category) {
    return productCatalog.filter(
        product => product.category === category
    );
}

function getExportReadyProducts() {
    return productCatalog.filter(
        product => product.exportReady === true
    );
}


/* =====================================================
   URL HASH SUPPORT
===================================================== */

function getProductFromHash() {

    const hash = window.location.hash.replace("#", "");

    if (!hash) return null;

    return getProductById(hash);
}


/* =====================================================
   GLOBAL ACCESS
===================================================== */

window.productCatalog = productCatalog;
window.getProductById = getProductById;
window.getProductsByCategory = getProductsByCategory;
window.getExportReadyProducts = getExportReadyProducts;
window.getProductFromHash = getProductFromHash;


/* =====================================================
   INIT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        `Nanda Food Export Product Catalog Loaded: ${productCatalog.length} Products`
    );

});

/* =====================================================
   PRODUCT MODAL
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const modal=document.getElementById("productModal");
    const closeButton=document.getElementById("modalClose");
    const detailButtons=document.querySelectorAll(".catalog-btn");
    const modalAddCart=document.getElementById("modalAddCart");

    const modalImage=document.getElementById("modalImage");
    const modalTitle=document.getElementById("modalTitle");
    const modalPrice=document.getElementById("modalPrice");
    const modalDescription=document.getElementById("modalDescription");
    const modalPackaging=document.getElementById("modalPackaging");
    const modalMOQ=document.getElementById("modalMOQ");
    const modalShelfLife=document.getElementById("modalShelfLife");
    const modalOrigin=document.getElementById("modalOrigin");
    const modalLeadTime=document.getElementById("modalLeadTime");

    let currentProduct=null;

    detailButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            const card=button.closest(".catalog-card");

            if(!card) return;

            const product=getProductById(card.dataset.cartId);

            if(!product) return;

            currentProduct=product;

            modalImage.src=product.image;
            modalImage.alt=product.name;
            modalTitle.textContent=product.name;
            modalPrice.textContent=`${product.currency} ${product.price.toFixed(2)} / Pack`;
            modalDescription.textContent=product.description;
            modalPackaging.textContent=product.packaging.join(" | ");
            modalMOQ.textContent=product.moq;
            modalShelfLife.textContent=product.shelfLife;
            modalOrigin.textContent=product.origin;
            modalLeadTime.textContent=
                product.category==="agriculture-products"
                    ? "14 - 30 Working Days"
                    : "7 - 14 Working Days";

            modal.classList.add("active");

        });

    });

    if(modalAddCart){

        modalAddCart.addEventListener("click",()=>{

            if(!currentProduct) return;

            CartStore.addItem({

                id:currentProduct.id,
                name:currentProduct.name,
                image:currentProduct.image,
                price:currentProduct.price,
                currency:currentProduct.currency,
                qty:1

            });

            modal.classList.remove("active");

        });

    }

    closeButton?.addEventListener("click",()=>{

        modal.classList.remove("active");

    });

    modal?.addEventListener("click",event=>{

        if(event.target===modal){

            modal.classList.remove("active");

        }

    });

});

/* =====================================================
   CATEGORY SCROLL SPY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const sections = document.querySelectorAll(
        "#premium-chips, #premium-cookies, #agriculture-products"
    );

    const navLinks = document.querySelectorAll(
        ".category-nav-wrapper a"
    );

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if(
                link.getAttribute("href") ===
                `#${current}`
            ){

                link.classList.add("active");

            }

        });

    });

});

/* =====================================================
   SHOPPING CART SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

    const cartCounter=document.querySelector(".cart-count");
    const cartButtons=document.querySelectorAll(".catalog-cart-btn");

    const updateCartCounter=()=>{

        if(!cartCounter||!window.CartStore) return;

        cartCounter.textContent=
            CartStore.getItemCount();

    };

    cartButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            const card=button.closest(".catalog-card");

            if(!card) return;

            const product=
                getProductById(
                    card.dataset.cartId
                );

            if(!product) return;

            CartStore.addItem({

                id:product.id,
                name:product.name,
                image:product.image,
                price:product.price,
                currency:product.currency,
                qty:1

            });

            showCartNotification(product.name);

        });

    });

    CartStore.subscribe(updateCartCounter);

    function showCartNotification(productName){

        document
            .querySelector(".cart-toast")
            ?.remove();

        const toast=
            document.createElement("div");

        toast.className="cart-toast";

        toast.innerHTML=`

            <i class="ri-shopping-cart-fill"></i>

            <span>${productName} added to cart</span>

        `;

        document.body.appendChild(toast);

        requestAnimationFrame(()=>{

            toast.classList.add("show");

        });

        setTimeout(()=>{

            toast.classList.remove("show");

            setTimeout(()=>{

                toast.remove();

            },300);

        },2500);

    }

});