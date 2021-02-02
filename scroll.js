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
  ease: "power1.out",
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
        delay: 10.5,
        duration: 16,
        autoAlpha: 1,
      },
      "-=10.3"
    )
    .to(
      ".smoke-vid",
      {
        y: 60,
        duration: 6,
      },
      "-=20"
    )
    .to(
      ".smoke-text",
      {
        y: 60,
        duration: 4,
      },
      "-=18"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=12"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0
      },
      "-=10.5"
    );

}
timeline.restart();
scrollAnimation();