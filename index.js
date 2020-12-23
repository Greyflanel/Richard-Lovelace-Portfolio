var mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];

function mediaqueryresponse(mql) {
  let tl = gsap.timeline({ repeat: -1 });
  let tl2 = gsap.timeline({ repeat: -1 });
  let tl3 = gsap.timeline({ repeat: -1 });
  let tl4 = gsap.timeline({ repeat: 5 });
  let tl5 = gsap.timeline({ repeat: 5 });

  

  

  tl2.to(".content", {
    opacity: 1,
    filter: "brightness(130%)",
    duration: 4,
  });

  tl2.to(".content", {
    delay: 5,
    filter: "brightness(0%)",
    duration: 2.5,
    opacity: 0,
  });

  tl2.to(".content", {
    delay: 1,
    filter: "brightness(130%)",
    duration: 4,
    opacity: 1,
  });

  tl2.to(".content", {
    delay: 5,
    filter: "brightness(130%)",
    duration: 2.5,
    opacity: 0,
  });
  

  if (mqls[0].matches) {
    tl.set(".moon, .spotlight", {
      scale: 1,
      xPercent: -50,
      yPercent: -50,
      x: "-670",
      y: "-35",
    })
      .to(".moon, .spotlight", {
        x: "+=650",
        y: "-=200",
        duration: 60,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "+=650",
        y: "+=200",
        duration: 20,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "-=650",
        y: "+=200",
        duration: 28,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "-=645",
        y: "-=200",
        duration: 28,
        ease: "linear",
      });
    
  } else if (mqls[1].matches) {
    tl.set(".moon, .spotlight", {
      scale: 0.55,
      xPercent: -50,
      yPercent: -50,
      x: "-460",
      y: "-35",
    })
      .to(".moon, .spotlight", {
        x: "+=440",
        y: "-=100",
        duration: 45,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "+=440",
        y: "+=100",
        duration: 45,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "-=440",
        y: "+=100",
        duration: 45,
        ease: "linear",
      })
      .to(".moon, .spotlight", {
        x: "-=435",
        y: "-=100",
        duration: 45,
        ease: "linear",
      });
    tl3.set(".spotlight2", {
      x: "200",
      y: "220"
    }).to(".spotlight2", {x: "-=400", duration: 8}).to(".spotlight2", {x: "+=400", duration: 8})
  } else if (mqls[2].matches) {
  } else if (mqls[3].matches) {
  } else if (mqls[4].matches) {
  } else if (mqls[5].matches) {
  } else if (mqls[6].matches) {
  }
}

for (let i = 0; i < mqls.length; i++) {
  mediaqueryresponse(mqls[i]);
  mqls[i].addEventListener(mediaqueryresponse, {});
}
