function validatePassword() {
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('error-message');
  
    // Check password length
    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters long';
      return;
    }
  
    // Check for at least one uppercase letter
    let uppercaseRegex = /[A-Z]/g;
    if (!password.match(uppercaseRegex)) {
      errorMessage.textContent = 'Password must contain at least one uppercase letter';
      return;
    }
  
    // Check for at least one lowercase letter
    let lowercaseRegex = /[a-z]/g;
    if (!password.match(lowercaseRegex)) {
      errorMessage.textContent = 'Password must contain at least one lowercase letter';
      return;
    }
  
    // Check for at least one number
    let numberRegex = /[0-9]/g;
    if (!password.match(numberRegex)) {
      errorMessage.textContent = 'Password must contain at least one number';
      return;
    }
  
    // Check for at least one special character
    let specialRegex = /[!@#$%^&*(),.?":{}|<>]/g;
    if (!password.match(specialRegex)) {
      errorMessage.textContent = 'Password must contain at least one special character';
      return;
    }
  
    // If password meets all criteria, clear error message
    errorMessage.textContent = '';
  }
  