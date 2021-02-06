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
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#fourth-section",
    start: "top 15%",
  },
});


let timeline2 = gsap.timeline().from(".developer-logo",{
  
});

console.log(timeline2)
function scrollAnimation() {
  
  
    
  timeline
    .set(".smoke-vid, .smoke-text", {
      opacity: 0,
      
    }).call(playVideo, ["smokey"])
    .to(".smoke-vid", {
      duration: 3,
      autoAlpha: 1,
      
    })
    .to(
      ".smoke-text",
      {
        delay: 7.3,
        duration: 23,
        autoAlpha: 1,
      },
      "-=6.9"
    )
    .to(
      ".smoke-vid",
      {
        y: 60,
        duration: 6,
      },
      "-=24"
    )
    .to(
      ".smoke-text",
      {
        y: 60,
        duration: 4.5,
      },
      "-=23.5"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=19"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
        duration: 1.5,
      },
      "-=14"
    ).to(".contact-container", {
      autoAlpha: 1,
      duration: 16
    }, "-=15");

// New timeline

    
 
scrollAnimation();

const trigger = 0.5;

const scrollTimeline = gsap
  .timeline({
    defaults: { duration: 1, ease: "power1.out", autoAlpha: 1, rotation: -45 },
    repeat: -1,
    yoyo: true,
  })
  .set(
    ".left",
    { xPercent: -12.5, yPercent: 0.6, autoAlpha: 0, rotation: -44 },
    0 
  )
  .set(
    ".center",
    {
      xPercent: 240.1,
      yPercent: 73.8,
      autoAlpha: 0,
      rotation: -44,
      scale: 0.85,
      filter: "drop-shadow(rgba(0, 0, 0, .3) -60px 75px 33px)",
    },
    0
  )
  .set(
    ".right",
    { xPercent: 88.5, yPercent: 4.7, autoAlpha: 0, rotation: -44 },
    0
  )
  .to(".left", { xPercent: -2.5, yPercent: 10.6 }, trigger)
  .to(".center", { xPercent: 220.1, yPercent: 63.8 }, trigger)
  .to(".right", { xPercent: 68.5, yPercent: -6.7 }, trigger)
  .to(".center", {
    xPercent: 218,
    yPercent: 62,
    scale: 1,
    filter: "drop-shadow(rgba(0, 0, 0, .6) -60px 75px 33px)",
    ease: Power1.easeInOut,
  });

  // Duration is now a property within the vars object ... and a timeline can have default property values! :) Because all of your tweens have a 1 second duration set, rather than set them on each tween, you can set them in the defaults. The same is true for rotation and ease! Of course, where ever you would like some other value, you would just include those on the tween. Have a look here,