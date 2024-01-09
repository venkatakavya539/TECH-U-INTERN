function validateLoginForm() {
    
    resetErrors();
  
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    
    if (username === '') {
      displayError('loginError', 'Username/Email cannot be empty.');
      return;
    }
  
   
    if (password === '') {
      displayError('loginError', 'Password cannot be empty.');
      return;
    }
  
    
    alert('Login successful!');
  }
  
  function validateSignupForm() {
    
    resetErrors();
  
    const signupUsername = document.getElementById('signupUsername').value.trim();
    const signupEmail = document.getElementById('signupEmail').value.trim();
    const signupPassword = document.getElementById('signupPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
  
  
    if (signupUsername === '') {
      displayError('signupError', 'Username cannot be empty.');
      return;
    }
  
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      displayError('signupError', 'Invalid email address.');
      return;
    }
  
   
    if (signupPassword === '') {
      displayError('signupError', 'Password cannot be empty.');
      return;
    }
  
   
    if (signupPassword !== confirmPassword) {
      displayError('signupError', 'Passwords do not match.');
      return;
    }
  
    
    alert('Signup successful!');
  }
  
  function resetErrors() {
    
    document.getElementById('loginError').innerText = '';
    document.getElementById('signupError').innerText = '';
  
    
  }
  
  function displayError(elementId, errorMessage) {
    
    document.getElementById(elementId).innerText = errorMessage;
  }
  