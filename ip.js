const ip = document.getElementById("ip");

fetch("https://api.ipify.org/?format=json")
  .then(response => response.json())
  .then(data => {
    ip.innerHTML = data.ip;
  })
  .catch(error => {
    console.error("Error:", error);
  });
