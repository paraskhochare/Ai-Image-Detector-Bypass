/* ==========================================================
   gallery.js
   Premium Gallery
========================================================== */

"use strict";

/* ==========================================
   SELECTORS
========================================== */

const galleryImages = document.querySelectorAll(".gallery-card img");

let currentImage = 0;

/* ==========================================
   CREATE LIGHTBOX
========================================== */

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.innerHTML = `

<div class="lightbox-overlay"></div>

<div class="lightbox-content">

<button class="close-btn">

<i class="fa-solid fa-xmark"></i>

</button>

<button class="prev-btn">

<i class="fa-solid fa-angle-left"></i>

</button>

<img id="lightboxImage">

<button class="next-btn">

<i class="fa-solid fa-angle-right"></i>

</button>

<div id="imageCounter"></div>

</div>

`;

document.body.appendChild(lightbox);

const image = document.getElementById("lightboxImage");

const counter = document.getElementById("imageCounter");

/* ==========================================
   OPEN
========================================== */

function openLightbox(index){

currentImage=index;

updateImage();

lightbox.classList.add("show");

document.body.style.overflow="hidden";

}

/* ==========================================
   CLOSE
========================================== */

function closeLightbox(){

lightbox.classList.remove("show");

document.body.style.overflow="";

}

/* ==========================================
   UPDATE IMAGE
========================================== */

function updateImage(){

image.src=

galleryImages[currentImage].src;

counter.innerHTML=

`${currentImage+1} / ${galleryImages.length}`;

}

/* ==========================================
   NEXT
========================================== */

function nextImage(){

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

updateImage();

}

/* ==========================================
   PREVIOUS
========================================== */

function previousImage(){

currentImage--;

if(currentImage<0){

currentImage=

galleryImages.length-1;

}

updateImage();

}

/* ==========================================
   CLICK EVENTS
========================================== */

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

openLightbox(index);

});

});

/* ==========================================
   BUTTONS
========================================== */

lightbox

.querySelector(".close-btn")

.addEventListener("click",

closeLightbox);

lightbox

.querySelector(".next-btn")

.addEventListener("click",

nextImage);

lightbox

.querySelector(".prev-btn")

.addEventListener("click",

previousImage);

lightbox

.querySelector(".lightbox-overlay")

.addEventListener("click",

closeLightbox);

/* ==========================================
   KEYBOARD
========================================== */

document.addEventListener("keydown",(e)=>{

if(

!lightbox.classList.contains("show")

) return;

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

previousImage();

}

if(e.key==="Escape"){

closeLightbox();

}

});

/* ==========================================
   SWIPE
========================================== */

let startX=0;

let endX=0;

lightbox.addEventListener("touchstart",(e)=>{

startX=e.changedTouches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

endX=e.changedTouches[0].clientX;

if(startX-endX>70){

nextImage();

}

if(endX-startX>70){

previousImage();

}

});

/* ==========================================
   PRELOAD
========================================== */

galleryImages.forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

/* ==========================================
   LAZY LOAD
========================================== */

const lazyImages=

document.querySelectorAll("img");

const lazyObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

img.loading="lazy";

lazyObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

lazyObserver.observe(img);

});

/* ==========================================
   IMAGE HOVER
========================================== */

galleryImages.forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

/* ==========================================
   AUTO PLAY
========================================== */

let autoPlay=null;

function startAuto(){

autoPlay=setInterval(nextImage,4000);

}

function stopAuto(){

clearInterval(autoPlay);

}

lightbox.addEventListener(

"mouseenter",

stopAuto

);

lightbox.addEventListener(

"mouseleave",

startAuto

);

/* ==========================================
   END
========================================== */
