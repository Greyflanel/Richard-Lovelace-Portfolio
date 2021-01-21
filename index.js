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
    let tl3 = gsap.timeline({ repeat: -1 });
    let tl4 = gsap.timeline({ repeat: 0 });
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
          duration: 6,
          opacity: 1,
          delay: 1,
        }
      );

    tl2.to(".content", {
      filter: "brightness(0%)",
      duration: 5,
      opacity: 0,
      delay: 1,
    });
    tl3.set(".smoke, .smoke-vid", {
      
      autoAlpha: 1,
    }).to(".smoke-vid", {
      
    })
    tl4
      .set(".smoke-text", {
        visibility: "visible",
        opacity: 0, 
        delay: 1.7,
      })
      .to(
        ".smoke-text",
        {
          delay: 1.8,
          duration: 8,
          opacity: 1,
          
        }
      ).to(".smoke-text", {
        
        opacity: 0,
        duration: 0.5
      });

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
        x: "+=45%",
        y: "-=20%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=45%",
          y: "+=20%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=45%",
          y: "+=20%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=45%",
          y: "-=20%",
          duration: 20,
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

    } else if (mqls[2].matches) {
      tl.set(".container", {
        x: "+=10%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    } else if (mqls[3].matches) {
      tl.set(".container", {
        x: "+=10%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    } else if (mqls[4].matches) {
      tl.set(".container", {
        x: "+=10%",
        width: "60%"
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    } else if (mqls[5].matches) {
      tl.set(".container", {
        x: "+=15%",
        width: "65%"
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    } else if (mqls[6].matches) {
      tl.set(".container", {
        width: "70%",
        x: "+=13%",
      });
      tl.to(".container", {
        x: "+=34%",
        y: "-=13%",
        duration: 20,
        ease: "linear",
      })
        .to(".container", {
          x: "+=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "+=13%",
          duration: 20,
          ease: "linear",
        })
        .to(".container", {
          x: "-=34%",
          y: "-=13%",
          duration: 20,
          ease: "linear",
        });
    }
  }

  for (let i = 0; i < mqls.length; i++) {
    mediaqueryresponse(mqls[i]);
    mqls[i].addEventListener(mediaqueryresponse, {});
  }
};
