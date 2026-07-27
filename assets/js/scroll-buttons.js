/* ==========================================
   SCROLL BUTTONS PER SECTION (FIXED)
========================================== */

const scrollUp = document.getElementById("scrollUp");
const scrollDown = document.getElementById("scrollDown");

const sections = [...document.querySelectorAll("section")];

let currentSection = 0;

/* detect active section */
function updateCurrentSection(){

    const scrollPosition = window.scrollY + 200;

    sections.forEach((section, index) => {

        if(
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
        ){
            currentSection = index;
        }

    });

}

/* update on scroll */
window.addEventListener("scroll", updateCurrentSection);

/* initial detection */
updateCurrentSection();

/* scroll down per section */
scrollDown.addEventListener("click", () => {

    if(currentSection < sections.length - 1){

        sections[currentSection + 1].scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }

});

/* scroll up per section */
scrollUp.addEventListener("click", () => {

    if(currentSection > 0){

        sections[currentSection - 1].scrollIntoView({
            behavior:"smooth",
            block:"start"
        });

    }else{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }

});

/* ==========================================
   VISIBILITY CONTROL (UX)
========================================== */

const scrollContainer = document.querySelector(".scroll-buttons");

function toggleScrollButtons(){

    if(window.scrollY > 300){
        scrollContainer.classList.add("show");
    }else{
        scrollContainer.classList.remove("show");
    }

}

window.addEventListener("scroll", toggleScrollButtons);

/* initial state */
toggleScrollButtons();

/* ==========================================
   SMART BUTTON VISIBILITY
========================================== */

function updateButtonState(){

    const atTop = window.scrollY < 100;
    const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;

    // scroll up
    scrollUp.style.opacity = atTop ? "0" : "1";
    scrollUp.style.pointerEvents = atTop ? "none" : "auto";

    // scroll down
    scrollDown.style.opacity = atBottom ? "0" : "1";
    scrollDown.style.pointerEvents = atBottom ? "none" : "auto";

}

window.addEventListener("scroll", updateButtonState);

/* initial */
updateButtonState();