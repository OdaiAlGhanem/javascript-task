var arr = ["odai", "ali", "eisa ", "alghanem"];


function shorterInArray(arr) {
    let name = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (name.length > arr[i].length) 
        {
            name = arr[i];
        }
    }
    return name;
}
document.write(shorterInArray(arr));