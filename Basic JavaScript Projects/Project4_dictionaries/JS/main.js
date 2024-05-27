function my_Dictionary() { // Function name
    var Car1 = { // Sets the name of the Dictonary to a varaible
        Make:"Mercedes-Benz", // Key-value pair
        Model:"C300", // Key-value pair
        Year:2019, // Key-value pair
        Color:"Black", // Key-value pair
        Sound:"VROOM!", // Key-value pair
        Sound:"RERERE!" // Key-value pair, Doubled up on Key-value to see what would happen,
        // From what I can tell the second one wrote over the first one.
    };
    delete Car1.Sound; // Deleted a Key-value pair Car1.Sound
    document.getElementById("Dictionary").innerHTML = Car1.Sound; // calls the function in the html.
}