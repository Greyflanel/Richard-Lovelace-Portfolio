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
  repeat: 0,
  onStart: playVideo("smokey"),
  
});
let timeline2 = gsap.timeline({
  
  
});


function scrollAnimation() {
  
  
  timeline.set(".smoke-vid, .smoke-text", {
    opacity: 0
  }).to(".smoke-vid", {
    duration: 3,
    autoAlpha: 1,
    y: 60
  }).to(".smoke-text", {
    
    delay: 5,
    duration: 12,
    autoAlpha: 1,
    y: 60,
  }, "-=6").to(".smoke-vid", {
    
    autoAlpha: 0
  }, "-=2.5").to(".smoke-text", {
    autoAlpha: 0
  })

}

scrollAnimation();