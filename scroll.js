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
  onStart: playVideo("smokey"),
});


function scrollAnimation() {
  timeline
    .set(".smoke-vid, .smoke-text", {
      opacity: 0,
    })
    .to(".smoke-vid", {
      duration: 3,
      autoAlpha: 1,
      
    })
    .to(
      ".smoke-text",
      {
        delay: 7.5,
        duration: 23,
        autoAlpha: 1,
      },
      "-=6.9"
    )
    .to(
      ".smoke-vid",
      {
        y: 60,
        duration: 8,
      },
      "-=23.5"
    )
    .to(
      ".smoke-text",
      {
        y: 60,
        duration: 6,
      },
      "-=23.5"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=17"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
      },
      "-=10.5"
    );

}

scrollAnimation();