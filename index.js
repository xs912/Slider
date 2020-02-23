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

const entities = [
  {
    city: "Rostov-on-Don",
    center: "LCD admiral",
    time: "3.5 months",
    area: "81 m2"
  },
  {
    city: "Sochi",
    center: "Thieves",
    time: "4 months",
    area: "105 m2"
  },
  {
    city: "Rostov-on-Don",
    center: "Patriotic",
    time: "3 months",
    area: "93 m2"
  }
];

const city = document.querySelector(".city");
const time = document.querySelector(".time");
const center = document.querySelector(".center");
const area = document.querySelector(".area");

const setEntity = index => {
  city.innerText = entities[index].city;
  center.innerText = entities[index].center;
  time.innerText = entities[index].time;
  area.innerText = entities[index].area;
};

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
  goToSlide(m);
  radArray[m].checked = true;
  links[m].className = "active";
  links[m + 1].className = "inactive";
}
function goToSlide(n) {
  slides[currentSlide].className = "slide";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].className = "slide showing";
  setEntity(currentSlide);
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
    radArray[i].checked = true;
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
