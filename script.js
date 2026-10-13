let loginForm = document.getElementById("loginForm");

let email = document.getElementById("email");
let password = document.getElementById("password");

let message = document.getElementById("message");


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    if (email.value === "") {

        message.innerText = "Please enter email";
        return;

    }


    if (password.value === "") {

        message.innerText = "Please enter password";
        return;

    }


    if (password.value.length < 6) {

        message.innerText = "Password must be 6 characters";
        return;

    }


    message.innerText = "Login successful!";

});