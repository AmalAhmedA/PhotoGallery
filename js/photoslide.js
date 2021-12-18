
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}




// execute the function for responsiveness
function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navtop") {
    x.className += " responsive";
  } else {
    x.className = "navtop";
  }
}

//Email contact form validation 
function validateEmail(emailId)
{
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
if(emailId.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("Invalid email address.");
document.form1.text1.focus();
return false;
}
} 


function check() {
      var email = document.getElementById('email_addr');
      var email2 = document.getElementById('email_repeat');
      if ( email.value != email2.value) {
        alert("The two emails must match!!");
      }
}

function validate(){
  validateEmail(document.form1.email);
  check();
}