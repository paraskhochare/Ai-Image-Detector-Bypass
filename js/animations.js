/* ==========================================================
   animations.js
   Handles scroll animations and UI effects
========================================================== */

"use strict";

/* ==============================
   Fade Animation
============================== */

const animatedElements = document.querySelectorAll(`
.feature-card,
.workflow-card,
.stats-box,
.gallery-card,
.testimonial-card,
.download-card,
.faq-item
`);

const animationObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("animate");

animationObserver.unobserve(entry.target);

}

});

},{

threshold:0.15

});

animatedElements.forEach(element=>{

animationObserver.observe(element);

});


/* ==============================
   Hero Floating Cards
============================== */

const floatingCards =
document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(event)=>{

const x =
(window.innerWidth/2-event.clientX)/35;

const y =
(window.innerHeight/2-event.clientY)/35;

floatingCards.forEach((card,index)=>{

card.style.transform=

`translate(${x*(index+1)}px,
${y*(index+1)}px)`;

});

});


/* ==============================
   Scroll Indicator
============================== */

const indicator =
document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

if(!indicator) return;

indicator.style.opacity =

window.scrollY>250 ? "0":"1";

});


/* ==============================
   Button Hover Animation
============================== */

document.querySelectorAll(

".btn-primary,.btn-secondary"

).forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0)";

});

});


/* ==============================
   Navbar Shadow
============================== */

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("navbar-scroll");

}else{

header.classList.remove("navbar-scroll");

}

});


/* ==============================
   Page Loaded
============================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});
