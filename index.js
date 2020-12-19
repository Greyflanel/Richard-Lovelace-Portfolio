var mqls = [
  window.matchMedia("(min-width: 1200px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];

function mediaqueryresponse(mql) {
  let tl = gsap.timeline({ repeat: 1000 });
  let tl2 = gsap.timeline({ repeat: 1000 });
  let tl3 = gsap.timeline({ repeat: 5 });
  let tl4 = gsap.timeline({ repeat: 5 });
  let tl5 = gsap.timeline({ repeat: 5 });

  tl.set(".moon, .spotlight", {
    xPercent: -50,
    yPercent: -50,
    x: -650,
    y: 180,
  });
  
  
  if (mqls[0].matches) {
    tl2.to(".content", {
      delay: 4, 
      filter: "brightness(2%)",
      duration: 2,
    });
    tl2.to(".content", {
      delay: 2,
      filter: "brightness(75%)",
      duration: 4
    });
    tl2.to(".content", {
      delay: 4,
      filter: "brightness(120%)",
      duration: 2,
    });
    tl2.to(".content", {
      delay: 1,
      filter: "brightness(75%)",
      duration: 4,
    });
    tl2.to(".content", {
      delay: 0.4,
      filter: "brightness(2%)",
      duration: 6,
    });
    tl.to(".moon, .spotlight", {
      x: "+=650",
      y: "-=400",
      duration: 30,
      ease: "linear",
    });
    
    tl.to(".moon, .spotlight", {
      x: "+=649",
      y: "+=400",
      duration: 30,
      ease: "linear",
    }, "+=4");
    
    tl.to(".moon, .spotlight", {
      x: "-=1300",
      y: "+=0",
      duration: 56,
      ease: "linear",
    });
   
  } else if (mqls[1].matches) {
    tl.set(".moon, .spotlight", { x: 140, y: 100 });

    tl.to(".moon, .spotlight", {
      x: 160,
      y: 250,
      duration: 16,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 280,
      y: 350,
      duration: 30,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 550,
      y: 720,
      duration: 30,
      ease: "linear",
    });
    tl.to(".moon .spotlight", { x: 720, y: 150, duration: 30, ease: "linear" });
    tl.to(".moon .spotlight", {
      x: 140,
      y: 100,
      duration: 30,
      ease: "linear",
    });
  } else if (mqls[2].matches) {
    tl.set(".moon, .spotlight", { x: 140, y: 100 });

    tl.to(".moon, .spotlight", {
      x: 160,
      y: 200,
      duration: 20,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 180,
      y: 300,
      duration: 18,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 450,
      y: 400,
      duration: 24,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 520,
      y: 150,
      duration: 20,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 140,
      y: 100,
      duration: 32,
      ease: "linear",
    });
  } else if (mqls[3].matches) {
    tl.set(".moon, .spotlight", { x: 40, y: 80 });

    tl.to(".moon, .spotlight", {
      x: 350,
      y: 400,
      duration: 45,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 520,
      y: 115,
      duration: 45,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", { x: 40, y: 80, duration: 50, ease: "linear" });
  } else if (mqls[4].matches) {
    tl.set(".moon", { x: 40, y: 80 });
    tl.set(".spotlight", { x: 50, y: 80 });
    tl.to(".moon, .spotlight", { x: 50, y: 150, duration: 10, ease: "linear" });
    tl.to(".moon, .spotlight", { x: 90, y: 200, duration: 6, ease: "linear" });
    tl.to(".moon, .spotlight", { x: 180, y: 280, duration: 9, ease: "linear" });
    tl.to(".moon, .spotlight", { x: 240, y: 90, duration: 12, ease: "linear" });
    tl.to(".moon, .spotlight", { x: 40, y: 80, duration: 12, ease: "linear" });
  } else if (mqls[5].matches) {
    tl.set(".moon", { x: 20, y: 80 });
    tl.set(".spotlight", { x: 50, y: 80 });
    tl.to(".moon, .spotlight", { x: 180, y: 70, duration: 20, ease: "linear" });
    tl.to(".moon, .spotlight", {
      x: 200,
      y: 300,
      duration: 45,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", { x: 22, y: 230, duration: 25, ease: "linear" });
    tl.to(".moon, .spotlight", {
      x: 150,
      y: 150,
      duration: 15,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", { x: 20, y: 80, duration: 15, ease: "linear" });
  } else if (mqls[6].matches) {
    tl.set(".moon", { x: 20, y: 80 });
    tl.set(".spotlight", { x: -50, y: 80 });
    tl.to(".moon, .spotlight", {
      x: 120,
      y: 100,
      duration: 20,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", {
      x: 130,
      y: 300,
      duration: 45,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", { x: 22, y: 230, duration: 25, ease: "linear" });
    tl.to(".moon, .spotlight", {
      x: 120,
      y: 150,
      duration: 15,
      ease: "linear",
    });
    tl.to(".moon, .spotlight", { x: 20, y: 80, duration: 15, ease: "linear" });
  }
}
for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse, {});
}
