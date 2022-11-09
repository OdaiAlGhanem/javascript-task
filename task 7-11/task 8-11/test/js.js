function h1()
{
document.getElementById("h1hello").innerHTML="HELLO ODAI";
}
function h2()
{
document.getElementById("h1hello").innerHTML="HELLO ORANGE";
}


document.getElementById("h1hello").innerHTML="HELLO ORANGE";

document.getElementById("h1hello").style.color="red";
const x=document.getElementsByClassName("p1");
x[0].style.background="red";
x[1].style.background="yellow";
document.getElementsByTagName("p")[1].innerHTML="odai odai odai";

const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");

document.getElementById("image3").setAttribute("alt","image");
document.querySelector("button").style.fontSize="20px";

const arr=document.querySelectorAll("p");
for(let i=0; i < arr.length ; i++)
{
    arr[i].style.fontWeight="bold";
    arr[i].style.color="blue";
}
function doorr()
{
    var url= document.getElementById("door").src;
    console.log(url);
    if(url=="file:///C:/Users/dell/javascript-task/task%208-11/test/image/doorclose.jpg")
    
     document.getElementById("door").src="image/dooropen.jpg";

   else if(url=="file:///C:/Users/dell/javascript-task/task%208-11/test/image/dooropen.jpg")
  
    document.getElementById("door").src="image/doorclose.jpg";
 

}
