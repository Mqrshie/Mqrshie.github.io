const catImage = document.getElementById("cat-image");
const newCatButton = document.getElementById("new-cat-button");
const loadingSpinner = document.getElementById("loading-spinner");

function showLoadingSpinner() {
  loadingSpinner.style.display = "block";
}

function hideLoadingSpinner() {
  loadingSpinner.style.display = "none";
}

async function getCatImage() {
  try {
    showLoadingSpinner();
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    catImage.src = data[0].url;
    hideLoadingSpinner();
  } catch (error) {
    console.error(error);
  }
}

newCatButton.addEventListener("click", getCatImage);

// Load initial cat image
getCatImage();
