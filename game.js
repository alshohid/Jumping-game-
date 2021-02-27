var score = 0;
var cross = true;

var gamestarter = document.querySelector(".game-starter");
var mycloud = document.querySelector(".cloud");
var cityInner = document.querySelector(".city-inner");
var cat = document.querySelector(".cat");
let car = document.querySelector(".car");
var myaudio = document.querySelector("#my-audio");
var cataudio = document.querySelector(".cat-audio");

var second = document.querySelector("#counter").textContent;

var countdown = setInterval(function () {
  second--;
  document.querySelector("#counter").textContent = second;
  if (second <= 0) {
    clearInterval(countdown);
    cat.style.visibility = "visible";
    car.style.visibility = "visible";
    gamestarter.style.visibility = "hidden";

    mycloud.classList.add("cloudanimation");
    cityInner.classList.add("roadAnimation");
    cat.classList.add("animationcat");
   



function changedImg(){

  var photos=["images/dog.gif","images/cat2.gif","images/horin.gif",];

const count=Math.floor(Math.random()*photos.length);
console.log("Hey i am here"+count);
cat.src=photos[count];

}


    document.addEventListener("keydown", keycontrol);

    function keycontrol(e) {
      console.log("your keycode is = " + e.keyCode);

      if (e.keyCode == 38) {
        myaudio.play();

        car.classList.add("animationCar");

        setTimeout(function () {
          car.classList.remove("animationCar");
        }, 900);
      }
      if (e.keyCode == 39) {
        let car = document.querySelector(".car");
        let carxx = parseInt(
          window.getComputedStyle(car, null).getPropertyValue("left")
        );
        car.style.left = carxx + 112 + "px";
      }
      if (e.keyCode == 37) {
        let car = document.querySelector(".car");
        let carxx = parseInt(
          window.getComputedStyle(car, null).getPropertyValue("left")
        );
        console.log(carxx);
        car.style.left = carxx - 112 + "px";
      }
    }
    /*Collission detection part*/
    setInterval(() => {
      var car = document.querySelector(".car");

      var gameOver = document.querySelector(".game-over ");
      var body = document.querySelector("body");


    


      let carX = parseInt(
        window.getComputedStyle(car, null).getPropertyValue("left")
      );
      let carY = parseInt(
        window.getComputedStyle(car, null).getPropertyValue("top")
      );

      let catX = parseInt(
        window.getComputedStyle(cat, null).getPropertyValue("left")
      );
      let catY = parseInt(
        window.getComputedStyle(cat, null).getPropertyValue("top")
      );

      let offsetX = Math.abs(carX - catX);
      let offsetY = Math.abs(carY - catY);
      console.log(offsetX, offsetY);
      //cataudio.play();

      if (offsetX < 113 && offsetY < 52) {
        gameOver.style.visibility = "visible";
        cat.classList.remove("animationcat");
      
      
        mycloud.classList.remove("cloudanimation");
        // body.classList.add("opacity");
        car.style.visibility = "hidden";
        cat.style.visibility = "hidden";
        cityInner.classList.remove("roadAnimation");
        cat.classList.remove("animationcat");
      }
      
      else if (offsetX < 145 && cross) {
        setInterval(changedImg(),7000);
        score++;
        update(score);
        cross = false;
        setTimeout(function () {
          cross = true;
        }, 1000);
      }
    }, 10);
  }
}, 1000);

/*for score -----------------*/
function update(score) {
  document.querySelector("#score h1").innerHTML = "Your Score : " + score;
}
