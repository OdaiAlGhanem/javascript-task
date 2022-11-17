async function getdata() {
    let selec = document.getElementById("Input")
    const getfetch = await fetch("https://www.breakingbadapi.com/api/characters");

    const data = await getfetch.json();

    for (let i = 0; i < data.length; i++) {

        document.getElementById('Input').innerHTML += `<option>${data[i].name}</option>`;
    }
}
getdata();
getimage();


async function getimage() {
    var value = document.getElementById("Input").value
    let selecimage = document.getElementById("image")
    const getfetch = await fetch("https://www.breakingbadapi.com/api/characters");

    const data = await getfetch.json();

    for (let i = 0; i < data.length; i++) {
        if(value == data[i].name)

        document.getElementById('image').src = data[i].img;
    }
}

