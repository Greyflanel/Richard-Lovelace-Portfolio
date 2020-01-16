/* jshint esversion: 6 */
const hello = document.querySelector('.hello');
    gsap.to(hello, 5, { scaleY:'5'});
 const helloX = document.querySelector('.hello');   
     gsap.to(hello, 6, { color: 'red',
                    backgroundColor: "green"});

let tween = gsap.to(".class", {rotation: 360, duration: 5, ease: "elastic"});


// var tween = gsap.to(".green", {
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