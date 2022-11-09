document.getElementById("image").style.width="300px";
document.getElementById("image").style.height="200px";
function myFunction() {
    var x = document.getElementById("mySelect").value;
    if(x=="Jordan")
    {
        document.getElementById("image").src="image/Flag_of_Jordan.svg.png";
    }
    else if(x=="Qatar")
    {
        document.getElementById("image").src="image/Flag_of_Qatar_(3-2).svg.png";
    }
    else if(x=="Lebanon")
    {
        document.getElementById("image").src="image/Flag_of_Lebanon.svg.png";
    }
    else if(x=="Syria")
    {
        document.getElementById("image").src="image/Flag_of_Syria.svg.png";
    }
    else if(x=="Palastine")
    {
        document.getElementById("image").src="image/Flag_of_Palestine_-_short_triangle.svg";
    }
    

}
