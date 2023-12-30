// Function to create a continuous typing animation
function typeWriter(text, elementId, speed) {
  let i = 0;
  const textContainer = document.getElementById(elementId);
  
  function type() {
    if (i < text.length) {
      textContainer.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Reset the index to start the animation again
      i = 0;
      textContainer.innerHTML = "";
      setTimeout(type, speed) ,10000;
    }
  }

  type();
}

// Call the function with your desired text, element ID, and typing speed
typeWriter("Hello, welcome to my profile", "textContainer", 90);