//let slideIndex = 1;
//showSlides(slideIndex);

//Next/previous controls
//function plusSlides(n) {
//    showSlides(slideIndex += n);
//}

// Thumbnail image controls
//function currentSlide(n) {
 //   showSlides(slideIndex = n);
//}

//function showSlides(n) {
   // let i;
    //let slides = document.getElementsByClassName("mySlides fade");
    //let dots = document.getElementsByClassName("dot");
    //if (n > slides.length) {slideIndex = 1}
    //if (n < 1) {slideIndex = slides.length}
    //for (i = 0; i < slides.length; i++) {
      //  slides[i].style.display = "none";
   // }
   // for (i = 0; i < dots.length; i++) {
   //     dots[i].className = dots[i].className.replace(" active", "");
   // }
   // slides[slideIndex-1].style.display = "block";
  //  dots[slideIndex-1].className += " active";
//}


// Sets a varaible before the loop
let slideIndex = 0;
showSlides();
// Function slide show automatic
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
    //(i = 0)checks the varaible before the loop starts/
    //(i < slides.length) defines the condition for the loop to run
    //(i++) incresases a value each time the code block in the loop has been executed
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}