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

let timeline = gsap.timeline().from(".smoke", {
  
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#fourth-section",
    start: "top 5%",
    
  },
});

let timeline2 = gsap.timeline().from(".developer-logo",{
  scrollTrigger: {
    trigger: "#fourth-section",
    start: "top 5%",
  },
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

    timeline2.fromTo(
      ".dev-logo-img",
      8,
      {},
      {
        rotation: 360,
        scale: 3,
        
        x: "10vw",
        y: "50vh",
        repeat: 0,
      }
    );

    timeline2
      .to(".developer-logo", {
        opacity: 0,
        duration: 2,
      })
      .to(".developer-logo", {
        width: "10%",
        height: "11%",
        x: "-9vw",
        y: "-48vh",
      })
      .to(".developer-logo", {
        opacity: 1,
        duration: 2
      });
};
 
scrollAnimation();