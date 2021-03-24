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
        delay: 6.98,
        duration: 23,
        autoAlpha: 1,
      },
      "-=6.7"
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
      "-=19.82"
    )
    .to(
      ".smoke",
      {
        autoAlpha: 0,
        
      },
      "-=18"
    )

    ScrollTrigger.matchMedia({
      
      "(min-width: 1100px)": () => {
        timeline
          .to(
            ".contact-info",
            {
              x: "16.5vw",
              duration: 4.7,
            },
            "-=19.65"
          )
          .to(".form-wrapper", { 
            x: "-16.5vw",
             duration: 4.7,
             }, "-=19.65")
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
