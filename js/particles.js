/* ==========================================================
   particles.js
   Lightweight Background Particle Engine
========================================================== */

"use strict";

const container = document.getElementById("particles");

if (!container) {

    console.warn("Particles container not found.");

} else {

    const canvas = document.createElement("canvas");

    container.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    let width;
    let height;

    function resizeCanvas() {

        width = canvas.width = window.innerWidth;

        height = canvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const PARTICLE_COUNT = 80;

    const CONNECT_DISTANCE = 130;

    const particles = [];

    class Particle {

        constructor() {

            this.reset();

            this.x = Math.random() * width;

            this.y = Math.random() * height;

        }

        reset() {

            this.radius = Math.random() * 2 + 1;

            this.speedX = (Math.random() - 0.5) * 0.8;

            this.speedY = (Math.random() - 0.5) * 0.8;

            this.opacity = Math.random() * 0.5 + 0.2;

        }

        update() {

            this.x += this.speedX;

            this.y += this.speedY;

            if (this.x < 0 || this.x > width) {

                this.speedX *= -1;

            }

            if (this.y < 0 || this.y > height) {

                this.speedY *= -1;

            }

        }

        draw() {

            ctx.beginPath();

            ctx.arc(

                this.x,

                this.y,

                this.radius,

                0,

                Math.PI * 2

            );

            ctx.fillStyle =

                "rgba(155,123,255," +

                this.opacity +

                ")";

            ctx.fill();

        }

    }

    for (

        let i = 0;

        i < PARTICLE_COUNT;

        i++

    ) {

        particles.push(

            new Particle()

        );

    }

    function connectParticles() {

        for (

            let a = 0;

            a < particles.length;

            a++

        ) {

            for (

                let b = a + 1;

                b < particles.length;

                b++

            ) {

                const dx =

                    particles[a].x -

                    particles[b].x;

                const dy =

                    particles[a].y -

                    particles[b].y;

                const distance =

                    Math.sqrt(

                        dx * dx +

                        dy * dy

                    );

                if (

                    distance <

                    CONNECT_DISTANCE

                ) {

                    const alpha =

                        1 -

                        distance /

                        CONNECT_DISTANCE;

                    ctx.beginPath();

                    ctx.moveTo(

                        particles[a].x,

                        particles[a].y

                    );

                    ctx.lineTo(

                        particles[b].x,

                        particles[b].y

                    );

                    ctx.strokeStyle =

                        "rgba(109,93,252," +

                        alpha * 0.25 +

                        ")";

                    ctx.lineWidth = 1;

                    ctx.stroke();

                }

            }

        }

    }

    function animate() {

        ctx.clearRect(

            0,

            0,

            width,

            height

        );

        particles.forEach(

            particle => {

                particle.update();

                particle.draw();

            }

        );

        connectParticles();

        requestAnimationFrame(

            animate

        );

    }

    animate();

}

/* ==========================================================
   Mouse Glow
========================================================== */

const glow = document.createElement("div");

glow.id = "particleGlow";

document.body.appendChild(glow);

document.addEventListener(

    "mousemove",

    e => {

        glow.style.left =

            e.clientX + "px";

        glow.style.top =

            e.clientY + "px";

    }

);
