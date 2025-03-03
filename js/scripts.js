const para = document.getElementById("textsub");

const a2 = document.querySelector(".a2");
const showreel_box = document.querySelector(".showreel_box");
const modalvideo = document.querySelector(".modalvideo");
const p_button = document.querySelector(".p_button");
const close_button = document.querySelector(".close_button");
const video = document.querySelector("#video");
const videotop = document.querySelector("#videotop");
/* ----------------- */
const p_button2 = document.querySelector(".p_button2");
const a3 = document.querySelector(".a3");
const close_button2 = document.querySelector(".close_button2");

/* ----------------- */
const button = document.querySelector(".sr");
const buttonl = document.querySelector(".sl");
const targetElm = document.querySelector('.b3')
const targetElml = document.querySelector('#digital1')

button.addEventListener('click', function(){
  targetElm.scrollIntoView();
  button.style.opacity = "0";
  buttonl.style.opacity = "1";
})

buttonl.addEventListener('click', function(){
  targetElml.scrollIntoView();
  button.style.opacity = "1";
  buttonl.style.opacity = "0";
})
/*-------------------*/
const button2 = document.querySelector(".sr2");
const buttonl2 = document.querySelector(".sl2");
const targetElm2 = document.querySelector('#design2')
const targetElml2 = document.querySelector('#design1')

button2.addEventListener('click', function(){
  targetElm2.scrollIntoView();
  button2.style.opacity = "0";
  buttonl2.style.opacity = "1";
})

buttonl2.addEventListener('click', function(){
  targetElml2.scrollIntoView();
  button2.style.opacity = "1";
  buttonl2.style.opacity = "0";
})
/*-------------------*/
const button3 = document.querySelector(".sr3");
const buttonl3 = document.querySelector(".sl3");
const targetElm3 = document.querySelector('#art2')
const targetElml3 = document.querySelector('#art1')

button3.addEventListener('click', function(){
  targetElm3.scrollIntoView();
  button3.style.opacity = "0";
  buttonl3.style.opacity = "1";
})

buttonl3.addEventListener('click', function(){
  targetElml3.scrollIntoView();
  button3.style.opacity = "1";
  buttonl3.style.opacity = "0";
})
/*-------------------*/


p_button.addEventListener("click", ()=> video.src = "https://player.vimeo.com/video/879183810?h=33805084b3&title=0&byline=0&portrait=0");
p_button.addEventListener("click", ()=> a2.classList.add("active"));
close_button.addEventListener("click", ()=> a2.classList.remove("active"));
close_button.addEventListener("click", ()=> video.src = "");
showreel_box.addEventListener("click", ()=> a2.classList.remove("active"));

p_button2.addEventListener("click", ()=> videotop.src = "https://player.vimeo.com/video/879183810?h=33805084b3&title=0&byline=0&portrait=0");
p_button2.addEventListener("click", ()=> a3.classList.add("active"));
close_button2.addEventListener("click", ()=> a3.classList.remove("active"));
close_button2.addEventListener("click", ()=> videotop.src = "");


