//<input type="email" name="email" placeholder="Enter Email Here"><br>
//<input type="confirmEmail" name="confirmEmail" placeholder="Confirm Email"><br>

const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');

function validateEmail() {
    const emailValue = email.value;
    const confirmEmailValue = confirmEmail.value;

    //console.log(email,confirmEmail);
    let message = document.getElementById("message");
    if(email.length !=0) {
        if(emailValue == confirmEmailValue) {
            message.textContent = "emails match";
            message.style.backgroundColor = "#3ae374";
    }
    else {
        message.textContent = "emails don't match";
        message.style.backgroundColor = "#ff4d4d";
    }
    }
}
