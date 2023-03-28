document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  
  // Resize canvas to fill the whole page
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var particleCount = 50;
  var particles = [];

  var mouse = {
    x: null,
    y: null,
    radius: 200,
  };

  window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });

  window.addEventListener("mouseout", function (event) {
    mouse.x = null;
    mouse.y = null;
  });

  function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };

  Particle.prototype.update = function () {
    if (this.x + this.size > canvas.width || this.x - this.size < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y + this.size > canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY;
    }

    // Update direction based on distance to mouse
    if (mouse.x && mouse.y) {
      var dx = mouse.x - this.x;
      var dy = mouse.y - this.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius) {
        var force = (mouse.radius - distance) / mouse.radius;
        this.directionX = (dx / distance) * force * 5;
        this.directionY = (dy / distance) * force * 5;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  };

  function init() {
    for (var i = 0; i < particleCount; i++) {
      var size = Math.random() * 20 + 5;
      var x = Math.random() * (canvas.width - size * 2) + size;
      var y = Math.random() * (canvas.height - size * 2) + size;
      var directionX = Math.random() * 5 - 2.5;
      var directionY = Math.random() * 5 - 2.5;
      var color = "white";

      particles.push(new Particle(x, y, directionX, directionY, size, color));
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
    }
  }

  init();
  animate();
});
