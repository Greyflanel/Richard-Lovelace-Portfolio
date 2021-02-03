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
    start: "top 15%"
  }
});


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
        delay: 7.2,
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
      "-=18.5"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
        duration: 1.5,
      },
      "-=14"
    );

}



scrollAnimation();