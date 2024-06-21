// Function to open the popup form by changing its display style to "block"
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to close the popup form by changing its display style to "none"
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

 // double click
function randomColorBg() {
    // Generate a random color in hexadecimal format
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        
     // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

// Waits for the DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    // Adds a slight delay before adding the 'loaded' class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100); // 100ms delay

    // Adds event listener for phone form submission
    document.getElementById('phoneForm').addEventListener('submit', function(event) {
        // Prevents the default form submission behavior
        event.preventDefault();


        

        // Gets the phone number input value
        const phoneInput = document.getElementById('phone');
        const phoneNumber = phoneInput.value;

        // Basic validation check: ensures the phone number is not empty and is a valid number
        if (!phoneNumber || isNaN(phoneNumber) || phoneNumber.length < 10) {
            alert('Please enter a valid phone number with at least 10 digits.');
        } else {
            alert('Phone number is valid! Form submitted.');
            // If valid, you can submit the form or perform additional actions
            // Here the value is reset
            phoneInput.value = '';
        }
    });

    // Adds event listener for contact form submission
    document.getElementById('contactFormContainer').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Contact form submitted!');
        document.getElementById('contactForm').style.display = 'none';
    });

    // Adds event listener for login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login form submitted!');
        document.getElementById('myForm').style.display = 'none';
    });

    // Smooth scroll behavior for anchor links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Get target ID excluding the '#'
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 4000);

// Function to open the contact form popup
function openContactForm() {
    document.getElementById("contactForm").style.display = "block";
}

// Function to close the contact form popup
function closeContactForm() {
    document.getElementById("contactForm").style.display = "none";
}

