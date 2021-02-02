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
  ease: "elastic.in",
  onStart: playVideo("smokey"),
});
let num = gsap.utils.wrap(5, 10, 12);

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
        delay: 9,
        duration: 16,
        autoAlpha: 1,
      },
      "-=9"
    )
    .to(
      ".smoke-vid",
      {
        y: 60,
        duration: 6.5,
      },
      "-=20"
    )
    .to(
      ".smoke-text",
      {
        y: 60,
        duration: 4.6,
      },
      "-=17"
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
        autoAlpha: 0,
        duration: 1.5
      },
      "-=10"
    );

}
timeline.restart();
scrollAnimation();