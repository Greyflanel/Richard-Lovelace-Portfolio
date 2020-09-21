let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let toggler = document.getElementById("toggler");

button1.addEventListener("click", function (event) {
  gsap.to(window, 1.5, { scrollTo: { y: "#second-section" }, ease: "in-out" });
  // gsap.to(toggler, 1.5, {backgroundColor: "rgba(255, 255, 255)", display: "none"});
  // gsap.to(toggler, 0, {display: "none"});
});

button2.addEventListener("click", function (event) {
  gsap.to(window, 1.8, { scrollTo: { y: "#first-section" }, ease: "linear" });
  // gsap.to(toggler, 1.8, {display: "block"});
});

var mqls = [
  window.matchMedia("(min-width: 1200px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 280px)"),
  window.matchMedia("(min-width: 200px)"),
];

function mediaqueryresponse(mql) {
  let tl = gsap.timeline({ repeat: 1000 });
  let tl2 = gsap.timeline({ repeat: 1000 });
  let tl3 = gsap.timeline({ repeat: 5 });
  let tl4 = gsap.timeline({ repeat: 5 });
  let tl5 = gsap.timeline({ repeat: 5 });
  
  

  // tl2.set(".spotlight", { filter: "blur(2em), brightness(150%)" });
  // tl2.to(".spotlight", { filter: "blur(2em),brightness(250%)", duration: 5, ease: "linear" });
  // tl2.to(".spotlight", { filter: "blur(2em), brightness(200%)", duration: 25, ease: "linear" });

  tl3.set(".me", {
    x: 0,
    y: 0,
    fontSize: "2rem",
    opacity: 0,
    rotate: 0,
    delay: 0,
  });

  tl3.to(".me", {
    fontSize: "5rem",
    opacity: 1,
    duration: 3,
    ease: "linear",
  });
  tl3.to(".me", {
    x: 0,
    y: 120,
    opacity: "-1",
    duration: 4,
    delay: 3,
    ease: "power1.inOut",
  });

  tl4.set(".we", { opacity: "0", rotate: 0 });

  tl4.to(".we", {
    opacity: "1",
    duration: 4,
    ease: "linear",
  });
  tl4.to(".we", {
    fontSize: "1rem",
    opacity: "-1",
    rotate: -360,
    duration: 4,
    ease: "power1.inOut",
    delay: 2,
  });

  

  if (mqls[0].matches) {
    tl.set(".moon, .spotlight", { x: 250, y: 230, opacity: 0, scale: 1.3 });
    tl.to(".moon, .spotlight", { opacity: 1, duration: 0.8 })
    tl.to(".moon, .spotlight", { x: 500, y: 80, duration: 55, ease: "linear" });
    tl.to(".moon, .spotlight", {
      x: 650,
      y: 220,
      duration: 60,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 250,
      y: 230,
      duration: 90,
      ease: "linear",
    });
  } else if (mqls[1].matches) {
    tl.set(".moon", { x: 140, y: 100 });

    tl.to(".moon", { x: 160, y: 250, duration: 30, ease: "linear" });
    tl.to(".moon", { x: 280, y: 350, duration: 30, ease: "linear" });
    tl.to(".moon", { x: 550, y: 720, duration: 30, ease: "linear" });
    tl.to(".moon", { x: 720, y: 150, duration: 30, ease: "linear" });
    tl.to(".moon", { x: 140, y: 100, duration: 30, ease: "linear" });
  } else if (mqls[2].matches) {
    tl.set(".moon", { x: 140, y: 100 });

    tl.to(".moon", { x: 160, y: 200, duration: 20, ease: "linear" });
    tl.to(".moon", { x: 180, y: 300, duration: 18, ease: "linear" });
    tl.to(".moon", { x: 450, y: 400, duration: 24, ease: "linear" });
    tl.to(".moon", { x: 520, y: 150, duration: 20, ease: "linear" });
    tl.to(".moon", { x: 140, y: 100, duration: 32, ease: "linear" });
  } else if (mqls[3].matches) {
    tl.set(".moon", { x: 40, y: 80 });

    tl.to(".moon", { x: 350, y: 400, duration: 45, ease: "linear" });
    tl.to(".moon", { x: 520, y: 115, duration: 45, ease: "linear" });
    tl.to(".moon", { x: 40, y: 80, duration: 50, ease: "linear" });
  } else if (mqls[4].matches) {
    tl.set(".moon", { x: 40, y: 80 });

    tl.to(".moon", { x: 50, y: 150, duration: 10, ease: "linear" });
    tl.to(".moon", { x: 90, y: 200, duration: 6, ease: "linear" });
    tl.to(".moon", { x: 180, y: 280, duration: 9, ease: "linear" });
    tl.to(".moon", { x: 240, y: 90, duration: 12, ease: "linear" });
    tl.to(".moon", { x: 40, y: 80, duration: 12, ease: "linear" });
  } else if (mqls[5].matches) {
    tl.set(".moon", { x: 20, y: 80 });

    tl.to(".moon", { x: 180, y: 70, duration: 20, ease: "linear" });
    tl.to(".moon", { x: 200, y: 300, duration: 45, ease: "linear" });
    tl.to(".moon", { x: 22, y: 230, duration: 25, ease: "linear" });
    tl.to(".moon", { x: 150, y: 150, duration: 15, ease: "linear" });
    tl.to(".moon", { x: 20, y: 80, duration: 15, ease: "linear" });
  } else if (mqls[6].matches) {
    tl.set(".moon", { x: 20, y: 80 });

    tl.to(".moon", { x: 120, y: 100, duration: 20, ease: "linear" });
    tl.to(".moon", { x: 130, y: 300, duration: 45, ease: "linear" });
    tl.to(".moon", { x: 22, y: 230, duration: 25, ease: "linear" });
    tl.to(".moon", { x: 120, y: 150, duration: 15, ease: "linear" });
    tl.to(".moon", { x: 20, y: 80, duration: 15, ease: "linear" });
  }
}
for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse);
}
