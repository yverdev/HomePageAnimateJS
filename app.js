// Selct Elt
const banner = document.querySelector('.banner');
const slider = document.querySelector('.background');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.icone');
const tittle = document.querySelector('.tittle');
const btnclose = document.querySelector('.closebtn');
const nav = document.getElementById('myNav');
const letters = document.querySelectorAll('.letters');

// TimeLine creation
const tl = new TimelineMax();

tl
.fromTo(banner,1,{height:"0%"}, {height:"80%", ease: Power2.easeInOut})
.fromTo(banner,1,{width:"100%"}, {width:"80%", ease: Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"}, {x:"0%", ease: Power2.easeInOut})
.fromTo(hamburger,2,{rotation:0, opacity:0, x:"-2000%"}, {rotation:720, opacity:1, x:"0%", ease: Power2.easeInOut}, "-=1.2")
.from(logo, 1, {x:"10%", ease: Back.easeOut.config(1,7)}, "-=2")
.staggerFrom(letters, 1, {opacity:0, ease: Back.easeOut.config(1,7)}, 0.2, "-=0.5");

// Evt listenning and associated method 
hamburger.addEventListener('click', function(){
    TweenMax.to(nav, 0.1,{right:0});
})

btnclose.addEventListener('click', function(){
    TweenMax.to(nav, 0.1,{right:-300});
})