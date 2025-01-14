let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let back = document.getElementById("back");
let next = document.getElementById("next");
let sliderArea = document.getElementById("slider");

let active = 0;
let lengthItems = items.length - 1;

function reloadSlider() {
   let checkLeft = items[active].offsetLeft; 
   list.style.left = -checkLeft + "px";

   let lastActiveDot = document.querySelector('.slider .dots li.active');
   lastActiveDot.classList.remove("active");
   dots[active].classList.add("active");
}

next.addEventListener('click', function () {
   if (active + 1 > lengthItems) {
      active = 0;
   } else {
      active += 1;
   }
   reloadSlider();
});

back.addEventListener('click', function() {
   if (active - 1 < 0) {
      active = lengthItems;
   } else {
      active -= 1;
   }
   reloadSlider();
});

// Carousel Section
let heart = document.getElementsByClassName("heart")
let add_cart = document.getElementsByClassName("add_cart")

function toogleEventVisible(i) {
   heart[i].classList.toggle("visibleHeart")
   add_cart[i].classList.toggle("visibleButton")

}

// Favorite Section
let red_heart = document.getElementsByClassName("red_heart")

function red(i) {
   heart[i].classList.toggle("red_heart")
}




let time = setInterval(() => next.click(), 5000);

sliderArea.addEventListener("mouseover", function(){
   clearInterval(time);
});

sliderArea.addEventListener("mouseleave", function(){ 
   time = setInterval(() => next.click(), 5000);
});
reloadSlider()