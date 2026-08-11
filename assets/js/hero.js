/*
============================================================
NANDA FOOD EXPORT — PROPRIETARY SOURCE CODE
Copyright © 2026 PT. Nanda Food And Agriculture.
All Rights Reserved.

Unauthorized copying, modification, distribution, publication,
or reuse of this proprietary source code, in whole or in substantial
part, is prohibited without prior written permission from
PT. Nanda Food And Agriculture.

Third-party materials remain subject to their respective licenses.
============================================================
*/

window.addEventListener("DOMContentLoaded",()=>{

/* ==========================================
   HERO ELEMENTS
========================================== */

const heroContent=document.querySelector(".hero-content");
const heroImage=document.querySelector(".hero-image");
const heroButtonsMobile=document.querySelector(".hero-buttons-mobile");
const slider=document.querySelector(".hero-slider");
const slides=document.querySelectorAll(".hero-slide");
const dots=document.querySelectorAll(".hero-dot");

/* ==========================================
   TABLET + MOBILE ANIMATION
========================================== */

if(window.innerWidth<=992){

if(heroContent){
heroContent.style.opacity="0";
heroContent.style.transform="translateY(16px)";
heroContent.style.transition="opacity .75s ease,transform .75s cubic-bezier(.22,1,.36,1)";
}

if(heroImage){
heroImage.style.opacity="0";
heroImage.style.transform="scale(.96)";
heroImage.style.transition="opacity .95s ease,transform .95s cubic-bezier(.22,1,.36,1)";
}

if(heroButtonsMobile){
heroButtonsMobile.style.opacity="0";
heroButtonsMobile.style.transform="translateY(8px)";
heroButtonsMobile.style.transition="opacity .65s ease,transform .65s ease";
}

requestAnimationFrame(()=>{

setTimeout(()=>{

if(heroContent){
heroContent.style.opacity="1";
heroContent.style.transform="translateY(0)";
}

},120);

setTimeout(()=>{

if(heroImage){
heroImage.style.opacity="1";
heroImage.style.transform="scale(1)";
}

},320);

setTimeout(()=>{

if(heroButtonsMobile){
heroButtonsMobile.style.opacity="1";
heroButtonsMobile.style.transform="translateY(0)";
}

},620);

});

}

/* ==========================================
   HERO PRODUCT SLIDER
========================================== */

const prevBtn=document.querySelector(".hero-prev");
const nextBtn=document.querySelector(".hero-next");

if(slides.length){

let current=0;
let timer=null;
let startX=0;
let endX=0;

const showSlide=index=>{

slides.forEach((slide,i)=>{

const active=i===index;

slide.classList.toggle("active",active);
slide.setAttribute("aria-hidden",String(!active));

});

if(dots.length){

dots.forEach((dot,i)=>{

const active=i===index;

dot.classList.toggle("active",active);

if(active){

dot.setAttribute("aria-current","true");

}else{

dot.removeAttribute("aria-current");

}

});

}

current=index;

};

const nextSlide=()=>{

showSlide((current+1)%slides.length);

};

const prevSlide=()=>{

showSlide((current-1+slides.length)%slides.length);

};

const stopSlider=()=>{

if(timer){

clearInterval(timer);
timer=null;

}

};

const startSlider=()=>{

stopSlider();
timer=setInterval(nextSlide,5000);

};

/* DOT NAVIGATION */

if(dots.length){

dots.forEach((dot,index)=>{

dot.addEventListener("click",()=>{

showSlide(index);
startSlider();

});

});

}

/* BUTTON NAVIGATION */

if(prevBtn){

prevBtn.addEventListener("click",()=>{

prevSlide();
startSlider();

});

}

if(nextBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();
startSlider();

});

}

/* PAGE VISIBILITY */

document.addEventListener("visibilitychange",()=>{

document.hidden?stopSlider():startSlider();

});

/* HOVER + TOUCH PAUSE */

if(slider){

slider.addEventListener("mouseenter",stopSlider);
slider.addEventListener("mouseleave",startSlider);

slider.addEventListener("touchstart",e=>{

startX=e.touches[0].clientX;
stopSlider();

},{passive:true});

slider.addEventListener("touchmove",e=>{

endX=e.touches[0].clientX;

},{passive:true});

slider.addEventListener("touchend",()=>{

const distance=startX-endX;

if(Math.abs(distance)>50){

distance>0?nextSlide():prevSlide();

}

startSlider();

},{passive:true});

}

/* INITIALIZE */

showSlide(0);
startSlider();

}

});
