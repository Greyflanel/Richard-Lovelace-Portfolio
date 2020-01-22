/* jshint esversion: 6 */

// let tween = gsap.to(".moon", { duration: "15", x: "1230", y: "-250", ease: "power1.out",  });

var tl = gsap.timeline({repeat: 200});
tl.set(".moon", { left: "5rem", bottom: "6rem"})
tl.to(".moon", { x: 300, y: -400, duration: 13, ease: "linear"});
tl.to(".moon",  {x: 505, y: -435, duration: 10, ease: "linear"});
tl.to(".moon", {x: 800, y: -455, duration: 11, ease: "linear"});
tl.to(".moon",  {x: 980, y: -285, duration: 12, ease: "linear"});
tl.to(".moon",  {x: 1050, y: -100, duration: 14, ease: "linear"});
tl.to(".moon",  {x: 830, y: -50, duration: 15, ease: "linear"});
tl.to(".moon",  {x: 500, y: -40, duration: 16, ease: "linear"});
tl.to(".moon",  {x: 0, y: 0, duration: 16, ease: "linear"});






tl.from("#me", {opacity: 0,  duration: 0.212, repeat: 6, ease: "rough.in"}, "-=");
tl.to("#me", {opacity: 1,  duration: 0.14, repeat: 3, delay: 2}, "-=");
tl.from("#me", {opacity: 0,  duration: 0.14, repeat: 1 }, "-=");
tl.from("#we", {opacity: 0,  duration: 0.156, repeat: 0.2, delay: 1, ease: "rough.in"}, "-=");
tl.to("#we", {opacity: 1,  duration: 0.24, repeat: 3, delay: 0.5}, "-=");
tl.from("#we", {opacity: 0,  duration: 0.4, repeat: 1, delay: 0.1 }, "-=");

// tl.pause();
// tl.resume();
// tl.seek(30);
// tl.play();
// tl.reverse();


