/* jshint esversion: 6 */

gsap.to("#me", 25, {  textShadow: "3px 4px 5px 6px #f7f8d2", color: "#0a0111", runBackwards: "true"});
gsap.to("#mybutton", 25, {    borderColor: "#22162a",  boxShadow: "2px 2px 2px 2px #22162a", runBackwards: "true"});
const hello = document.querySelector("h2");
gsap.to("#you", 25, { textShadow: "2px 2px 2px 4px #f7f8d2", color: "#0a0111", runBackwards: "true"});


// const helloStranger = document.querySelector("h1");
// gsap.to(helloStranger, 8, {  fontSize: 4.5, runBackwards: "true" });

// const helloGoodbye = document.querySelector("h2");
// gsap.to(helloGoodbye, 8, {  fontSize: 3.3, runBackwards: "true"});

let tween = gsap.to(".moon", { duration: "40", x: "-900", y: "-100", ease: "SlowMo.out", runBackwards: "true",});


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
