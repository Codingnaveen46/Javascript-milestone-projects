const myImage = document.getElementById('myImage');
let xPosition = 0;
let yPosition = 0;

function moveImage(event) {
  switch(event.keyCode) {
    case 37: // left arrow
      xPosition -= 10;
      break;
    case 38: // up arrow
      yPosition -= 10;
      break;
    case 39: // right arrow
      xPosition += 10;
      break;
    case 40: // down arrow
      yPosition += 10;
      break;
    default:
      return;
  }
  myImage.style.left = xPosition + "px";
  myImage.style.top = yPosition + "px";
}

document.addEventListener("keydown", moveImage);
