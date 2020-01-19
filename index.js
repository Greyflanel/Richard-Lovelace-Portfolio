/* jshint esversion: 6 */

gsap.to("#me", 4, {  textShadow: "4px 4px 4px 6px #928a97", color: "#0a0111", runBackwards: "true"});
gsap.to("#we", 4, { textShadow: "3px 3px 3px 5px #928a97", color: "#0a0111", runBackwards: "true"});
gsap.to("#mybutton", 4, {color: "#0a0111", borderColor: "#0a0111",  boxShadow: ".5px .5px 1px 1px #928a97", runBackwards: "true"});


let tween = gsap.to(".moon", { duration: "100", x: "-1050", y: "400", ease: "SlowMo.out", runBackwards: "true", });


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
