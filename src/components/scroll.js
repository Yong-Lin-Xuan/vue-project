import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
document.addEventListener("DOMContentLoaded", function() {
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".gs_reveal").forEach(function(el,index) {
    hide(el); // assure that the elent is hidden when scrolled into view
    
    ScrollTrigger.create({
    trigger: el,
    onEnter: function() { animateFrom(el) }, 
    onEnterBack: function() { animateFrom(el, -1) },
    onLeave: function() { hide(el) }, // assure that the elent is hidden when scrolled into view
    onLeaveBack: function() { hide(el) }
    });
});
});
const animateFrom = (el, direction) =>{
direction = direction || 1;
var x = 0,
    y = direction * 100;
if(el.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
} else if (el.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
}
el.style.transform = "translate(" + x + "px, " + y + "px)";
// el.style.opacity = "0";
gsap.fromTo(el, {x: x, y: y, autoAlpha: 0}, {
    duration: 5, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto",
});
// console.log(el.dataset.index);
}
const hide = (el) =>{
gsap.to(el, {autoAlpha: 0, overwrite: "auto"});
}