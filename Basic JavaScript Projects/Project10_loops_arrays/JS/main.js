// Function for a loop that counts down from 20.
function call_Loop() {
    // Sets a  value for the varaible Digit
    var Digit = "";
    // Sets a varaible for loop to start at
    var X = 20;
    // Defines what the loop does(while X is larger than 0 do -1 till X = 0)
    while ( X > 0) {
        Digit += "<br>" + X;
        X--;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Function for counting the string length
function string_Length() {
    // Sets string as varaible to count length
    var X1 = "Here is my String Length challange.";
    // Sets varaible for the count length
    var length = X1.length; 
    // Displays the count length
    document.getElementById("StringLength").innerHTML = length;
}

    // Sets varaibles for the loop
    // 1st varaible is an array of music instruments
    // 2nd varaible sets a value for "Content"
    var Instruments = ["Bass", "Drums", "Flute", "Guitar", "Piano", "Saxophone", "Trumpet", "Violin"];
    var Content = "";
//Function for the "for Loop"
    function for_Loop() {
        // Sets a varaible Y with a value of 0, and checks Y ("0") 
        // against the index of Insturment length,  also adds 1 to Y ("0") value evertime loop runs.
        for (Y = 0; Y < Instruments.length; Y++) {
            // Tells the Display which Instrument to display
        Content += Instruments[Y] + "<br>";
        }
        // Displays the instrument name
        document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Function for creating an array
function array_Function() {
    //Sets the varaible Pets array 
    var Pets = [];
    // 0-5 lists the objects in the array
    Pets[0] = "Dog";
    Pets[1] = "Cat";
    Pets[2] = "Bird";
    Pets[3] = "Fish";
    Pets[4] = "Rabbit";
    Pets[5] = "Horse";
    // Displays a string and a index from the array
    document.getElementById("Array").innerHTML = "My favorite family pet is a " +
    Pets[0] + ".";
}

// Function for setting variable identifiers that cannot be reassigned
// the value assigned by the const keyword is not immutable (it can change)
function constant_Function() {
    const Car_Info = {Make:"Chevrolet", Model:"Corvette Stingray", Year:"1963", Color:"blue"}
    Car_Info.Color = "black";
    Car_Info.Price = "$100,100.00";
    document.getElementById("Constant").innerHTML = "The price of a " +
    Car_Info.Year + " " + Car_Info.Model + " in great condition is "
    + Car_Info.Price + ". It may not be " + Car_Info.Color + " though." ;
}

// Function to show the example of "let" variable
// Global variables
var X = 53;
let X1 = 52;

function keyword_Let() {
    // Local variables
    // Local variables
    var localX = 35;
    let localX1 = 25;
    // Displaying both global and local variables
    document.getElementById("let_Keyword").innerHTML = 
        "Global X + X1: " + (X + X1) + "<br>" +
        "Local X + X1: " + (localX + localX1) +
        "<br>" + myReturn_function((X + X1));
}

// Simple return function incorporated and displayed W/
//the Global and Local varaible button
function myReturn_function(math) {
    return "It cant be this easy" + math ;
}

// Creating an object function
//Function for creating a dog
let Dog = {
    breed: "Pekingese",
    age: 14,
    color:"golden",
    description : function() {
        return "The dog is a " + this.age + " year old " + this.color + " " + this.breed;
    }
}
function displayDogDescription() {
    // Call the description method of the Dog object and display the result
    document.getElementById("Dog_object").innerHTML = Dog.description();
}
// Sets varaibles and values
let text = "";
let i = 0;
// Function for break
function while_Loop() {
    //Resets the values
    text = "";
    i = 0;
// while loop
while (i < 10) {
    text += i + "<br>";
    i++;
    //Break statement, breaks the loop if conditions are met.
    if (i === 7) break;
    }
    //Returns text
    return text;
}
function break_Statement() {
    // Displays the while function and the results with a break
    document.getElementById("While_Break").innerHTML = while_Loop();
}

function Continue_function() {
    //Resets the values
    text = "";
    i = 0;
// While loop and if statement
while (i < 20) {
    // If i=12 then skip and continue the count
    if (i == 12) {
        i++;
        continue;
        
    }
    // sets i to be displayed as text
    text += i + "<br>";
        i++;
    } 
    // returns text
    return text;   
}

function Continue_Statement() {
    // Displays the continue function and the results with a continue statement
    document.getElementById("While_Continue").innerHTML = Continue_function();
}