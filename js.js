
function fun11()
{

    sessionStorage.setItem("subject" ,document.getElementById("subject").value);
    let subject=sessionStorage.getItem("subject");

    sessionStorage.setItem("Description",document.getElementById("desc").value);
    let dascription=sessionStorage.getItem("Description");

    sessionStorage.setItem("userTypes",document.getElementById("ut").value);
    let userTypes=sessionStorage.getItem("userTypes");


    sessionStorage.setItem("Technology" ,document.getElementById("tec").value);
    let Technology=sessionStorage.getItem("Technology");

document.getElementById("Div1").style.display="block";
document.getElementById("Div1").style.backgroundColor="yellow";
document.getElementById("Div1").style.width="350px";
document.getElementById("Div1").style.height="200px";
document.getElementById("Div1").style.border="1px solid balck";


document.getElementById("p1").innerHTML+= subject;
document.getElementById("p2").innerHTML+= dascription;
document.getElementById("p3").innerHTML+= userTypes;
document.getElementById("p4").innerHTML+= Technology;

}