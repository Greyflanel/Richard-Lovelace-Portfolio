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


function scrollAnimation() {
  
  
  timeline
    .set(".smoke-vid, .smoke-text", {
      opacity: 0,
    })
    .call(playVideo, ["smokey"])
    .to(".smoke-vid", {
      duration: 3,
      autoAlpha: 1,
    })
    .to(
      ".smoke-text",
      {
        delay: 6.98,
        duration: 24,
        autoAlpha: 1,
      },
      "-=6.9"
    )
    .to(
      ".smoke-vid",
      {
        y: 67,
        duration: 7,
      },
      "-=24"
    )
    .to(
      ".smoke-vid",
      {
        y: 30,
        duration: 3,
      },
      "-=27"
    )
    .to(
      ".smoke-text",
      {
        y: 62,
        duration: 4.15,
      },
      "-=24.9"
    )
    .to(
      ".smoke-vid",
      {
        autoAlpha: 0,
      },
      "-=20.1"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
      },
      "-=18.8"
    );

    ScrollTrigger.matchMedia({
      
      "(min-width: 1100px)": () => {
        timeline
          .to(
            ".contact-info",
            {
              x: "16.5vw",
              duration: 4.7,
            },
            "-=20"
          )
          .to(".form-wrapper", { 
            x: "-16.5vw",
             duration: 4.7,
             }, "-=20")
          .to(
            ".border1, .border2",
            {
              autoAlpha: 1,
              duration: 3,
            },
            "-=18"
          );
      },
    });
}
 
scrollAnimation();
