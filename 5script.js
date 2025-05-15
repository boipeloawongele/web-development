//Change text content dynamically
const changeTextBtn = document.getElementById("changeTextBtn");
const textElement = document.getElementById("text");

changeTextBtn.addEventListener("click", () => {
    textElement.textContent = "The text has been changed!";
    textElement.style.color = "blue"; // Modify CSS styles dynamically
});

// Add or remove an element when a button is clicked
const addElementBtn = document.getElementById("addElementBtn");
const container = document.getElementById("container");

addElementBtn.addEventListener("click", () => {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new dynamically added element!";
    newElement.id = "newElement";
    container.appendChild(newElement);
});