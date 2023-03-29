//your JS code here. If required.
// Get all the square elements
const squares = document.querySelectorAll(".square");

// Loop through each square
squares.forEach((square) => {
  // Add event listener for mouseover
  square.addEventListener("mouseover", () => {
    // Change the background color
    square.style.backgroundColor = "red";
  });

  // Add event listener for mouseout
  square.addEventListener("mouseout", () => {
    // Set the background color back to its original color smoothly over 1 second
    square.style.transition = "background-color 1s ease";
    square.style.backgroundColor = "";
  });
});
