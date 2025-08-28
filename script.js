// ====================
// Part 1: Basics (Variables, Conditionals)
// ====================

// Function to check age eligibility
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value; // Variable
  let result = "";

  if (age >= 18) { // Conditional
    result = " You are eligible to vote!";
  } else if (age > 0) {
    result = "You are too young to vote.";
  } else {
    result = "Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = result; // DOM interaction
});


// ====================
// Part 2: Functions
// ====================

// Function 1: Calculate total price of items
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

// Function 2: Format a greeting message
function greetUser(name) {
  return `Hello, ${name}! Welcome to our site.`;
}

// Use function when button is clicked
document.getElementById("calcTotalBtn").addEventListener("click", function() {
  let prices = [10, 25, 40]; // Example shopping cart
  let total = calculateTotal(prices);
  document.getElementById("totalResult").textContent =
    greetUser("Henri") + ` Your total is $${total}.`;
});


// ====================
// Part 3: Loops
// ====================

// Example 1: Countdown using a loop
document.getElementById("countdownBtn").addEventListener("click", function() {
  let countdownText = "";
  for (let i = 5; i >= 0; i--) { // Loop
    countdownText += i + " ";
  }
  document.getElementById("countdownResult").textContent = countdownText;
});

// Example 2: Iterating through an array
let fruits = [" Apple", " Banana", " Grape"];
console.log("Favorite fruits:");
fruits.forEach(fruit => console.log(fruit)); // Loop with forEach


// ====================
// Part 4: DOM Manipulation
// ====================

// DOM Example 1: Toggle text visibility
document.getElementById("toggleTextBtn").addEventListener("click", function() {
  let textElement = document.getElementById("toggleText");
  if (textElement.style.display === "none") {
    textElement.style.display = "block";
  } else {
    textElement.style.display = "none";
  }
});

// DOM Example 2: Add items dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#dynamicList li").length + 1);
  document.getElementById("dynamicList").appendChild(newItem);
});

// DOM Example 3: Change text color on hover
document.getElementById("toggleText").addEventListener("mouseover", function() {
  this.style.color = "blue";
});
document.getElementById("toggleText").addEventListener("mouseout", function() {
  this.style.color = "black";
});
