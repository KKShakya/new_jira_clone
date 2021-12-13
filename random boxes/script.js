
var refresh = document.querySelector(".refresh");
var circle = document.querySelectorAll(".circle")


function refreshcircles() {
    var color = ["Red", "green", "blue"]

    var number = Math.random() * color.length;
    for (var i = 0; i < circle.length; i++) {

        circle[i].style.background = color[Math.floor(Math.random() * color.length)];
        circle[i].style.height = "100px"
        circle[i].style.weight = "100px"
    }

}
refresh.addEventListener("click", refreshcircles)


var reset = document.querySelector(".reset");
function disnone() {
    var boxes = document.querySelector("main");
    if (boxes.style.display == "none") {
        boxes.style.display = "flex"
    }
    else {
        boxes.style.display = "none"
    }

}
reset.addEventListener("click", disnone);


var blue = document.querySelector(".btn-B");
var red = document.querySelector(".btn-R");
var green = document.querySelector(".btn-G");


function onlyred() {
    for (var i = 0; i < circle.length; i++) {

        if (circle[i].style.background !== "red") 
        {
            circle[i].style.visibility = "hidden"
        } 
        else {
            circle[i].style.visibility = "visible"
        }
    }
}

function onlygreen() {
    for (var i = 0; i < circle.length; i++) {

        if (circle[i].style.background !== "green") 
        {
            circle[i].style.visibility = "hidden"
        } 
        else {
            circle[i].style.visibility = "visible"
        }
    }
}
function onlyBlue() {
    for (var i = 0; i < circle.length; i++) {

        if (circle[i].style.background !== "blue") 
        {
            circle[i].style.visibility = "hidden"
        } 
        else {
            circle[i].style.visibility = "visible"
        }
    }
}

blue.addEventListener("click", onlyBlue);
red.addEventListener("click", onlyred);
green.addEventListener("click", onlygreen);
