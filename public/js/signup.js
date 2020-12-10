var email = document.getElementById("inputEmail4");
var pwd = document.getElementById("inputPassword4");
var ad = document.getElementById("inputAddress");
var ad1 = document.getElementById("inputAddress2");
var num = document.getElementById("inputNumber");
var state = document.getElementById("inputState");
var zip = document.getElementById("inputZip");
var error1 = document.getElementById("error1");
var error2 = document.getElementById("error2");
var error3 = document.getElementById("error3");
var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
var rgex = /^([A-Za-z0-9\.\-]+)\@([A-Za-z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
// pwd indicator
// const indicator = document.querySelector(".indicator")
// const input = document.querySelector("input")
// const weak = document.querySelector(".weak")
// const medium = document.querySelector(".medium")
// const strong = document.querySelector(".strong")
// const text = document.querySelector(".text")
// let regexweak = /^([a-z]+)$/;
// let regexmedium = /^([a-z]+[A-Z]+)$/
// let regexstrong = /^([a-z]+[A-Z]+[0-9]+)$/

// function trigger() {
//     if (input.value != "") {
//         indicator.style.display = "block";
//         indicator.style.display = "flex";

//     } else {
//         indicator.style.display = "none";

//     }

// }


//pwd indicator

function validate1() {
    if (email.value == null || email.value == "") {
        alert("email cannot be empty")
        email.style.border = "2px solid red";
        return false;
    } else if (pwd.value == "" || pwd.value == null) {
        alert("password cannot be empty")
        pwd.style.border = "2px solid red";
        return false;
    } else if ((ad.value == "" || ad.value == null) && (ad1.value == "" || ad1.value == null)) {
        alert("address cannot be empty!")
        ad.style.border = "2px solid red";
        ad1.style.border = "2px solid red";
        error3.innerHTML = "**Address is mandatory"
        error3.style.color = "red";
        return false;
    } else if (num.value == "" || num.value == null) {
        alert("phone number cannot be empty")
        num.style.border = "2px solid red";
        return false;
    }
    // else if (state.value == "choose...") {
    //     alert("choose the state")
    //     state.style.border = "2px solid red";
    //     return false;
    // } 
    else if (zip.value == "" || zip.value == null) {
        alert("zipcode cannot be empty")
        zip.style.border = "2px solid red";
        return false;
    } else if (pwd.value.length < 8) {
        error2.innerHTML = ("**password length must be minimum if 8 charecters")
        error2.style.color = "red";
        return false;
    } else if (pwd.value.length > 15) {
        error2.innerHTML = "**Password length must not exceed 16 characters";
        error2.style.color = "red";
        return false;

    } else if (rgex.test(email.value)) {

        // alert("valid email id ")
        email.style.border = "2px solid green";
        if (password.test(pwd.value)) {
            // alert("valid password")
            pwd.style.border = "2px solid green";
            if (phoneno.test(num.value)) {
                // alert("valid phone number")
                return true;
            } else {
                alert("enter the correct phone number");
                num.style.border = "2px solid red";
                return false;
            }
        } else {
            alert("invalid password -**must contain atleast (one uppecase ,one lowecase and one special)charecter and one number ")
            pwd.style.border = "2px solid red"
            return false;
            return true;
        }
    } else {
        alert("invalid email id ")
        email.style.border = "2px solid red";
        return false;


    }



}