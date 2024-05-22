var video1 = document.getElementById("video");
var bg1 = document.getElementById("bg");

function showEndImage() {
    video1.style.display = "none"; // Hide the video
    bg1.style.display = "block"; // Show the image
  }
  video1.addEventListener("ended", showEndImage);

  var video1 = document.getElementById("video");
        var muteButton = document.getElementById("muteButton");
    
        muteButton.addEventListener("click", function() {
            if (video1.muted) {
                video1.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video1.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });