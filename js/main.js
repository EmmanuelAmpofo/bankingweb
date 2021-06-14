var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("sliders");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); 
}

function showDeposit(){
  let textname = document.getElementById("name").value
  let textpassword = document.getElementById("password").value

  if (textname === ""){
    window.alert("Enter your name")
  }
  else if( textpassword === ""){
    window.alert("Enter your password")
  }
  else{
    document.querySelector(".deposit_login").style.display = "none"
    document.querySelector(".display_deposit").style.display = "block"
  }

}

function addDeposit(){
  let amount = document.getElementById("deposit_amount").value

  document.getElementById("display").innerHTML = "GHc "+amount
  document.getElementById("deposit_amount").value = ""

}