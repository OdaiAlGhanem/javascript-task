console.log();
function submit1() {

    localStorage.setItem("name", document.getElementById("name").value);
    let Name = localStorage.getItem("name");

    localStorage.setItem("age", document.getElementById("age").value);
    let Age = localStorage.getItem("age");

    localStorage.setItem("male", document.getElementById("male").checked);
    let Male = localStorage.getItem("male");

    localStorage.setItem("female", document.getElementById('female').checked);
    let Female = localStorage.getItem("female");


    localStorage.setItem("descrep", document.getElementById("desc").value);
    let Descrep = localStorage.getItem("desc");

    localStorage.setItem("univirsity", document.getElementById("uni").value);
    let Uni = localStorage.getItem("uni").checked;

    localStorage.setItem("javascript", document.getElementById("lang1").value);
    let Javascript = localStorage.getItem("lang1").checked;

    localStorage.setItem("c++", document.getElementById("lang2").value);
    let C = localStorage.getItem("lang2").checked;

    localStorage.setItem("java", document.getElementById("lang3").value);
    let Java = localStorage.getItem("lang3").checked;


    document.getElementById("Div1").style.display = "block";
    document.getElementById("p1").innerHTML += Name;

    document.getElementById("p2").innerHTML += Age;
    var x = document.getElementById("male").value;
    var y = document.getElementById("female").value;

    if (x == "male")
        document.getElementById("p3").innerHTML += x;
    else
        document.getElementById("p3").innerHTML += y;

    document.getElementById("p4").innerHTML += Description;

    document.getElementById("p5").innerHTML += major;


    var a = document.getElementById("lang1");

    if (a.checked) {
        document.getElementById("l1").innerHTML += html;

    }
    else {
        document.getElementById("lang1").style.display = "none";
    }

    var b = document.getElementById("lang2");

    if (b.checked) {
        document.getElementById("l2").innerHTML += c;

    }
    else {
        document.getElementById("lang2").style.display = "none";
    }

    var z = document.getElementById("lang3");

    if (z.checked) {
        document.getElementById("l3").innerHTML += z.id;

    }
    else {
        document.getElementById("lang3").style.display = "none";
    }
}

