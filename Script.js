// Get references to the DOM elements
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.getElementById("shopping-list");

// Function to check the length of the input
function inputLength() {
    return input.value.trim().length;
}

// Function to create a new list item
function createListElement() {
    const li = document.createElement("li");
    li.textContent = input.value.trim();

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", deleteListItem);
    deleteButton.addEventListener("touchend", deleteListItem); // Added touch event listener

    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = ""; // Clear the input field
}

// Function to add a new list item after clicking the button
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Function to delete a list item
function deleteListItem(event) {
    const li = event.target.parentElement;
    ul.removeChild(li);
}

// Add event listeners to existing delete buttons
const deleteButtons = document.getElementsByClassName("delete");
Array.from(deleteButtons).forEach(button => {
    button.addEventListener("click", deleteListItem);
    button.addEventListener("touchend", deleteListItem); // Added touch event listener
});

// Add event listeners to the button
button.addEventListener("click", addListAfterClick);
button.addEventListener("touchend", addListAfterClick); // Added touch event listener
