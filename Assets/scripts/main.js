// Play audio for gifs when a button is clicked//
function playAudio(audioNum) {
  var audio = document.getElementById(audioNum);
  audio.play();
}


/* Scroll to the next page when a button is clicked -->
reference: http://talkerscode.com/webtricks/smooth-scrolling-to-div-using-jquery.php */
function scrollToDiv(div_id) {
  $("html, body").animate(
    {
      scrollTop: $("#"+div_id).offset().top
    }, 100);
  }


/* Basic animations (slide from the left, slide from the right, slowly appearing) -->
reference: https://alligator.io/js/intersection-observer
& https://highrise.digital/blog/animating-blocks-on-scroll-with-intersection-observer/ */
document.addEventListener("DOMContentLoaded", function(event) {

const animateLeft = document.querySelectorAll(".slide-left");
const animateRight = document.querySelectorAll(".slide-right");
const animateAppear = document.querySelectorAll(".appear");

// When the element is intersecting, the animation class is added //
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

// Create an Intersection Observer instance and call observe //
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
