gsap.registerPlugin(ScrollTrigger);

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  
  console.log("playing video");
};

function pauseVideo(el) {
  let vid = document.getElementById(el);
  vid.pause();
  console.log("pausing video");
};

let timeline = gsap.timeline({
  repeat: 0,
});
let timeline2 = gsap.timeline({
  repeat: 0,
});


function scrollAnimation() {
  
  timeline.set(".smoke-vid", {visibility: "hidden", opacity: 1, y: 0});
  timeline2.set(".smoke-text", {visibility: "hidden", opacity: 0, y: 0});
  timeline
    .to(".smoke-vid", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#fourth-section",
        scroller: "body",
        scrub: true,
        ease: "power1-inOut",
        start: "top top", //when top  passes the bottom viewport height
        onToggle: (self) => {console.log(self)
          self.isActive ? playVideo("smokey") : console.log("Paused")}
        ,
        //events: onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "restart complete reverse reset",
        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    })
    .to(".smoke-vid", {
      y: 70,
      duration: 8,
    }, "2.5")
    .to(".smoke-vid", {
      autoAlpha: 0,
      duration: 2,
    }, "-=4")
    
}

function textScrollAnimation() {
  
  timeline2.set(".smoke-text", { visibility: "hidden", opacity: 0, y: 0 });
  timeline2
    .to(".smoke-text", {
      
      duration: 6,
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#fourth-section",
        scroller: "body",
        scrub: true,
        ease: "power1-inOut",
        start: "top top", //when top  passes the bottom viewport height
        
      },
    }, "4")
    .to(
      ".smoke-text",
      {
        y: 70,
        duration: 3,
      },
      
    )
    .to(
      ".smoke-text",
      {
        autoAlpha: 0,
        duration: 2,
      },
      "-=4"
    );
}

scrollAnimation();
textScrollAnimation();