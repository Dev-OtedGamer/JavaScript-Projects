function Add_Counter() {
    // Generates two random numbers between 0 and 1000
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    // Calculates their sum
    var addition = num1 + num2;
    // Displays the result of adding two random numbers
    document.getElementById("Math").innerHTML = num1 + " + " + num2 + " = " + addition;
}

function Subtraction_Function() {
    // Generates two random numbers between 0 and 1000
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    // Calculates their sum
    var subtraction = num1 - num2;
    // Displays the result of subtracting two random numbers 
    document.getElementById("Math").innerHTML = num1 + " - " + num2 + " = " + subtraction;
}

function Multiply_Function() {
    // Generates two random numbers between 0 and 1000
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    // Calculates their sum
    var simple_Math = num1 * num2;
    // Display the result of multiplying two random numbers 
    document.getElementById("Math").innerHTML = num1  + " x " + num2 + " = " + simple_Math;
}

function Divide_Function() {
    // Generates two random numbers between 0 and 1000
    var num1 = Math.floor(Math.random() * 1000);
    var num2 = Math.floor(Math.random() * 1000);
    // Calculates their sum
    var simple_Math = num1 / num2;
    // Displays the result of dividing two random numbers 
    document.getElementById("Math").innerHTML = num1 + " / " + num2 + " = " + simple_Math;
}

function More_Math() {
    // Generates five random numbers between 1 and 10
    var num1 = Math.floor(Math.random() * 10) + 1;
    var num2 = Math.floor(Math.random() * 10) + 1;
    var num3 = Math.floor(Math.random() * 10) + 1;
    var num4 = Math.floor(Math.random() * 10) + 1;
    var num5 = Math.floor(Math.random() * 10) + 1;
    // Calculates their sum
    var simple_Math = (num1 + num2) * num3 / num4 -num5;
    // Displays the math problem and the result
    document.getElementById("Math").innerHTML = num1 + " plus " + num2 + " multiplied by " + num3
    + " divided by " + num4 + " and then subtracted " + num5 + " equals " + simple_Math;
} // produced "0 plus 3 multiplied by 6 divided by 0 and then subtracted 1 equals Infinity" LOL!
// So I add + 1 so the random number is 1-10

function modulus_Operator() {
    // Generates two random numbers between 0 and 100
    var num1 = Math.floor(Math.random() * 100);
    var num2 = Math.floor(Math.random() * 100);
    // Calculates their sum
    var simple_Math = num1 % num2;
    // Displays the math problem and the result
    document.getElementById("Math").innerHTML = "When you divide " + num1 + " by " + num2+ 
     " you " + "get a reminder of: " + simple_Math;
}

function negative_Function() {
    // Generates a random number between 1 and 10
    var num1 = Math.floor(Math.random() * 10) + 1;
    // Displays the random number as a negative number
    document.getElementById("Math").innerHTML = -num1;
}

function Adding_Increment() {
    // Generates a random number between 1 and 10
    var num1 = Math.floor(Math.random() * 10) + 1;
    // Sets num1 as x
    var X = num1;
    // Adds incerment 1
    X++;
    // Displays the random number adding incerment by 1
    document.getElementById("Math").innerHTML = num1 + " + " + " 1 " + " = " + X;
}

function Subtracting_Increment() {
    // Generates five random numbers between 1.0 and 10.0
    var num1 = Math.random() * 10 + 1;
    // Sets num1 as x
    var x = num1;
    // Subtracts incerment 1
    x--;
    // Displays the random number subtracting incerment by 1
    document.getElementById("Math").innerHTML = num1 + " - " + " 1 " + " = " + x;
}

function Random_Function() {
   // Generates a random numbers between 1 and 10000
    var num1 = Math.floor(Math.random() * 10000) + 1;
    // Displays the math problem and the result
    document.getElementById("Math").innerHTML = "Here is a Random Number:" + num1;
}
//Genarates a random number between 0 and 100 in alert window
window.alert(Math.random() * 100);