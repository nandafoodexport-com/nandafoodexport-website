/* =====================================================
   CART SYSTEM
===================================================== */

document.addEventListener("DOMContentLoaded",()=>{

const cartContainer=document.getElementById("cartItems");
const summaryProducts=document.getElementById("summaryProducts");
const summaryQuantity=document.getElementById("summaryQuantity");
const summarySubtotal=document.getElementById("summarySubtotal");
const summaryTotal=document.getElementById("summaryTotal");
const quotationBtn=document.getElementById("requestQuotationBtn");
const cartCounter=document.querySelector(".cart-count");

let cart=CartStore.getCart();

function syncNavbarCart(){

if(cartCounter){

cartCounter.textContent=cart.reduce((sum,item)=>sum+item.qty,0);

}

}

CartStore.subscribe(updatedCart=>{

cart=updatedCart;

syncNavbarCart();

renderCart();

});

syncNavbarCart();

renderCart();

/* =====================================================
   RENDER CART
===================================================== */

function renderCart(){

if(!cartContainer) return;

if(!cart.length){

cartContainer.innerHTML=`

<div class="empty-cart">

<h3>Your Cart Is Empty</h3>

<p>No products selected yet.</p>

<a href="nandafood-product.html" class="continue-shopping">

Continue Shopping

</a>

</div>

`;

updateSummary();

return;

}

cartContainer.innerHTML=cart.map(item=>{

const subtotal=item.price*item.qty;

return`

<div class="cart-item">

<img
src="${item.image}"
alt="${item.name}"
class="cart-item-image">

<div class="cart-item-content">

<h3>${item.name}</h3>

<div class="cart-meta">

<p>
Unit Price :
<strong>${item.currency} ${item.price.toFixed(2)}</strong>
</p>

<p>
Subtotal :
<strong>${item.currency} ${subtotal.toFixed(2)}</strong>
</p>

</div>

<div class="cart-actions">

<div class="qty-control">

<button
class="qty-btn minus-btn"
data-id="${item.id}">-</button>

<span>${item.qty}</span>

<button
class="qty-btn plus-btn"
data-id="${item.id}">+</button>

</div>

<button
class="remove-item"
data-id="${item.id}">

Remove

</button>

</div>

</div>

</div>

`;

}).join("");

attachEvents();

updateSummary();

}

/* =====================================================
   EVENTS
===================================================== */

function attachEvents(){

document.querySelectorAll(".plus-btn").forEach(btn=>btn.addEventListener("click",()=>changeQty(btn.dataset.id,1)));

document.querySelectorAll(".minus-btn").forEach(btn=>btn.addEventListener("click",()=>changeQty(btn.dataset.id,-1)));

document.querySelectorAll(".remove-item").forEach(btn=>btn.addEventListener("click",()=>removeItem(btn.dataset.id)));

}

/* =====================================================
   CHANGE QTY
===================================================== */

function changeQty(id,value){

if(value>0){

CartStore.increaseQty(id);

}else{

CartStore.decreaseQty(id);

}

}

/* =====================================================
   REMOVE ITEM
===================================================== */

function removeItem(id){

CartStore.removeItem(id);

}


/* =====================================================
   SUMMARY
===================================================== */

function updateSummary(){

const totalProducts=cart.length;
const totalQuantity=cart.reduce((sum,item)=>sum+item.qty,0);
const subtotal=cart.reduce((sum,item)=>sum+(item.price*item.qty),0);

summaryProducts&&(summaryProducts.textContent=totalProducts);
summaryQuantity&&(summaryQuantity.textContent=totalQuantity);
summarySubtotal&&(summarySubtotal.textContent=`USD ${subtotal.toFixed(2)}`);
summaryTotal&&(summaryTotal.textContent=`USD ${subtotal.toFixed(2)}`);

}


/* =====================================================
   WHATSAPP QUOTATION
===================================================== */

if(quotationBtn){

quotationBtn.addEventListener("click",()=>{

if(!cart.length){

alert("Your cart is empty.");

return;

}

let grandTotal=0;

const message=cart.map((item,index)=>{

const subtotal=item.price*item.qty;

grandTotal+=subtotal;

return`${index+1}. ${item.name}
Price : ${item.currency} ${item.price.toFixed(2)}
Qty : ${item.qty}
Subtotal : ${item.currency} ${subtotal.toFixed(2)}`;

}).join("\n\n");

window.open(`https://wa.me/6285262772605?text=${encodeURIComponent(`Hello Nanda Food Export,

Quotation Request:

${message}

Grand Total : USD ${grandTotal.toFixed(2)}`)}`,"_blank");

});

}

});