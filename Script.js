var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.getElementById("shopping-list");

function inputLength() {
    return input.value.trim().length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value.trim()));
    
    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.className = "delete";
    deleteButton.addEventListener("click", deleteListItem);
    deleteButton.addEventListener("touchend", deleteListItem); // Added touch event listener
    
    li.appendChild(deleteButton);
    ul.appendChild(li);
    input.value = ""; // Clear the input field
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function deleteListItem(event) {
    var li = event.target.parentElement;
    ul.removeChild(li);
}

// Add event listeners to existing delete buttons
var deleteButtons = document.getElementsByClassName("delete");
for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteListItem);
    deleteButtons[i].addEventListener("touchend", deleteListItem); // Added touch event listener
}

button.addEventListener("click", addListAfterClick);
button.addEventListener("touchend", addListAfterClick); // Added touch event listener

