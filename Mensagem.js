function Mensagem() {
    let emailInput = document.getElementById("inputEmail");
    let emailValue = emailInput.value;
    let result = document.getElementById("resEmail");

    if (emailValue === "") {
        result.innerText = "Please provide an email address";
        result.style.color = "red";
        emailInput.style.border = "2px solid red";
    } else if (emailValue.indexOf("@") === -1) {
        result.innerText = "Please enter a valid email address";
        result.style.color = "red";
        emailInput.style.border = "2px solid red";
    } else {
        result.innerText = "Correct email";
        emailInput.style.border = "2px solid green";
        result.style.color = "green";
    }
}