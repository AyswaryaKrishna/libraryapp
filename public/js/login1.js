var pwd = document.getElementById("exampleInputPassword1");
var error2 = document.getElementById("error2");
var email = document.getElementById("exampleInputEmail1");
var error1 = document.getElementById("error1");

var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
var rgex = /^([A-Za-z0-9\.\-]+)\@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/

function validate() {
    if (email.value == null || email.value == "") {
        alert("email cannot be empty")
        email.style.border = "2px solid red";
        return false;
    } else if (pwd.value == "" || pwd.value == null) {
        alert("password cannot be empty")
        pwd.style.border = "2px solid red";
        return false;
    } else if (email.value == "admin@gmail.com") {
        alert("valid email id ")
        email.style.border = "2px solid green";
        if (pwd.value == "12345") {
            return true;
        } else {
            alert("invalid password")
            pwd.style.border = "2px solid red"
                // error2.innerHTML = "**must contain atleast (one uppecase ,one lowecase and one special)charecter and one number ";
            error2.style.color = "red";
            return false;
        }
    } else {
        alert("invalid email id ")
        email.style.border = "2px solid red";
        return false;


    }
    // } else if (password.test(pwd.value) == false) {
    //     alert("password invalid")
    //     pwd.style.border = "2px solid red";
    //     return false;

    // } else {
    //     return true;
    // }
}