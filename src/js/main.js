import gsap from "gsap"; // import du plug-in
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger); // import de la fonctionnalité de GSAP

gsap.to(".box", {
  scrollTrigger: {
    pin: ".box", // fixer un élément
    trigger: ".trigger", // l'animation se déclenche quand .box entre dans l'écran
    markers: true, // afficher les marqueurs pour aider à visualiser
    scrub: 1, // plus la valeur de scrub est éelvé, plus l'inertie est élevée
    start: "top", // .box est fixer quand .trigger atteint le haut de la fenêtre
    end: "top+=500", // .box est libéré 500px plus tard
  },
  x: 400,
  rotation: 90,
  duration: 1, //paramètres de l'animation
});

var circles = document.querySelectorAll(".circle"); //sélectionner les 3 cercles

circles.forEach((circle) => {
  // boucle qui parcourt chaque élément
  gsap.from(circle, {
    scrollTrigger: {
      trigger: circle,
      markers: true,
      scrub: 1,
    },
    opacity: 0,
    y: 100,
    duration: 1,
  }); // animation à l'intérieur de la boucle pour sélectionner chaque élément
});
