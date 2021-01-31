gsap.registerPlugin(ScrollTrigger);

function playVideo(el) {
  let vid = document.getElementById(el);
  vid.play();
  
  console.log("playing video");
};

// function pauseVideo(el) {
//   let vid = document.getElementById(el);
//   vid.pause();
//   console.log("pausing video");
// };

let timeline = gsap.timeline({
  repeat: 10,
  scrollTrigger: "body",
});
let timeline2 = gsap.timeline({
  repeat: 0,
  scrollTrigger: "body",
});


function scrollAnimation() {
  
  timeline.set(".smoke-vid", {visibility: "hidden", opacity: 1}).set(".smoke-text", { 
    opacity: 0,
    repeat: 0
  });
  
let smokeAnimation = ScrollTrigger.batch(".smoke-vid, .smoke-text", {
  interval: 0.1, // time window (in seconds) for batching to occur.
  batchMax: 3, // maximum batch size (targets). Can be function-based for dynamic values

  onEnter: (batch) =>
    timeline.call
    (playVideo,['smokey']).to(batch, {
      opacity: 0.5,
      autoAlpha: 1,
      
      
      y: 60,
      duration: 5,
      stagger: { each: 1.8 , grid: [1, 20] },
      ease: "power1.in",
      duration: 5,
    }).to(batch, {
      autoAlpha: 0,
      duration: 0.8,
      
    }).to(".smoke-vid, .smoke-text", {
      display: "none"
    }),
  
});

}

scrollAnimation();