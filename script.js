var button = document.getElementById("toggleButton");
var div = document.getElementById("id1");

// Event listener to toggle id1 between what it currently is and the other style
button.addEventListener("click", function() {
    div.classList.toggle("crazyStyle");
});

// Function to validate the contact form
function validateForm(event) {
  event.preventDefault(); // Prevent form from submitting

  console.log('Form submit event triggered');

  // Get form inputs
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var response = document.getElementById('response');

  console.log('Form values:', { name, email, message });

  // Check if inputs are empty
  if (name === '' || message === '') {
    response.innerHTML = '<p class="error">Please fill in all fields</p>';
    return;
  }

  // Validate email format
  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    response.innerHTML = '<p class="error">Please enter a valid email address</p>';
    return;
  }

  // If all validations pass, submit the form
  var formData = new FormData(document.getElementById('contactForm'));
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://postman-echo.com/post', true);
  xhr.onload = function () {
    console.log('XHR status:', xhr.status);
    console.log('XHR response:', xhr.responseText);

    if (xhr.status == 200) {
      response.textContent = 'Form submitted successfully';
      document.getElementById('contactForm').reset(); // Clear form fields
      response.textContent += '\nResponse from server: ' + xhr.responseText; // Display response from server
    } else {
      response.textContent = 'Error submitting form. Please try again later.';
    }
  };
  xhr.send(formData);
}

// Add event listener to the form submit button
document.getElementById('contactForm').addEventListener('submit', validateForm);

console.log('Event listener added to the form');
