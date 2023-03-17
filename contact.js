const discordButton = document.getElementById("discord-button");
const discordTag = document.getElementById("discordTag");

discordButton.addEventListener("click", function() {
  if (discordTag.style.display === "none") {
    discordTag.style.display = "block";
    discordButton.innerHTML = "Hide Discord Tag";
  } else {
    discordTag.style.display = "none";
    discordButton.innerHTML = "Show Discord Tag";
  }
});
