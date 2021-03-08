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
      
    }).call(playVideo, ["smokey"])
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
        y: 67,
        duration: 6.5,
      },
      "-=26"
    )
    .to(
      ".smoke-text",
      {
        y: 64,
        duration: 3.3,
      },
      "-=24"
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
        
      },
      "-=17.9"
    )

    ScrollTrigger.matchMedia({
      "(min-width: 1400px)": () => {
        timeline
          .to(
            ".contact-info",
            {
              ease: "power1.inOut",
              x: "16.5vw",
              duration: 2.2,
            },
            "-=19"
          )
          .to(
            ".form-wrapper",
            {
              ease: "power1.inOut",
              x: "-16.5vw",
              duration: 2.2,
            },
            "-=19"
          );
      },

      "(min-width: 1100px)": () => {
        timeline
          .to(
            ".contact-info",
            {
              x: "16.5vw",
              duration: 3,
            },
            "17"
          )
          .to(".form-wrapper", { x: "-16.5vw", duration: 3 }, "17")
          .to(
            ".border1, .border2",
            {
              autoAlpha: 1,
              duration: 4,
            },
            "-=18"
          );
      },
    });
}
 
scrollAnimation();
