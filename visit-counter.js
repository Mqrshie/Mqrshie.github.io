// Get the visit count from local storage or set it to 0
let visitCount = localStorage.getItem('visitCount') || 0;

// Update the count by 1 and save it to local storage
visitCount++;
localStorage.setItem('visitCount', visitCount);

// Display the visit count in a yellow box at the bottom right corner of the webpage
let visitCounter = document.createElement('div');
visitCounter.id = 'visit-counter';
visitCounter.style.position = 'fixed';
visitCounter.style.bottom = '20px';
visitCounter.style.right = '20px';
visitCounter.style.backgroundColor = 'yellow';
visitCounter.style.color = 'black';
visitCounter.style.padding = '10px';
visitCounter.style.borderRadius = '5px';
visitCounter.style.fontSize = '1.2em';
visitCounter.innerHTML = `You have visited this website ${visitCount} time(s).`;
document.body.appendChild(visitCounter);
