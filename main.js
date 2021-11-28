function playAudio(audioNum) {
  var audio = document.getElementById(audioNum);
  audio.play();
}
/* 
const options = {}
const animateElements = document.querySelector('.slide-left')
const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in-left');
    }
  });
}

let observer = new IntersectionObserver(callback, options);

observer.observe(animateElements); */

/* 
function check(entry) {
  if (entry.isIntersecting) {
    entry.target.classList.add("slide-in-left");
    console.log(entry);
  return;
  }

  entry.target.classList.remove("slide-in-left");
} */

document.addEventListener("DOMContentLoaded", function(event) {

const animateLeft = document.querySelectorAll(".slide-left");
const animateRight = document.querySelectorAll(".slide-right");
const animateAppear = document.querySelectorAll(".appear");

const callbackLeft = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-left-anim");
  }
     else {
    entry.target.classList.remove("slide-left-anim");
  } 
})
}

const callbackRight = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-right-anim");
  }
    else {
    entry.target.classList.remove("slide-right-anim");
  }
})
}

const callbackAppear = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("appear-anim");
  }
    else {
    entry.target.classList.remove("appear-anim");
  }
})
}

const options = {}
const observerLeft = new IntersectionObserver(callbackLeft, options);
const observerRight = new IntersectionObserver(callbackRight, options);
const observerAppear = new IntersectionObserver(callbackAppear, options);

animateLeft.forEach(element => {
  observerLeft.observe(element)
})

animateRight.forEach(element => {
  observerRight.observe(element)
})

animateAppear.forEach(element => {
  observerAppear.observe(element)
})

});

/* entries => {
  entries.forEach(entry => {


    if (entry.isIntersecting) {
      entry.classList.add('slide-in-left');
      return;
    }

    // We're not intersecting, so remove the class!
    entry.classList.remove('slide-in-left');
  });
}); */

