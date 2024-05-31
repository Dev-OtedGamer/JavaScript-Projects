var G = 13;
function Add_numbers_1() {
    var H = 23;
    document.getElementById("Glocal").innerHTML = (
        "(20 * G )" + " = "  + 20 +  " * " + G + " = " + (20 * G) + "<br>" +
          "H + G" + " = " + H + " + " + G + " = " +  (H + G)
    );

}
// Here the local varaible from the function above triggers the 
// console error. 
function Error_Function() {
    console.log (
        "G + 100" + " = " + G + " + " + 100 + " = " + (G + 100) + "<br>"
        + "G * H" + " = " + G + " * " + H + " = " + (G * H) 
    );
}

//Added else statment to the get_Date function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    } else {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    };
}

// "if" statment used to change the background color depending on a random number
// if the number is greater then 5 the screen is red "else" it is blue
function Color_Change_Function() {
    var num1 = Math.floor(Math.random() * 10) + 1; // Random nuber selected
    var backgroundColor; // sets a variable for the backgroundColor
    if (num1 < 6) { // checks math
        backgroundColor = "red"; // changes background to red
    } else { // or
        backgroundColor = "blue"; // changes background to blue
    };

    document.body.style.backgroundColor = backgroundColor; // preforms the color change

}
// Function to check age if able to vote
function Age_function() {
    var Age = document.getElementById("Age").value;// Sets Age varaible
    var Vote; // Sets Vote varaible
    if (Age >= 18) { // Checks math for age greater then 18
        Vote = "You are old enough to vote!"; // Display if age is graeter then 18
    }
    else { // Or
        Vote = "You are not old enough to vote!"; // Displays if age is less then 18
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; // Preforms the "Vote" display message
}

// Function for checking age for Car Rental
function Rental_function() {
    var Range = document.getElementById("Range").value; // Sets "Range" varaible for Age
    var Rental; // sets varaible for rental
    if (Range >= 25) { // Checks math for age for the car rental
        Rental = "You are old enough to rent a car."; // Displays if 25 or older
    } else { //Or
        Rental = "You are not old enough to rent a car"; // Displays if less then 25
    }
    document.getElementById("Car_Rental_Age").innerHTML = Rental; // Preforms the Retal display message
}

// Function for checking time of day
function Time_function() {
    var Time = new Date().getHours(); // Sets varaible for "Time"
    var Reply; // Sets varaible for "Reply"
    if (Time < 12 == Time > 0) { // checks math from midnight to noon
        Reply = "It is morning time!"; // Message for the morning time
    }
    else if (Time >= 12 == Time < 18) { // Checks math for noon to 6pm
        Reply = "It is afternoon."; // Message for the middle of the day
    }
    else { // Or
        Reply = "It is evening time."; // Message for after 6pm evening time
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // Preforms the "Reply" message
}