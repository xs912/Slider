let controls = document.querySelectorAll(".controls");
for (let i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

let slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
let myform = document.getElementById("myDiv");
let links = document.getElementsByTagName("a");
let radArray = document.querySelectorAll(".radio");
let next = document.getElementById("next");
let previous = document.getElementById("previous");

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};

function nextSlide() {
  if (currentSlide === 2) {
    links[2].className = "inactive";
  }
  goToSlide(currentSlide + 1);
  radArray[currentSlide].checked = true;
  links[currentSlide].className = "active";
  links[currentSlide - 1].className = "inactive";
}

function previousSlide() {
  if (currentSlide === 0) {
    links[0].className = "inactive";
  }
  let m = currentSlide;
  if (currentSlide === 0) {
    m = 2;
  } else {
    m = currentSlide - 1;
  }
  goToSlide(currentSlide - 1);
  radArray[m].checked = true;
  links[m].className = "active";
  links[m + 1].className = "inactive";
}
function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
}

for (let i = 0; i < radArray.length; i++) {
  radArray[i].addEventListener("click", function(event) {
    goToSlide(i);
    links[i].className = "active";
    if (i == 0) {
      links[i + 2].className = "inactive";
    } else {
      links[i - 1].className = "inactive";
    }
    if (i == 2) {
      links[i - 2].className = "inactive";
    }
    links[i + 1].className = "inactive";
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function(event) {
    goToSlide(i);
    links[i].className = "active";
    if (i == 0) {
      links[i + 2].className = "inactive";
    } else {
      links[i - 1].className = "inactive";
    }
    if (i == 2) {
      links[i - 2].className = "inactive";
    }
    links[i + 1].className = "inactive";
    myform.radArray[i].checked = true;
  });
}
