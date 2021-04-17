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
    //     y: "60%",
    //     x: "10%",
    //     visibility: "visible",
    //     opacity: 0.5,
    //     filter: "brightness(100%)",
    //   })
    //   .to(".content", {
    //     duration: 7,
    //     filter: "brightness(120%)",
    //     opacity: 1,
    //     x: "60%",
        
    //   })
    //   .to(
    //     ".one, .fifteen",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=3"
    //   )
    //   .to(
    //     ".two, .fourteen",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.9"
    //   )
    //   .to(
    //     ".three, .thirteen",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.8"
    //   )
    //   .to(
    //     ".four, .twelve",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.7"
    //   )
    //   .to(
    //     ".five, .eleven",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.6"
    //   )
    //   .to(
    //     ".six, .ten",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.5"
    //   )
    //   .to(
    //     ".seven, .nine",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.4"
    //   )
    //   .to(
    //     ".eight",
    //     {
    //       filter: "blur(10rem)",
    //       duration: 1,
    //     },
    //     "-=2.3"
    //   ).to(".one, .two, .three, .four, .five, .six, .seven, .eight, .nine, .ten, .eleven, .twelve, .thirteen, .fourteen, .fifteen", {
    //     filter: "blur(0)",
    //     duration: 10
    //   }, "-=5");

    // tl2.to(".content", {
    //   delay: 4,
    //   ease: "power4.in",
    //   duration: 3,
    //   opacity: 0,
      
     
    // }).to(".content", {
      
    // });
    
    // tl3.set(".spotlight3", {
    //   filter: "brightness(100%)"
    // }).to(".spotlight3", {
      
    //   duration: 20,
      
    // })
    tl.set(".container", {
      visibility: "visible",
      autoAlpha: 1,
      
      xPercent: -50,
      yPercent: -50,
      x: "35%",
      y: "0%",
      
    });
    if (mqls[0].matches) {
      
      tl.to(".container", {
        delay: 9999999999999999999999999999,
        x: "+=85%",
        y: "-=15%",
        duration: 45,
        ease: "linear",
      })
        .to(".container", {
          x: "+=45%",
          y: "+=30%",
          duration: 45,
          ease: "linear",
          
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
