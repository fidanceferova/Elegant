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