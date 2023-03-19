const form = document.getElementById("login-form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (!emailInput.value.includes("@") || passwordInput.value.length < 8) {
    message.textContent = "Invalid email or password!";
    message.style.color = "red";
  } else {
    message.textContent = "Valid email and password!";
    message.style.color = "green";
  }
});
