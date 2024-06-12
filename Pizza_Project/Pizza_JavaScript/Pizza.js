function getReceipt() {
    // This initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0; // Initializes the running total cost
    var sizeTotal = 0; // Initializes the total cost for the pizza size
    var sizeArray = document.getElementsByClassName("size"); // Get all elements with the class "size"
    
    // Loops through the size options to find the selected one
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value; // Gets the value of the selected size
            text1 = text1 + selectedSize + "<br>"; // Adds the selected size to the receipt text
        }
    }
    
    // Determines the price based on the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 5.99;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 7.99;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 9.99;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14.99;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16.99;
    } else if (selectedSize === "Family Pizza") {
        sizeTotal = 19.99;
    }
    
    runningTotal = sizeTotal; // Adds the size cost to the running total
    console.log(selectedSize + " = $" + sizeTotal.toFixed(2)); // Logs the selected size and its cost
    console.log("size text1: " + text1); // Logs the current state of the receipt text
    console.log("subtotal: $" + runningTotal.toFixed(2)); // Logs the current subtotal
    
    // Passes the running total and receipt text to the next function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0; // Initializes the total cost for the toppings
    var selectedTopping = []; //An array to hold selected toppings
    var toppingArray = document.getElementsByClassName("toppings"); // Gets all elements with the class "toppings"
    
    // Loops through the topping options to find the selected ones
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); // Adds the selected topping to the array
            console.log("selected topping item: (" + toppingArray[j].value + ")"); // Logs the selected topping
            text1 = text1 + toppingArray[j].value + "<br>"; // Adds the selected topping to the receipt text
        }
    }
    
    var toppingCount = selectedTopping.length; // Gets the number of selected toppings
    
    // Calculates the topping total (first topping is free)
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    
    runningTotal = (runningTotal + toppingTotal); // Adds the topping cost to the running total
    console.log("total selected topping items: " + toppingCount); // Logs the number of selected toppings
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00"); // Logs the topping calculation
    console.log("topping text1: " + text1); // Logs the current state of the receipt text
    console.log("Purchase Total: " + "$" + runningTotal.toFixed(2)); // Logs the purchase total
    
    // Displays the receipt text and total price in the HTML
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" +
        runningTotal.toFixed(2) + "</strong></h3>";
}


document.addEventListener("DOMContentLoaded", function() {
    drawPizzas(); // Call the function to draw pizzas when the document is fully loaded
});

function drawPizzas() {
    // Gets the canvas element and its context for drawing
    const canvas = document.getElementById('pizzaCanvas');
    const ctx = canvas.getContext('2d');

    // Draws the first pizza (Pepperoni)
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI, false); // Draws a circle with center (100, 100) and radius 80
    ctx.fillStyle = 'yellow'; // Sets the fill color to yellow (pizza base)
    ctx.fill(); // Fills the circle
    ctx.stroke(); // Outlines the circle

    // Generates random coordinates for 12 pepperoni toppings with padding
    ctx.fillStyle = 'red'; // Set the fill color to red (pepperoni)
    let pepperoniCoords = []; // Array to store the coordinates of the pepperoni
    for (let i = 0; i < 12; i++) {
        // Gets random coordinates for a pepperoni slice
        let { x, y } = getRandomToppingPlacement(100, 100, 70, pepperoniCoords, 20);
        pepperoniCoords.push({ x, y, radius: 10 }); // Adds the coordinates to the array
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI, false); // Draws a circle at the random coordinates
        ctx.fill(); // Fills the circle
    }

    // Draws the second pizza (Canadian Bacon and Pineapple)
    ctx.beginPath();
    ctx.arc(300, 100, 80, 0, 2 * Math.PI, false); // Draw a circle with center (300, 100) and radius 80
    ctx.fillStyle = 'yellow'; // Sets the fill color to yellow (pizza base)
    ctx.fill(); // Fills the circle
    ctx.stroke(); // Outlines the circle

    // Generates random coordinates for 7 Canadian Bacon with padding
    ctx.fillStyle = 'pink'; // Sets the fill color to pink (Canadian bacon)
    let baconCoords = []; // An array to store the coordinates of the bacon slices
    for (let i = 0; i < 7; i++) {
        // Gets random coordinates for a bacon slice
        let { x, y } = getRandomToppingPlacement(300, 100, 70, baconCoords, 30);
        baconCoords.push({ x, y, radius: 15 }); // Adds the coordinates to the array
        ctx.beginPath();
        ctx.moveTo(x, y); // Starts drawing the triangle (bacon slice)
        ctx.lineTo(x + 10, y + 20);
        ctx.lineTo(x - 10, y + 20);
        ctx.closePath();
        ctx.fill(); // Fills the triangle
    }

    // Generates random coordinates for 7 Pineapple with padding
    ctx.fillStyle = 'lightyellow'; // Sets the fill color to light yellow (pineapple)
    let pineappleCoords = baconCoords.slice(); // Starts with baconCoords to avoid overlap
    for (let i = 0; i < 7; i++) {
        // Gets random coordinates for a pineapple piece
        let { x, y } = getRandomToppingPlacement(300, 100, 70, pineappleCoords, 15);
        pineappleCoords.push({ x, y, radius: 7.5 }); // Adds the coordinates to the array
        ctx.beginPath();
        ctx.rect(x - 5, y - 5, 10, 10); // Draws a square (pineapple piece) at the random coordinates
        ctx.fill(); // Fills the square
    }
}

function getRandomToppingPlacement(cx, cy, radius, existingCoords, padding) {
    let x, y, isValid;
    do {
        isValid = true; // Assumes the position is valid
        let angle = Math.random() * 2 * Math.PI; // Gets a random angle
        let r = radius * Math.sqrt(Math.random()); // Gets a random distance from the center
        x = cx + r * Math.cos(angle); // Calculates the x-coordinate
        y = cy + r * Math.sin(angle); // Calculates the y-coordinate

        // Checks if the new position overlaps with any existing toppings
        for (let coord of existingCoords) {
            let dx = x - coord.x; // Calculates the x-distance
            let dy = y - coord.y; // Calculates the y-distance
            let distance = Math.sqrt(dx * dx + dy * dy); // Calculates the distance
            if (distance < (coord.radius + padding)) { // If the distance is less than the sum of the radius and padding
                isValid = false; // The position is not valid
                break; // Breaks out of the loop
            }
        }
    } while (!isValid); // Repeats until a valid position is found

    return { x, y }; // Returns the valid coordinates
}

