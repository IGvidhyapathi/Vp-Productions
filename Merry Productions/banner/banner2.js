var video02 = document.getElementById("video2");
var bg02 = document.getElementById("bg");

function showEndImage() {
    video02.style.display = "none"; // Hide the video
    bg02.style.display = "block"; // Show the image
  }
  video02.addEventListener("ended", showEndImage);
  var video2 = document.getElementById("video2");
  var muteButton = document.getElementById("muteButton2");

  muteButton.addEventListener("click", function() {
      if (video2.muted) {
          video2.muted = false; // Unmute the video
          muteButton.textContent = "Mute";
      } else {
          video2.muted = true; // Mute the video
          muteButton.textContent = "Unmute";
      }
  });