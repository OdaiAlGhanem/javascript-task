
function myfunc(a) {
    sessionStorage.setItem(a.id, a.value);
    var x = sessionStorage.getItem(a.id);

}
sessionStorage.setItem("firstname", "odai");
sessionStorage.setItem("lastname", "alghanem");
localStorage.setItem("firstname", "odai");
localStorage.clear("firstname", "odai");
function myfunc(a) {
    localStorage.setItem(a.id, a.value);
    var x = localStorage.getItem(a.id);

}
