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
    let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 15 });
    let tl3 = gsap.timeline({ repeat: 0, repeatDelay: 1});
    let tl4 = gsap.timeline({ repeat: 0 });
    let tl5 = gsap.timeline({ repeat: 5 });
    

    tl2
      .set(".content", {
        y: "60%",
        x: "20%",
        visibility: "visible",
        
      })
      .to(".content", {
        duration: 10,
        
        x: "+=70%",
        
      })
      

      console.clear();
      let letters = document.querySelectorAll(".letter");
      console.log(letters)
      

      
    tl2.set(".letter", {
      filter: "brightness(0%)",
      opacity: 0,
     
    }).to(".letter", {
        
        opacity: 1,
        filter: "brightness(110%)",
        stagger: {
          from: "edges",
          amount: 5,
          repeat: 1
        }
      }).add("test").to(".letter", {
        filter: "blur(0) brightness(150%)",
        stagger: {
          from: "end",
          amount: 2,
          
        }
      })
      .to(".content", {
        delay: 4,
        ease: "power4.in",
        duration: 3,
        opacity: 0,
      });
    
    tl3.set(".spotlight3", {
      filter: "brightness(100%)"
    }).to(".spotlight3", {
      
      duration: 20,
      
    })
    tl.set(".container", {
      visibility: "visible",
      autoAlpha: 1,
      
      xPercent: -50,
      yPercent: -50,
      x: "35%",
      y: "0%",
      
    });
    tl2.play("test");
    if (mqls[0].matches) {
      
      tl.to(".container", {
        
        x: "+=5%",
        y: "-=20%",
        duration: 25,
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

