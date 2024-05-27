function Name_Function() { //function name
    var nam = "My name is Josh!"; // sets variable
    var fun = "This is my first JavaScript function!";// sets variable
    document.getElementById("Welcome").innerHTML = nam + fun; // uses get getElementById to call function
} // this is a function that sets 2 variables which are called with a button click.

function myFunction() { //function name
    var heading = "I am learning"; // sets variable
    heading += " a lot from this bootcamp!"; // uses += to combine string
    document.getElementById("Concatenate").innerHTML = heading;// uses get getElementById to call function
} // this is a function that uses the += to concatenate a string and called on a heading click

document.addEventListener("DOMContentLoaded", function() {
    // Initialize display fields
    document.getElementById('displayFirstName').textContent = 'Not Set';
    document.getElementById('displayLastName').textContent = 'Not Set';
    document.getElementById('displayEmail').textContent = 'Not Set';
    document.getElementById('displayPhoneNumber').textContent = 'Not Set';
});

function updateUserInfo() {
    // Get user input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Update display with user input
    document.getElementById('displayFirstName').textContent = firstName;
    document.getElementById('displayLastName').textContent = lastName;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayPhoneNumber').textContent = phoneNumber;

    // Optionally, clear form fields after submission
    document.getElementById('userForm').reset();
}