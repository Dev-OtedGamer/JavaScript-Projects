function Ride_Function() {
    // A function for checking the height of riders for a ride. 
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short ":"You are tall enough ";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride";    
}

function Vote_Function() {
    // A function for checking the age for voters to leagly vote.
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are to young to vote ":"You are of legal age";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

// A function to create new objects about people and the cars they drive.
// This is the object constructor 
function Vehicle(Make, Model, Year, Color) {
    //"this" keyword works as a placeholder of undetermined value till the object is created 
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}// the "new" keyword is used to create the object from the vehicle function
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Car_Function() {
    //This displays the newly created objects from function vehicle
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Emily drives a " + Emily.Vehicle_Color + "-colored " + Emily.Vehicle_Model + 
    " manufactured in " + Emily.Vehicle_Year + "<br><br>" +
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year; 
}
// this funcion creates new objects about people, where they live, age, identifying features(Hieght, Wieght Eye Color)
// This is the object constructor
function Person(Age, EyeColor, Height, Weight, City, State) {
    //"this" keyword works as a placeholder of undetermined value till the object is created 
    this.Person_Age = Age;
    this.Person_EyeColor = EyeColor;
    this.Person_Height = Height;
    this.Person_Weight = Weight;
    this.Person_City = City;
    this.Person_State = State;
}
// the "new" keyword is used to create the object from the Person function
var Jill = new Person(24, "Blue",64 + "inches", 105 + "lbs", "Portland", "Oregon");
var James = new Person(33, "Green", 68 + " inches ", 187 + "lbs", "Vancouver", "Washington");
var Jane = new Person(28, "Brown", 57 + " inches ", 95 + "lbs", "Grants Pass", "Oregon" );
function Person_Form_Function() {
    //This displays the newly created objects from function Person
    document.getElementById("New_and_This").innerHTML =
    "Jill is " + Jill.Person_Age + "years old. She lives in, "  + Jill.Person_City + " " +
    Jill.Person_State + ". Her eye color is" + Jill.Person_EyeColor + "<br><br>" +
    "James is " + James.Person_Age + " years old. He is " + James.Person_Height + " tall, and weights " +
    James.Person_Weight + " James lives in " + James.Person_City +  " " + James.Person_State;
}
//Reserved Keyword Challenge
var Array = [Boolean,];

document.write(Array.join(", "));

// Function to display the var Boolean using innerHTML
// This is the Object Constructor function
function displayBoolean() {
    document.getElementById("Boolean").innerHTML = Array.join(", ");
}

// Function for counting or adding intervals of any amount
//this is the main function
function count_function() {
    // This is the part that displays the nested function 
    document.getElementById("Nested_function").innerHTML = Count();

    // this is the nested or sub function
    // It handels all the math part
    function Count() {
        var Starting_point = 5;
        function Plus_Five() {
            Starting_point += 5;
        }
        Plus_Five();
    return Starting_point;
    } 
}

