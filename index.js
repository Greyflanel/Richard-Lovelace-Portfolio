var mqls = [
  window.matchMedia("(min-width: 1281px)"),
  window.matchMedia("(min-width: 1000px)"),
  window.matchMedia("(min-width: 800px)"),
  window.matchMedia("(min-width: 600px)"),
  window.matchMedia("(min-width: 400px)"),
  window.matchMedia("(min-width: 360px)"),
  window.matchMedia("(min-width: 280px)"),
];
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
window.onload = function () {
  function mediaqueryresponse(mql) {
    let tl = gsap.timeline({ repeat: -1 });
    let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 5 });
    let tl3 = gsap.timeline({ repeat: 0, repeatDelay: 1});
    let tl4 = gsap.timeline({ repeat: 0 });
    let tl5 = gsap.timeline({ repeat: 5 });

    // tl2
    //   .set(".content", {
    //     visibility: "visible",
    //     opacity: 0,
    //     filter: "brightness(0%)",
    //     delay: 0.5,
    //   })
    //   .to(
    //     ".content",
    //     {
    //       filter: "brightness(120%)",
    //       duration: 6,
    //       opacity: 1,
    //       delay: 1,
    //     }
    //   );

    // tl2.to(".content", {
    //   filter: "brightness(0%)",
    //   duration: 5,
    //   opacity: 0,
    //   delay: 1,
    // });
    
    tl3.to(".spotlight3", {
      filter: "brightness(200%)",
      duration: 20
    })
    tl.set(".container", {
      visibility: "visible",
      autoAlpha: 1,
      width: "35%",
      xPercent: -50,
      yPercent: -50,
      x: "-35%",
      y: "0%",
      
    });
    if (mqls[0].matches) {
      
      tl.to(".container", {
        
        x: "+=85%",
        y: "-=20%",
        duration: 45,
        ease: "linear",
      })
        .to(".container", {
          x: "+=45%",
          y: "+=30%",
          duration: 45,
          ease: "linear",
          delay: 9999999999999999999999999999,
        })
        .to(".container", {
          x: "-=45%",
          y: "+=20%",
          duration: 45,
          ease: "linear",
        })
        .to(".container", {
          x: "-=45%",
          y: "-=20%",
          duration: 45,
          ease: "linear",
        });
    } else if (mqls[1].matches) {
      tl.set(".container", {
        x: "+=10%",
        delay: 0
      });
      tl.to(".container", {
        x: "+=38%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=38%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=38%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });

    } else if (mqls[2].matches) {
      tl.set(".container", {
        width: "55%",
        x: "+=10%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });
    } else if (mqls[3].matches) {
      tl.set(".container", {
        x: "+=10%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });
    } else if (mqls[4].matches) {
      tl.set(".container", {
        x: "+=10%",
        width: "65%"
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });
    } else if (mqls[5].matches) {
      tl.set(".container", {
        x: "+=15%",
        width: "70%"
      });
      tl.to(".container", {
        
        x: "+=34%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });
    } else if (mqls[6].matches) {
      tl.set(".container", {
        width: "75%",
        x: "+=13%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 30,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 30,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 30,
          ease: "linear",
        });
    }
  }

  for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addEventListener(mediaqueryresponse, {});
  }
};
