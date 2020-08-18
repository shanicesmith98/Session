var description = document.getElementById("description");

function moveLeft() {
    var left = parseInt(window.getComputedStyle(description).getPropertyValue("left"));
    if (left > 0) {
        description.style.left = left - 2 + "px";
    }
       
}

function display() {
    document.getElementById("singIn").innerHTML="";
}