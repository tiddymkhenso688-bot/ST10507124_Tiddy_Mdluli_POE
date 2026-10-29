document.getElementById('myForm').addEventListener("submit", function(event) {
  event.preventDefault();

  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();
  const email = document.getElementById('email').value.trim();
 

  // Clear old errors
  document.getElementById('fnameError').innerHTML = "";
  document.getElementById('lnameError').innerHTML = "";
  document.getElementById('emailError').innerHTML = "";
 

  // Name validation
  if (firstName === "") {
    document.getElementById('fnameError').innerHTML = "Please enter your first name";
    return;
  }
  if (lastName === "") {
    document.getElementById('lnameError').innerHTML = "Please enter your last name";
    return;
  }

  // Email validation: must contain "@" and "."
  const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').innerHTML = "Please enter a valid email address";
    return;
  }

 

  document.getElementById('message').innerHTML = "Form submitted successfully!";
});

document.getElementById("amount").addEventListener("input", function(){
  document.getElementById("amountDisplay").textContent = "R" + this.value;
});

// 1. VALIDATE DONATION - This is the JavaScript for WEDE5020
function validateDonate(){
  let email = document.getElementById("email").value;
  let amount = document.getElementById("amount").value;
  let emailInput = document.getElementById("email");
  let emailError = document.getElementById("emailError");
  let isValid = true;

  // Check email
  if(email === "" || !email.includes("@") || !email.includes(".")){
    emailInput.classList.add("error");
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailInput.classList.remove("error");
    emailError.style.display = "none";
  }

  // Check amount
  if(amount === "" || amount < 10){
    alert("Please enter at least R10");
    isValid = false;
  }

  // If valid, show Thank You modal
  if(isValid){
    document.getElementById("thankText").innerHTML = 
      `Your R${amount} can provide a care bag<br>Your donation helps us provide care packs to children and families fighting childhood cancer.`;
    document.getElementById("thankYouModal").classList.add("show");
  }
}

function closeModal(){
  document.getElementById("thankYouModal").classList.remove("show");
  // Clear form
  document.getElementById("email").value = "";
  document.getElementById("amount").value = "150";
  document.getElementById("amountDisplay").textContent = "R150";
}
