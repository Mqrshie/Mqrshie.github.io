// Canvas setup
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate random shape
function randomShape() {
  const shapes = ['circle', 'square', 'triangle'];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

// Generate random color
function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// Generate random size
function randomSize() {
  return Math.floor(Math.random() * 100) + 50;
}

// Draw random shape on canvas
function drawShape() {
  const shape = randomShape();
  const color = randomColor();
  const size = randomSize();
  let x = Math.random() * (canvas.width - size);
  let y = Math.random() * (canvas.height - size);

  if (shape === 'circle') {
    ctx.beginPath();
    ctx.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  } else if (shape === 'square') {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
  } else if (shape === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(x + size / 2, y);
    ctx.lineTo(x + size, y + size);
    ctx.lineTo(x, y + size);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

// Draw multiple shapes on canvas
function drawShapes(numShapes) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < numShapes; i++) {
    drawShape();
  }
}

// Draw initial shapes on page load
drawShapes(50);

// Reload button
const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', () => {
  drawShapes(50);
});

// Settings button
const settingsBtn = document.getElementById('settings-btn');
const settingsPanel = document.getElementById('settings');
const cancelBtn = document.getElementById('cancel-btn');
const saveBtn = document.getElementById('save-btn');

settingsBtn.addEventListener('click', () => {
  settingsPanel.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  settingsPanel.style.display = 'none';
});

saveBtn.addEventListener('click', () => {
  const numShapesInput = document.getElementById('num-shapes-input');
  const avgSizeInput = document.getElementById('avg-size-input');
  const avgColorInput = document.getElementById('avg-color-input');
  const avgOpacityInput = document.getElementById('avg-opacity-input');

  const numShapes = numShapesInput.value;
  const avgSize = avgSizeInput.value;
  const avgColor = avgColorInput.value;
  const avgOpacity = avgOpacityInput.value;

  // Update settings and redraw shapes
  drawShapes(numShapes);
  settingsPanel.style.display = 'none';
});
