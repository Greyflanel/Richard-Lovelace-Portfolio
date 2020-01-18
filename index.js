/* jshint esversion: 6 */
const helloAgain = document.querySelector("h1");
gsap.to(helloAgain, 15, {  textShadow: "3px 3px 6px #f7f8d2", color: "#0a0111", runBackwards: "true"});

const hello = document.querySelector("h2");
gsap.to(hello, 15, { textShadow: "3px 3px 6px #f7f8d2", color: "#0a0111", runBackwards: "true"});

// const helloStranger = document.querySelector("h1");
// gsap.to(helloStranger, 8, {  fontSize: 4.5, runBackwards: "true" });

// const helloGoodbye = document.querySelector("h2");
// gsap.to(helloGoodbye, 8, {  fontSize: 3.3, runBackwards: "true"});

let tween = gsap.to(".moon", { duration: 40, x: -850, y: -130, runBackwards: "true"});


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
