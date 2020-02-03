let controls = document.querySelectorAll(".controls");
for (let i = 0; i < controls.length; i++) {
  controls[i].style.display = "inline-block";
}

let slides = document.querySelectorAll("#slides .slide");
let currentSlide = 0;
let rads = document.getElementsByName("radbut");
let myform = document.getElementById("myDiv");
let links = document.getElementsByTagName("a");

function nextSlide() {
  if (currentSlide === 2) {
    links[2].className = "inactive";
  }
  goToSlide(currentSlide + 1);
  console.log(currentSlide);
  rads[currentSlide].checked = true;
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
  rads[m].checked = true;
  links[m].className = "active";
  links[m + 1].className = "inactive";
}

function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
}

let next = document.getElementById("next");
let previous = document.getElementById("previous");

next.onclick = function() {
  nextSlide();
};
previous.onclick = function() {
  previousSlide();
};

let radio1 = document.getElementById("point1");
let radio2 = document.getElementById("point2");
let radio3 = document.getElementById("point3");
radio1.addEventListener("click", function(event) {
  goToSlide(1);
  link1.className = "active";
  link2.className = "inactive";
  link3.className = "inactive";
});

radio2.addEventListener("click", function(event) {
  goToSlide(2);
  link2.className = "active";
  link1.className = "inactive";
  link3.className = "inactive";
});

radio3.addEventListener("click", function(event) {
  goToSlide(3);
  link3.className = "active";
  link2.className = "inactive";
  link1.className = "inactive";
});

let link1 = document.getElementById("link1");
let link2 = document.getElementById("link2");
let link3 = document.getElementById("link3");

link1.addEventListener("click", function(event) {
  goToSlide(1);
  this.className = "active";
  link2.className = "inactive";
  link3.className = "inactive";
  myform.point1.checked = true;
});

link2.addEventListener("click", function(event) {
  goToSlide(2);
  this.className = "active";
  link1.className = "inactive";
  link3.className = "inactive";
  myform.point2.checked = true;
});

link3.addEventListener("click", function(event) {
  goToSlide(3);
  this.className = "active";
  link1.className = "inactive";
  link2.className = "inactive";
  myform.point3.checked = true;
});
