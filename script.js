//<input type="email" name="email" placeholder="Enter Email Here"><br>
//<input type="confirmEmail" name="confirmEmail" placeholder="Confirm Email"><br>

const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirmEmail');

const validateInputs = () => {
    const emailValue = email.value;
    const confirmEmailValue = confirmEmail.value;

    if(emailValue !== confirmEmailValue) {
console.log("Emails don't match");
    }
}
