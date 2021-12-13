// var a1 = document.querySelector(".btn-1");
// console.log(a1)

// var a2 = document.querySelector(".btn-2");
// console.log(a2)

// var a3 = document.querySelector(".btn-3");
// console.log(a3)


for( var i = 0; i<10; i++)
{
    console.log(i);
}



var a = 1;

if(a == 1)
{
 console.log("value a = "+ a);   
}
else{
    console.log("a not found")
}

var a = 1;
switch (a) {
    case 1:
        console.log("switch a is found")
        break;
    case 2:
        console.log("a is 2")
        break;

    default:
        console.log("switch case default");
        break;
}
var a = 20;


var btn = document.querySelectorAll("button");
var count = 0;

for (let index = 0; index < btn.length; index++) {

    
    btn[index].style.height = "110px"
    btn[index].style.width = "110px"
    if(index % 3 ==0)
    {
        btn[index].style.background="pink"
    }

    count++;
    btn[index].innerText = count;
    
}