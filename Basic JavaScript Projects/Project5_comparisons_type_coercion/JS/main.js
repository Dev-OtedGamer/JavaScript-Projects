document.write("'John' is " + typeof "John" + "<br><br>" +
"42 is " + typeof 42 + "<br><br>" +
"false is " + typeof false + "<br><br>" +
"new Map() is " + typeof new Map() + "<br><br>" +
"1234n is " + typeof 1234n + "<br><br>" +
"Symbol() is " + typeof Symbol() + "<br><br>" +
"function () {} is " + typeof function () {} + "<br><br>" +
"x is " + typeof x + "<br><br>" + "Number(true) is " + Number(true)).innerHTML;
// here I used all the different typeof outputs I could find and used
//an example for each of them. 
// I then turned "true" into a number using coercion

function my_Function() {
    //using isNaN (Not a Number) function to output true and false
    document.getElementById("Test").innerHTML = "0/0" + " = " + 0/0 + "<br><br>" +
    "('Hello')" + " Not a number! " + " = " + isNaN('This is a string') + "<br><br>"
    + "(2896)" + " Not a number! " + " = " + isNaN(2896);
}

function my2nd_Function() {
    // showing infinity and -infinity
    document.getElementById("Test2").innerHTML = "4E310" + " = " + (4E310) + "<br><br>"
    + "-6E310" + " = " + (-6E310);
}

function my3nd_Function() {
    // Showing many ways to show boolean
    document.getElementById("Test3").innerHTML = "(26 > 24)" + " = " + (26 > 24) + "<br><br>"
    + "(26 < 24)" + " = " + (26 < 24) + "<br><br>" +
    "( 2 < 6 = 2 < 4 )" + " = " + (2 < 6 & 2 < 4) + "<br><br>" +
    "( 2 > 6 = 2 > 4 )" + " = " + (2 > 6 & 2 > 4) + "<br><br>" +
    "( 2 > 6 = 2 < 4 )" + " = " + (2 > 6 & 2 < 4);
}

function myConsole_Function() {
    // Log a message to the console
    console.log("Hello!");

    console.log(6 > 4);

    //used to remember to open console
    document.getElementById("Test4").innerHTML = "Check the console F12!";
}

function equal2_Function() {
    // using double equal signs to show comparison
    document.getElementById("Test5").innerHTML = 
    "(20 == 10 + 10)" + " = " +(20 == 10 + 10) + "<br><br>" + //True
    "30 == 10 + 15" + " = " + (30 == 10 + 15); //False

}

function equal3_Function() {
    // using triple equal signs to show that a comparison should be made
    E = 15;
    Q = 15;
    U = "Test";
    A = "Test";
    L = "15";
    document.getElementById("Test6").innerHTML =  
    "(15 === 15)" + " = " + (15 === 15) + "<br><br>" + // Same type and value
    "(15 === '15')" + " = " + (15 === "15") + "<br><br>" + // Same value different types
    "('Test' === 'Test')" + " = " + ('Test' === 'Test') + "<br><br>" + // Same Type and value
    "('Test' === 15)" + " = " + ('Test' === 15) + "<br><br>" + // Different type and different value
    "('Test' === '15')" + " = " + ('Test' === '15'); //Same type different values

}

function bool_Function() {
    // using "And" and "Or" Logic
    document.getElementById("Test7").innerHTML =
    //True
    "( 12 > 6 && 1 < 2)" + " = " + (12 > 6 && 1 < 2) + "<br><br>" +
    //False
    "( 12 < 6 && 1 < 2)" + " = " + (12 < 6 && 1 < 2) + "<br><br>" +
    //False
    "( 12 > 6 && 1 > 2)" + " = " + (12 > 6 && 1 > 2) + "<br><br>" +
    "<br><br>" + 
    //True
    "(12 > 6 || 1 < 2)" + " = " + (12 > 6 || 1 < 2) + "<br><br>" +
    //True
    "(12 < 6 || 1 < 2)" + " = " + (12 < 6 || 1 < 2) + "<br><br>" +
    //True
    "(12 > 6 || 1 > 2)" + " = " + (12 > 6 || 1 >2) + "<br><br>" +
    //False
    "(12 < 6 || 1 > 2)" + " = " + (12 < 6 || 1 > 2) + "<br><br>" +
    "<br><br>" + 
    //True False
    "(12 > 6 ! 1 < 2)" + " = " + (12 > 6) + ! + (1 < 2) + "<br><br>";
}

function not_Function() {
    // Using Not Logic
    document.getElementById("Not").innerHTML =
    //False
    "!(40 > 20)" + " = " + !(40 > 20) + "<br><br>" +
    //True
    "!(40 < 20)" + " = " + !(40 < 20);    
}