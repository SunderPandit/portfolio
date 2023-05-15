// JavaScript code to change text based on time
document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById("dynamic-text");

    // Get the current hour
    var currentHour = new Date().getHours();

    // Set different text based on the current hour
    if (currentHour >= 0 && currentHour < 12) {
      textElement.textContent = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      textElement.textContent = "Good afternoon!";
    } else {
      textElement.textContent = "Good evening!";
    }
  });