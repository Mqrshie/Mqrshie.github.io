// Get the game container element
var gameContainer = document.getElementById("game-container");

// Create an array to store the bubbles
var bubbles = [];

// Set the number of bubbles to create
var numBubbles = 125;

// Set the maximum speed and angle for the bubbles
var maxSpeed = 1.5;
var maxAngle = 2 * Math.PI;

// Loop through the number of bubbles to create
for (var i = 0; i < numBubbles; i++) {
  // Create a new bubble element
  var bubble = document.createElement("div");
  
  // Add the bubble class to the element
  bubble.classList.add("bubble");
  
  // Generate a random x and y position for the bubble
  var x = Math.floor(Math.random() * (gameContainer.offsetWidth - bubble.offsetWidth));
  var y = Math.floor(Math.random() * (gameContainer.offsetHeight - bubble.offsetHeight));
  
  // Add some randomness to the initial x and y positions
  x += Math.random() * 50 - 25;
  y += Math.random() * 50 - 25;
  
  // Set the bubble's position
  bubble.style.left = x + "px";
  bubble.style.top = y + "px";
  
  // Set the bubble's initial speed and angle
  bubble.speed = Math.random() * maxSpeed;
  bubble.angle = Math.random() * maxAngle;
  
  // Add the bubble to the game container
  gameContainer.appendChild(bubble);
  
  // Add the bubble to the bubbles array
  bubbles.push(bubble);
}

// Update the bubbles' position using requestAnimationFrame
function updateBubbles() {
  // Loop through the bubbles and update their position
  for (var i = 0; i < bubbles.length; i++) {
    // Get the bubble's current position
    var x = parseInt(bubbles[i].style.left);
    var y = parseInt(bubbles[i].style.top);
    
    // Calculate the new position based on the speed and angle
    x += bubbles[i].speed * Math.cos(bubbles[i].angle);
    y += bubbles[i].speed * Math.sin(bubbles[i].angle);
    
    // Add some randomness to the movement
    bubbles[i].angle += Math.random() * 0.2 - 0.1;
    
    // Check if the bubble has hit a wall, and bounce it back if it has
    if (x + bubbles[i].offsetWidth >= gameContainer.offsetWidth) {
      x = gameContainer.offsetWidth - bubbles[i].offsetWidth;
      bubbles[i].angle = Math.PI - bubbles[i].angle;
    } else if (x <= 0) {
      x = 0;
      bubbles[i].angle = Math.PI - bubbles[i].angle;
    }
    if (y + bubbles[i].offsetHeight >= gameContainer.offsetHeight) {
      y = gameContainer.offsetHeight - bubbles[i].offsetHeight;
      bubbles[i].angle = -bubbles[i].angle;
    } else if (y <= 0) {
      y = 0;
      bubbles[i].angle = -bubbles[i].angle;
    }
    
    // Set the bubble's new position
    bubbles[i].style.left = x + "px";
    bubbles[i].style.top = y + "px";
  }
  
  // Request the next animation frame
  requestAnimationFrame(updateBubbles);
}

// Start the animation
requestAnimationFrame(updateBubbles);

// Loop through the bubbles and add a click event listener to each one
for (var i = 0; i < bubbles.length; i++) {
  bubbles[i].addEventListener("click", function() {
    // Remove the clicked bubble from the game container
    gameContainer.removeChild(this);
    
    // Remove the bubble from the bubbles array
    bubbles.splice(bubbles.indexOf(this), 1);
  });
}
