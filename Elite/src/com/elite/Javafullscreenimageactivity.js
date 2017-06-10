function makeFullScreen() {
         var divObj = document.getElementById("Anonymous-Mask-PNG-File.png");
       //Use the specification method before using prefixed versions
      if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
      }
      else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();            
      }
      else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();
      }
      else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();
      } else {
        console.log("Fullscreen API is not supported");
      } 
