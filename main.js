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

const animate = document.querySelectorAll(".slide-left");

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in-left");
  }
    else {
    entry.target.classList.remove('slide-in-left');
  }
})
}

const options = {}
const observer = new IntersectionObserver(callback, options);

animate.forEach(element => {
  observer.observe(element)
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

