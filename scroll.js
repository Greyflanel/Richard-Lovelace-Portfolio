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
        delay: 7.3,
        duration: 23,
        autoAlpha: 1,
      },
      "-=7.25"
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
        y: 62,
        duration: 3,
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
        duration: 1.5,
      },
      "-=10"
    ).to(".contact-container", {
      autoAlpha: 1,
      duration: 16
    }, "-=14")

    ScrollTrigger.matchMedia({
      "(min-width: 1100px)": () => {
        timeline
          .to(".contact-info", { 
            x: "15vw", duration: 3, }, "17")
          .to(".form-wrapper", { x: "-15vw", duration: 3 }, "17");
      },
      "(min-width: 1400px)": () => {
        timeline
          .to(".contact-info", { 
            ease: "power1.out",
            x: "18vw", duration: 4 }, "17")
          .to(".form-wrapper", { 
            ease: "power1.out",
            x: "-18vw", duration: 4 }, "17");
      },
    });
}
 
scrollAnimation();
