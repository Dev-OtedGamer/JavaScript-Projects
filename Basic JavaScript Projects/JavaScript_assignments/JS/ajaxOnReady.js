// Adds an event listener to the button to start the AJAX request when clicked
document.getElementById('startRequest').addEventListener('click', function() {
    // Create a new XMLHttpRequest object
    var xmlhr = new XMLHttpRequest();

    // Sets up the onreadystatechange callback
    xmlhr.onreadystatechange = function() {
        // Gets the output div element
        var outputDiv = document.getElementById('output');
        // Variable to hold the step message
        var stepMessage = "";

        // Checks the readyState and set the step message accordingly
        switch (xmlhr.readyState) {
            case 0:
                stepMessage = "This is step 0: UNSENT"; // Request not initialized
                break;
            case 1:
                stepMessage = "This is step 1: OPENED"; // Server connection established
                break;
            case 2:
                stepMessage = "This is step 2: HEADERS_RECEIVED"; // Request received
                break;
            case 3:
                stepMessage = "This is step 3: LOADING"; // Processing request
                break;
            case 4:
                stepMessage = "This is step 4: DONE"; // Request finished and response is ready
                if (xhr.status === 200) {
                    stepMessage += " - The request was successful!"; // Successful response
                } else {
                    stepMessage += " - There was an error with the request."; // Error in response
                }
                break;
        }

        // Creates a new paragraph element to display the step message
        var newParagraph = document.createElement('p');
        newParagraph.textContent = stepMessage;
        // Appends the new paragraph to the output div
        outputDiv.appendChild(newParagraph);
    };

    // Opens the request with the HTTP GET method to the specified URL
    xmlhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    // Sends the request to the server
    xmlhr.send();
});
