/* jshint esversion: 6 */

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let toggler = document.getElementById("toggler");

button1.addEventListener("click",
function(event) {
gsap.to(window, 1.5, {scrollTo:{y:"#second-section"}, ease: "power1.inOut"});
// gsap.to(toggler, 1.5, {backgroundColor: "rgba(255, 255, 255)", display: "none"});
// gsap.to(toggler, 0, {display: "none"});
});
button2.addEventListener("click",
function(event) {
gsap.to(window, 1.8, {scrollTo:{y:"#first-section"}, ease: "power1.inOut"});
// gsap.to(toggler, 1.8, {display: "block"});
});


var mqls = [
    window.matchMedia("(min-width: 1200px)"),
    window.matchMedia("(min-width: 1000px)"),
    window.matchMedia("(min-width: 800px)"),
    window.matchMedia("(min-width: 600px)"),
    window.matchMedia("(min-width: 400px)"),
    window.matchMedia("(min-width: 280px)"),
    window.matchMedia("(min-width: 200px)"),
];
 
function mediaqueryresponse(mql){
    let tl = gsap.timeline({repeat: 1000});
    
    if(mqls[0].matches){
tl.set(".moon", { x: 50, y: 65, });        
// tl.to(".moon",  { x: 400, y: 320, duration: .5, ease: "linear"});
tl.to(".moon",  {x: 500, y: 400, duration: 50, ease: "linear"});
tl.to(".moon",  {x: 950, y: 50, duration: 50, ease: "linear"});
tl.to(".moon",  {x: 50, y: 65, duration: 50, ease: "linear"});

    }
  else if(mqls[1].matches){ 
tl.set(".moon", { x: 140, y: 100, });       
tl.to(".moon",  { x: 160, y: 250, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 280, y: 350, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 650, y: 480, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 720, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
    }

else if(mqls[2].matches){
tl.set(".moon", { x: 140, y: 100, });
tl.to(".moon",  { x: 160, y: 200, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 180, y: 300, duration: 18, ease: "linear"});
tl.to(".moon",  {x: 450, y: 400, duration: 24, ease: "linear"});
tl.to(".moon",  {x: 520, y: 150, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 140, y: 100, duration: 32, ease: "linear"});
    }
else if(mqls[3].matches){
tl.set(".moon", { x: 40, y: 80, });        
tl.to(".moon",  {x: 350, y: 400, duration: 45, ease: "linear"});
tl.to(".moon",  {x: 520, y: 115, duration: 45, ease: "linear"});
tl.to(".moon",  {x: 40, y: 80, duration: 50, ease: "linear"});
    }
else if(mqls[4].matches){
tl.set(".moon", { x: 40, y: 80, });        
tl.to(".moon",  { x: 50, y: 150, duration: 10, ease: "linear"});
tl.to(".moon",  {x: 90, y: 200, duration: 6, ease: "linear"});
tl.to(".moon",  {x: 180, y: 280, duration: 9, ease: "linear"});
tl.to(".moon",  {x: 240, y: 90, duration: 12, ease: "linear"});
tl.to(".moon",  {x: 40, y: 80, duration: 12, ease: "linear"});
 }


else if(mqls[5].matches){
tl.set(".moon", { x: 20, y: 80, });    
tl.to(".moon",  { x: 180, y: 70, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 200, y: 300, duration: 45, ease: "linear"});
tl.to(".moon",  { x: 22, y: 230, duration: 25, ease: "linear"});
tl.to(".moon",  {x: 150, y: 150, duration: 15, ease: "linear"});
tl.to(".moon",  {x: 20, y: 80, duration: 15, ease: "linear"});
}

else if(mqls[6].matches){
tl.set(".moon", { x: 20, y: 80, });    
tl.to(".moon",  { x: 120, y: 100, duration: 20, ease: "linear"});
tl.to(".moon",  {x: 130, y: 300, duration: 45, ease: "linear"});
tl.to(".moon",  { x: 22, y: 230, duration: 25, ease: "linear"});
tl.to(".moon",  {x: 120, y: 150, duration: 15, ease: "linear"});
tl.to(".moon",  {x: 20, y: 80, duration: 15, ease: "linear"});
}

}
for (let i=0; i<mqls.length; i++){
    mediaqueryresponse(mqls[i]);
    mqls[i].addListener(mediaqueryresponse); 
}



