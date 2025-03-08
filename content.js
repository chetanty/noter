// Create a div to display "Hi"
const hiDiv = document.createElement('div');
hiDiv.innerText = "Hi";
hiDiv.style.position = "fixed";
hiDiv.style.top = "50%";
hiDiv.style.left = "50%";
hiDiv.style.transform = "translate(-50%, -50%)";
hiDiv.style.fontSize = "100px";
hiDiv.style.color = "red";
hiDiv.style.zIndex = "10000";
hiDiv.style.backgroundColor = "white";
hiDiv.style.padding = "20px";
hiDiv.style.borderRadius = "10px";
hiDiv.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.5)";
document.body.appendChild(hiDiv);

// Remove the "Hi" after 3 seconds
setTimeout(() => {
  hiDiv.remove();
}, 3000);
