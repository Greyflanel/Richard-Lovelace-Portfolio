/* jshint esversion: 6 */

// gsap.to("#me", 8, {  textShadow: "0px 0px 10px  rgb(255, 230, 255)", color: "rgb(10, 1, 17, 10)", runBackwards: "true" });
// gsap.to("#we", 8, { textShadow: "0px 0px 10px  rgb(255, 230, 255)", color: "rgb(10, 1, 17, 10)", runBackwards: "true"});
// gsap.to("#mybutton", 20, {  boxShadow: "0px 0px 10px  rgb(255, 230, 255)", color: "rgb(10, 1, 17, 10)", });


let tween = gsap.to(".moon", { duration: "55", x: "1200", y: "-200", ease: "power1.out",  });


// var tween = gsap.to("#content", {
//   duration: 4,
//   x: 750,
//   rotation: 360,
//   ease: "none",
//   paused: true
// });

// document.querySelector("#play").onclick = () => tween.play();
// document.querySelector("#pause").onclick = () => tween.pause();
// document.querySelector("#resume").onclick = () => tween.resume();
// document.querySelector("#reverse").onclick = () => tween.reverse();
// document.querySelector("#restart").onclick = () => tween.restart();
