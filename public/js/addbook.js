var id1 = document.getElementById("fd_1");
var id2 = document.getElementById("fd_2");
var id3 = document.getElementById("fd_3");
var id4 = document.getElementById("fd_4");
var id5 = document.getElementById("fd_5");
var id6 = document.getElementById("fd_6");
// var id7 = document.getElementById("fd_1");
function validate() {
    if (id1.value == "" || id2.value == "" || id3.value == "" || id4.value == "" || id5.value == "" || id6.value == "") {
        alert("all feilds are mandatory_feilds cannot be empty");
        return false;
    } else {
        return true;
    }
}