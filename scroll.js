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
}

let timeline = gsap.timeline({
  repeat: 0,
  scrollTrigger: "body",
});
let timeline2 = gsap.timeline({
  repeat: 0,
  scrollTrigger: "body",
});

function scrollAnimation() {
  
  timeline
    .set(".smoke-vid, .smoke-text", {
      autoAlpha: 0,
    })
    .to(".smoke-vid", {
      autoAlpha: 1,
      scrollTrigger: {
        trigger: "#fourth-section",
        scroller: "body",
        scrub: true,

        ease: "power1",
        onToggle: (self) =>
          self.isActive ? playVideo("smokey") : pauseVideo("smokey"),
        start: "top 20%", //when top  passes the bottom viewport height
        //events: onEnter onLeave onEnterBack onLeaveBack

        //options: play, pause, resume, reset, restart, complete, reverse,none
      },
    })
    .to(
      ".smoke-text",
      {
        
        autoAlpha: 1,
        duration: 12,
        delay: 5,
        scrollTrigger: {
          trigger: "#fourth-section",
          scroller: "body",
          scrub: true,

          ease: "power1",
          onToggle: (self) =>
            self.isActive ? playVideo("smokey") : pauseVideo("smokey"),
          start: "top 20%", //when top  passes the bottom viewport height
          //events: onEnter onLeave onEnterBack onLeaveBack

          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      },
      ">5"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "7.5"
    )
    .to(".smoke-text", {
      opacity: 0,
      duration: 2,
    });
}

scrollAnimation();