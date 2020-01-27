/* jshint esversion: 6 */

var mqls = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(max-width: 1000px)"),
    window.matchMedia("(max-width: 800px)"),
    window.matchMedia("(max-width: 600px)"),
    window.matchMedia("(max-width: 400px)"),
    window.matchMedia("(max-width: 300px)"),
];
 
function mediaqueryresponse(mql){
    let tl = gsap.timeline({repeat: 1000});
    
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
tl.set(".moon", { x: 140, y: 100, });        
tl.to(".moon",  { x: 160, y: 200, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 180, y: 300, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 450, y: 400, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 520, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
    }
    if(mqls[3].matches){
tl.set(".moon", { x: 140, y: 100, });        
tl.to(".moon",  { x: 150, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 180, y: 250, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 350, y: 380, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 520, y: 120, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
    }
    if(mqls[4].matches){
tl.set(".moon", { x: 40, y: 80, });        
tl.to(".moon",  { x: 60, y: 100, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 150, y: 150, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 250, y: 280, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 320, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 40, y: 80, duration: 32, ease: "linear"});
 }
}

if(mqls[5].matches){
tl.set(".moon", { x: 40, y: 80, });        
tl.to(".moon",  { x: 60, y: 100, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 100, y: 150, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 250, y: 280, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 220, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
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


