// Function for using the "concat" method (combining parts)
function my_sentence() {
    // A-E sets varaibles to combine
    var part_A = "This is";
    var part_B = " my Concatenate";
    var part_C = " sentence that";
    var part_D = " I made with";
    var part_E = " several strings.";
    // sets a varaible & logic for the concat method(combines the parts)
    var Combined_parts = part_A.concat(part_B, part_C, part_D, part_E);
    //Displays the combined parts
    document.getElementById("My_Concatenate").innerHTML = Combined_parts;
}
// Function for Slice Method
function Cut_Function() {
    //Sets a string sentence varaible to slice
    var Sentence = "Here is my example of the \"Slice Method\".";
    // sets a varaible & logic for the slice method
    var Section = Sentence.slice(26,42);
    // Displays the sliced string section
    document.getElementById("Cut").innerHTML = Section;
}
// Function for changing a string to all caps using toUpperCase method
function Caps_Function() {
    // Sets a string varaible to be converted to all caps
    var Caps_Text = "Coding is fun!";
    // the logic that changes the lower case letters to all caps.
    let result = Caps_Text.toUpperCase();
    // Displays the string in all caps
    document.getElementById("Caps").innerHTML = result; 

}
// Function for Search Method
function Search_Function() {
    // Sets a string varaible to search through
    var Search_Text = "Looking for the egg!";
     // setting search parameters 
    let Choice_word = Search_Text.search("egg");
    // Displays the the position of the Choice_word
    document.getElementById("Looking").innerHTML = Choice_word; 
}

// Function to show the "toString()" method
function string_Method() {
    // Sets a number varaible to change to string
    var X = 42;
    // Displays the number as a string
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Function to show the "toPrecision()" method
function precision_Method() {
    // Sets the number varaible to be rounded to the specified length
    var X = 86439.0064283715590;
    // Displays the varabile at the specified length chosen
    document.getElementById("Precision").innerHTML = X.toPrecision(12);
}

// Function to show the "toFixed()" method
function fixed_Decimals() {
    // Sets the varaible to be rounded to a fixed decimal
    var X = 3.8573;
    // Displays the varaible with the fixed decimal place shown
    document.getElementById("Fixed_decimals").innerHTML = X.toFixed(12);
}

//Function to show the "valueOf" method
function valueOf_Function() {
    // Sets the string varaible to have the primitive value of the string object returend
    var X = "Learning JavaScript Functions";
    // Displays the primitive value of the string object
    document.getElementById("String_valueOf").innerHTML = X.valueOf();
}