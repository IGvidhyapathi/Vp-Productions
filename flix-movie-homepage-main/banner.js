
       

       
   
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
          var bg05= document.getElementById("bg");
        
         
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

          var video07 = document.getElementById("video7");
          var bg07 = document.getElementById("bg");
  
          function showEndImage() {
              video07.style.display = "none"; // Hide the video
              bg07.style.display = "block"; // Show the image
            }
            video07.addEventListener("ended", showEndImage);
        
    
       
    
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
        var video7 = document.getElementById("video7");
        var muteButton = document.getElementById("muteButton7");
    
        muteButton.addEventListener("click", function() {
            if (video7.muted) {
                video7.muted = false; // Unmute the video
                muteButton.textContent = "Mute";
            } else {
                video7.muted = true; // Mute the video
                muteButton.textContent = "Unmute";
            }
        });
        
    