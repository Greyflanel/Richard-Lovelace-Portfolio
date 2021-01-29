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
  scrollTrigger: "body",
});
let timeline2 = gsap.timeline({
  repeat: 0,
  scrollTrigger: "body",
});


function scrollAnimation() {
  
  timeline.set(".smoke-vid", {visibility: "hidden", opacity: 1}).set(".smoke-text", { 
    opacity: 0
  });
  
ScrollTrigger.batch(".smoke-vid, .smoke-text", {
  interval: 0.1, // time window (in seconds) for batching to occur.
  batchMax: 3, // maximum batch size (targets). Can be function-based for dynamic values

  onEnter: (batch) =>
    timeline.to(batch, {
      opacity: 1,
      autoAlpha: 1,
      onToggle: playVideo("smokey"),
      y: 50,
      stagger: { each: 2.3 , grid: [1, 100] },
      overwrite: true,
      duration: 5,
    }).to(batch, {
      autoAlpha: 0,
      duration: 0.5
    }),
  onLeave: (batch) => timeline.to(batch, {   autoAlpha: 0, overwrite: true,
   }),
  onEnterBack: (batch) =>
    timeline.to(batch, { opacity: 0, y: 50, stagger: 0.15, overwrite: true , }),
  onLeaveBack: (batch) =>
    timeline.set(batch, { opacity: 0, y: 50, overwrite: true }),
  // you can also define most normal ScrollTrigger values like start, end, etc.

  start: "20px bottom",
  
});

// when ScrollTrigger does a refresh(), it maps all the positioning data which 
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal 
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we 
// return a gsap.set() in the listener, it'll automatically revert it after the refres
}

scrollAnimation();