/* jshint esversion: 6 */

// let tween = gsap.to(".moon", { duration: "15", x: "1230", y: "-250", ease: "power1.out",  });



var mqls = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(max-width: 1000px)"),
    window.matchMedia("(max-width: 800px)"),
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 400px)"),
    window.matchMedia("(max-width: 300px)"),
];
 
function mediaqueryresponse(mql){
    let tl = gsap.timeline({repeat: 200});
    
    if(mqls[0].matches){
tl.set(".moon", { x: 140, y: 100, });        
tl.to(".moon",  { x: 300, y: 320, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 500, y: 400, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 1000, y: 480, duration: 32, ease: "linear"});
tl.to(".moon",  {x: 1200, y: 50, duration: 30, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 44, ease: "linear"});
// let scroll = gsap.to(window, 0.5, {scrollTo:{y:".second-section"}});
// scroll();
    }
  if(mqls[1].matches){ 
tl.set(".moon", { x: 140, y: 100, });        
tl.to(".moon",  { x: 160, y: 250, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 280, y: 350, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 650, y: 480, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 720, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
    }

if(mqls[2].matches){
tl.to(".moon", { x: 300, y: 400, duration: 13, ease: "linear"});
tl.to(".moon",  {x: 505, y: 435, duration: 10, ease: "linear"});
tl.to(".moon", {x: 800, y: 455, duration: 11, ease: "linear"});
tl.to(".moon",  {x: 980, y: 485, duration: 12, ease: "linear"});
tl.to(".moon",  {x: 1050, y: 400, duration: 14, ease: "linear"});
tl.to(".moon",  {x: 830, y: 300, duration: 15, ease: "linear"});
tl.to(".moon",  {x: 500, y: 400, duration: 16, ease: "linear"});
tl.to(".moon",  {x: 100, y: 400, duration: 18, ease: "linear"});
    }
    if(mqls[3].matches){
tl.to(".moon", { x: 300, y: 400, duration: 13, ease: "linear"});
tl.to(".moon",  {x: 505, y: 435, duration: 10, ease: "linear"});
tl.to(".moon", {x: 800, y: 455, duration: 11, ease: "linear"});
tl.to(".moon",  {x: 980, y: 285, duration: 12, ease: "linear"});
tl.to(".moon",  {x: 1050, y: 400, duration: 14, ease: "linear"});
tl.to(".moon",  {x: 830, y: 450, duration: 15, ease: "linear"});
tl.to(".moon",  {x: 500, y: 350, duration: 16, ease: "linear"});
tl.to(".moon",  {x: 100, y: 400, duration: 18, ease: "linear"});
    }
    if(mqls[4].matches){
tl.to(".moon", { x: 300, y: 400, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 505, y: 435, duration: 1, ease: "linear"});
tl.to(".moon", {x: 800, y: 455, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 980, y: 485, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 1050, y: 400, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 830, y: 500, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 500, y: 500, duration: 1, ease: "linear"});
tl.to(".moon",  {x: 100, y: 400, duration: 1, ease: "linear"});
 }
}

if(mqls[5].matches){
tl.to(".moon", { x: 200, y: 400, duration: 13, ease: "linear"});
tl.to(".moon",  {x: 105, y: 435, duration: 10, ease: "linear"});
tl.to(".moon", {x: 300, y: 555, duration: 11, ease: "linear"});
}
 
for (let i=0; i<mqls.length; i++){
    mediaqueryresponse(mqls[i]);
    mqls[i].addListener(mediaqueryresponse); 
}
// let mql = window.matchMedia('(max-width: 200px)');

// document.querySelector(".mq-value").innerText = mql.matches;



// tl.pause();
// tl.resume();
// tl.seek(50);
// tl.play();
// tl.reverse();


