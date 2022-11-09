
function Pass() {
    let pw1 = document.getElementById("pswd1").value;
    let pw2 = document.getElementById("pswd2").value;

    if (pw1.length < 6) {
        document.getElementById("message1").style.display = "inline";
        document.getElementById("message1").innerHTML = "Too short";
        document.getElementById("message1").style.color = "red";

    }
    else document.getElementById("message1").style.display = "none";

}



function cpass() {
    let pw1 = document.getElementById("pass").value;
    let pw2 = document.getElementById("cpass").value;

    if (pw1 == pw2) {
        document.getElementById("submit").style.display = "block";
        document.getElementById("message2").style.display="none";
        document.getElementById("message1").style.display="none";
       
    }
    else {
        document.getElementById("message2").style.display = "inline";
        document.getElementById("message2").innerHTML = "The two password don't match";
        document.getElementById("message2").style.color = "red";
    }
}