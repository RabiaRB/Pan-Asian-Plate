
const form = document.querySelector('.inputForm');
form.addEventListener('submit', function(event) {
   event.preventDefault();
   const emailInput = document.querySelector('.emailInput');
   const email = emailInput.value.trim();

   if (email === '') {
      alert('Please enter your email.');
      emailInput.focus();
   } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
   } else {
      alert('Thank you for subscribing with email: ' + email);
      form.reset();
   }
});

function isValidEmail(email) {
   // Regular expression pattern for validating email addresses
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailPattern.test(email);
}