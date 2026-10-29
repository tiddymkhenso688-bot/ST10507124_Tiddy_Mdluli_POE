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
