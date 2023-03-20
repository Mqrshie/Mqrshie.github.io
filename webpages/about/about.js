function setRandomBackgroundColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Set body background color to random RGB values
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  }
  
  window.onload = function() {
    setRandomBackgroundColor();
  }
  