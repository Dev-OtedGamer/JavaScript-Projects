function Name_Function() { //function name
    var nam = "My name is Josh!"; // sets varaible
    var fun = "This is my first JavaScript function!";// sets varaible
    document.getElementById("Welcome").innerHTML = nam + fun; // uses get getElementById to call function
} // this is a function that sets 2 varaibles which are called with a button click.

function myFunction() { //function name
    var heading = "I am learning"; // sets varaible
    heading += " a lot from this bootcamp!"; // uses += to combine string
    document.getElementById("Concatenate").innerHTML = heading;// uses get getElementById to call function
} // this is a function that uses the += to concatenate a string and called on a heading click