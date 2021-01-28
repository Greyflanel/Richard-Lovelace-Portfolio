gsap.registerPlugin(ScrollTrigger);
let timeline = gsap.timeline({
  scrollTrigger: "body",
});
let timeline2 = gsap.timeline({
  scrollTrigger: "body",
});

function scrollAnimation() {
  
  timeline.to(".smoke", {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: "#fourth-section",
      scroller: "body",
      scrub: true,
      ease: "power1",
      start: "top 60%", //when top  passes the bottom viewport height
      //events: onEnter onLeave onEnterBack onLeaveBack
      toggleActions: "restart complete reverse reset",
      //options: play, pause, resume, reset, restart, complete, reverse,none
    },
  }).to(".smoke-text", {
    delay: 1,
   autoAlpha: 1,
   duration: 12,
   repeat: 0 
  }, "+=2");
  timeline2.to(".smoke-text", {
    opacity: 0
  }, "-=2")
}

scrollAnimation();