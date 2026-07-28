/* ==========================================================
   AI Image Detector Bypass
   script.js
   Part 1
   Loader • Navbar • Mobile Menu • Smooth Scroll
========================================================== */

"use strict";

/* ==========================================
   SELECTORS
========================================== */

const loader = document.getElementById("loader");

const navbar = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

const navItems = document.querySelectorAll(".nav-links a");

const sections = document.querySelectorAll("section");


/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

setTimeout(() => {

loader.style.opacity = "0";

loader.style.visibility = "hidden";

loader.style.pointerEvents = "none";

}, 800);

});


/* ==========================================
   MOBILE MENU
========================================== */

menuBtn.addEventListener("click", () => {

navLinks.classList.toggle("active");

menuBtn.classList.toggle("active");

});


navItems.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

menuBtn.classList.remove("active");

});

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/* ==========================================
   NAVBAR BLUR
========================================== */

window.addEventListener("scroll", () => {

if(window.scrollY > 60){

navbar.style.background =

"rgba(5,8,15,.90)";

navbar.style.boxShadow =

"0 10px 30px rgba(0,0,0,.35)";

}else{

navbar.style.background =

"rgba(5,8,15,.65)";

navbar.style.boxShadow =

"none";

}

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

function activeNavigation(){

let current = "";

sections.forEach(section=>{

const top = window.scrollY;

const offset =

section.offsetTop - 150;

const height =

section.offsetHeight;

if(top >= offset && top < offset + height){

current = section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(

link.getAttribute("href") === "#" + current

){

link.classList.add("current");

}

});

}

window.addEventListener(

"scroll",

activeNavigation

);

activeNavigation();


/* ==========================================
   HERO FLOAT EFFECT
========================================== */

const cards =

document.querySelectorAll(".floating-card");

window.addEventListener("mousemove",(e)=>{

const x =

(window.innerWidth/2 - e.clientX)/40;

const y =

(window.innerHeight/2 - e.clientY)/40;

cards.forEach((card,index)=>{

card.style.transform =

`translate(${x*(index+1)}px,
${y*(index+1)}px)`;

});

});


/* ==========================================
   SCROLL INDICATOR
========================================== */

const indicator =

document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

if(window.scrollY > 250){

indicator.style.opacity="0";

}else{

indicator.style.opacity="1";

}

});


/* ==========================================
   SIMPLE FADE-IN
========================================== */

const observer =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

});

document.querySelectorAll(

".feature-card,.workflow-card,.stats-box,.download-card"

).forEach(el=>{

observer.observe(el);

});


/* ==========================================
   END PART 1
========================================== */

/* ==========================================================
   script.js
   Part 2
   FAQ • Counters • Comparison Slider • Ripple
========================================================== */

"use strict";

/* ==========================================
   FAQ ACCORDION
========================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const button =
item.querySelector(".faq-question");

button.addEventListener("click",()=>{

faqItems.forEach(other=>{

if(other!==item){

other.classList.remove("active");

}

});

item.classList.toggle("active");

});

});


/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const counter =
entry.target;

const target =
Number(counter.dataset.target);

const duration = 1800;

let start = 0;

const increment =
target/(duration/16);

function update(){

start += increment;

if(start>=target){

counter.innerText = target;

}else{

counter.innerText =
Math.floor(start);

requestAnimationFrame(update);

}

}

update();

counterObserver.unobserve(counter);

});

},

{

threshold:.4

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/* ==========================================
   BEFORE / AFTER SLIDER
========================================== */

const slider =
document.querySelector(".comparison-slider");

const afterImage =
document.querySelector(".after-image");

if(slider && afterImage){

slider.addEventListener("input",()=>{

afterImage.style.width =
slider.value + "%";

});

}


/* ==========================================
   GALLERY EFFECT
========================================== */

const galleryCards =
document.querySelectorAll(".gallery-card");

galleryCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.setProperty("--x",x+"px");

card.style.setProperty("--y",y+"px");

});

});


/* ==========================================
   DOWNLOAD BUTTON RIPPLE
========================================== */

const buttons =
document.querySelectorAll(

".btn-primary,.btn-secondary"

);

buttons.forEach(button=>{

button.addEventListener("click",(e)=>{

const ripple =
document.createElement("span");

const size =
Math.max(

button.clientWidth,

button.clientHeight

);

const rect =
button.getBoundingClientRect();

ripple.style.width =
size+"px";

ripple.style.height =
size+"px";

ripple.style.left =
(e.clientX-rect.left-size/2)+"px";

ripple.style.top =
(e.clientY-rect.top-size/2)+"px";

ripple.className =
"ripple";

button.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/* ==========================================
   RANDOM FLOAT
========================================== */

document

.querySelectorAll(

".feature-card"

)

.forEach(card=>{

const random =
(Math.random()*8)+2;

card.style.animationDuration =

random+"s";

});


/* ==========================================
   END PART 2
========================================== */

/* ==========================================================
   script.js
   Part 3
   Back To Top • Typing • Scroll Reveal • Effects
========================================================== */

"use strict";

/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

backToTop.style.display="flex";

}else{

backToTop.style.display="none";

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================
   TYPING EFFECT
========================================== */

const heroTitle =
document.querySelector(".hero h1");

if(heroTitle){

const original =
heroTitle.innerHTML;

heroTitle.innerHTML="";

let index=0;

function typing(){

if(index<original.length){

heroTitle.innerHTML += original.charAt(index);

index++;

setTimeout(typing,20);

}

}

setTimeout(typing,300);

}


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealItems =

document.querySelectorAll(

".feature-card,.workflow-card,.stats-box,.gallery-card,.testimonial-card,.download-card"

);

const revealObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});


/* ==========================================
   NAVBAR SHRINK
========================================== */

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.padding="8px 0";

}else{

navbar.style.padding="0";

}

});


/* ==========================================
   PARALLAX HERO
========================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const value =

window.scrollY*0.35;

if(hero){

hero.style.backgroundPositionY =

value+"px";

}

});


/* ==========================================
   MOUSE GLOW
========================================== */

const glow =

document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


/* ==========================================
   IMAGE HOVER
========================================== */

document.querySelectorAll("img")

.forEach(img=>{

img.setAttribute(

"loading",

"lazy"

);

});


/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener("resize",()=>{

clearTimeout(window.resizeTimer);

window.resizeTimer =

setTimeout(()=>{

console.log(

"Layout updated."

);

},250);

});


/* ==========================================
   PREVENT DOUBLE CLICK
========================================== */

document.querySelectorAll("a")

.forEach(link=>{

link.addEventListener("dblclick",(e)=>{

e.preventDefault();

});

});


/* ==========================================
   COPY GITHUB LINK
========================================== */

const githubButton =

document.querySelector(

'a[href*="github"]'

);

if(githubButton){

githubButton.addEventListener("contextmenu",(e)=>{

e.preventDefault();

navigator.clipboard.writeText(

githubButton.href

);

alert("GitHub link copied.");

});

}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(

"DOMContentLoaded",

()=>{

console.log(

"AI Image Detector Bypass Loaded."

);

});


/* ==========================================
   END OF FILE
========================================== */
