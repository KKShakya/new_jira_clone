
var plusbtn = document.querySelector(".plus");
var crossbtn = document.querySelector(".dialog-box .cross");



function plusbtnclick() {

    document.querySelector(".dialog").style.display = "flex"
}


function closedialog() {

    document.querySelector(".dialog").style.display = "none"
}



function addDelTktLogic() {
    var crossbtnArr = document.querySelectorAll(".icon-color3");
    var Minimizeicons = document.querySelectorAll(".icon-color1");
    function closeticket(e) {
        var box = e.target.parentElement.parentElement;
        console.log(box);
        box.style.display = "none"

    }

    function minimize(e) {

        var box = e.target.parentElement.parentElement;
        console.log(box);

        if (box.querySelector("main").style.display !== "none") {
            box.querySelector("main").style.display = "none"
        }
        else {
            box.querySelector("main").style.display = "block"
        }

    }

    for (let index = 0; index < crossbtnArr.length; index++) {
        const element = crossbtnArr[index];
        element.addEventListener("click", closeticket);

    }
    for (let index = 0; index < Minimizeicons.length; index++) {
        const element = Minimizeicons[index];
        element.addEventListener("click", minimize);

    }

}



function ChangeBoxTxtC1() {
    var textArr = document.querySelectorAll(".TA")
    for (let index = 0; index < textArr.length; index++) {
        const element = textArr[index];
        element.style.backgroundColor = "#95D1CC";

    }

}
var colorbtn = document.querySelector(".c1");
colorbtn.addEventListener("click", ChangeBoxTxtC1);

function ChangeBoxTxtC2() {
    var textArr = document.querySelectorAll(".TA")
    for (let index = 0; index < textArr.length; index++) {
        const element = textArr[index];
        element.style.backgroundColor = "#F90716";

    }

}
var colorbtn = document.querySelector(".c2");
colorbtn.addEventListener("click", ChangeBoxTxtC2);

function ChangeBoxTxtC3() {

    var textArr = document.querySelectorAll(".TA")
    for (let index = 0; index < textArr.length; index++) {
        const element = textArr[index];
        element.style.backgroundColor = "#FDFF8F";

    }

}
var colorbtn = document.querySelector(".c3");
colorbtn.addEventListener("click", ChangeBoxTxtC3);





plusbtn.addEventListener("click", plusbtnclick);
crossbtn.addEventListener("click", closedialog);


function addTicket() {
    closedialog();
    var boxes = document.querySelector(".wrapper>main");
    var oldhtml = boxes.innerHTML;
    var boxContent = document.getElementById("box-content");
    var title = document.getElementById("title");

    boxes.innerHTML = oldhtml + `<div class="box">
    <div class="header">
        <div class="box-heading">${title.value}</div>
        <div class="icon-color1">-</div>
        <div class="icon-color2">E</div>
        <div class="icon-color3">X</div>
    </div>
    <main> 
        <textarea class="TA" rows = "10">${boxContent.value}</textarea> 
    </main>
</div>
    `;
    title.value = "";
    boxContent.value = "";
    addDelTktLogic();
}



