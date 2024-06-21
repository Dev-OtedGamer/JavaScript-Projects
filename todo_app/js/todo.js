/* This function gets the task from input*/
function get_todos() {
    /*This creates and array of the tasks that are inputed*/
    var todos = new Array;
    /*This pulls the task that was saved in the web browser memory*/
    var todos_str = localStorage.getItem('todo');
    /* If the input is not null then JSON.parse will
    communicate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*This function adds the inputed task to the get_todos function array*/
function add () {
    /*This takes the inputed task and creates a variable of it*/
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds a new task the end of the array*/
    todos.push(task);
    /*This converts the task input to a JSON string*/
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value = "";
    show ();

    return false;
}

/*This function keeps the task permanetly displayed on the screen*/
function show() {
    /*This sets the task thet was retrieved as a variable*/
    var todos = get_todos();

    /*This sets up each task as unordered list*/
    var html = '<ul>';
    /*This displays a task to the list in the order that it is inputed*/
    for (var i = 0; i < todos.length; i++) {
        /*This also displays the task as a list and creates the button with the "X"*/
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '" >x</button><li>';

    };
    html += '</ul>';
    /*This displays the task as a list*/
    document.getElementById('todos').innerHTML = html;

}
/*This displays the inputed task when the 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*This will keep the inputs displayed permantaly on the screen*/

/*This function removes a to-do item */
function remove(event) {
    /* This uses closest method to find the button with the 'remove' class */
    var button = event.target.closest('button.remove');
    if (button) {
        /*This gets the ID of the clicked item */
        var id = button.getAttribute('id');

        /*This retrieves the current list of to-dos from localStorage */
        var todos = get_todos();

        /*This removes the to-do item at the specified index */
        todos.splice(id, 1);

        /*This saves the updated list back to localStorage */
        localStorage.setItem('todo', JSON.stringify(todos));

        /*This refreshs the displayed list of to-dos */
        show();
    }
}

/*This attachs the remove function to the parent container of the remove buttons */
document.getElementById('todos').addEventListener('click', remove);