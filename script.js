var button = document.getElementById("toggleButton");
var div = document.getElementById("id1");

// Event listener to toggle id1 between what it currently is and the other style
button.addEventListener("click", function() {
    div.classList.toggle("crazyStyle");
});
