var mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];

window.onload = function () {
  function mediaqueryresponse(mql) {
    let tl = gsap.timeline({ repeat: -1 });
    let tl2 = gsap.timeline({ repeat: -1 });
    let tl3 = gsap.timeline({ repeat: -1 });
    let tl4 = gsap.timeline({ repeat: 5 });
    let tl5 = gsap.timeline({ repeat: 5 });

    tl2
      .set(".content", {
        visibility: "visible",
        opacity: 0,
        filter: "brightness(0%)",
        delay: 0.5,
      })
      .to(
        ".content",
        {
          filter: "brightness(130%)",
          duration: 5,
          opacity: 1,
          delay: 1,
        },
        "-=0.8"
      );

    tl2.to(".content", {
      filter: "brightness(0%)",
      duration: 4,
      opacity: 0,
      delay: 1,
    });

    tl.set(".container", {
      xPercent: -50,
      yPercent: -50,
      x: "-38%",
      y: "0%",
    });
    if (mqls[0].matches) {
      tl.to(".container", {
        delay: 0,
        x: "+=38%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=38%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    } else if (mqls[1].matches) {
      tl.set(".container", {
        delay: 3,
      });
      tl.to(".container", {
        x: "+=38%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=38%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });

      tl3
        .set(".spotlight2", {
          x: "200",
          y: "100",
        })
        .to(".spotlight2", { x: "-=400", duration: 8 })
        .to(".spotlight2", { x: "+=400", duration: 8 });
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
};
