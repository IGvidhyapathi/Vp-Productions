
        var video1 = document.getElementById("video");
        var bg1 = document.getElementById("bg");

        function showEndImage() {
            video1.style.display = "none"; // Hide the video
            bg1.style.display = "block"; // Show the image
          }
          video1.addEventListener("ended", showEndImage);

        var video02 = document.getElementById("video2");
        var bg02 = document.getElementById("bg");

        function showEndImage() {
            video02.style.display = "none"; // Hide the video
            bg02.style.display = "block"; // Show the image
          }
          video02.addEventListener("ended", showEndImage);
   
        var video03 = document.getElementById("video3");
        var bg03 = document.getElementById("bg");

        function showEndImage() {
            video03.style.display = "none"; // Hide the video
            bg03.style.display = "block"; // Show the image
          }
          video03.addEventListener("ended", showEndImage);
   
        var video04 = document.getElementById("video4");
        var bg04 = document.getElementById("bg");

        function showEndImage() {
            video04.style.display = "none"; // Hide the video
            bg04.style.display = "block"; // Show the image
          }
          video04.addEventListener("ended", showEndImage);
   
        var video05 = document.getElementById("video5");
        var bg05 = document.getElementById("bg");

        function showEndImage() {
            video05.style.display = "none"; // Hide the video
            bg05.style.display = "block"; // Show the image
          }
          video05.addEventListener("ended", showEndImage);
   
        var video06 = document.getElementById("video6");
        var bg06 = document.getElementById("bg");

        function showEndImage() {
            video06.style.display = "none"; // Hide the video
            bg06.style.display = "block"; // Show the image
          }
          video06.addEventListener("ended", showEndImage);
   
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
    
        var video3 = document.getElementById("video3");
        var muteButton = document.getElementById("muteButton3");
    
        muteButton.addEventListener("click", function() {
            if (video3.muted) {
                video3.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video3.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });
    
        var video4 = document.getElementById("video4");
        var muteButton = document.getElementById("muteButton4");
    
        muteButton.addEventListener("click", function() {
            if (video4.muted) {
                video4.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video4.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });
   
        var video5 = document.getElementById("video5");
        var muteButton = document.getElementById("muteButton5");
    
        muteButton.addEventListener("click", function() {
            if (video5.muted) {
                video5.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video5.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });
    
        var video6 = document.getElementById("video6");
        var muteButton = document.getElementById("muteButton6");
    
        muteButton.addEventListener("click", function() {
            if (video6.muted) {
                video6.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video6.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });
    