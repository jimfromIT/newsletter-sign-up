




/*
function signUp(){
    form.style.display = 'none';
    success.classList.add("show"); 
}

function disMiss(){
    success.classList.remove("show"); 
    form.style.display = 'block';
}
    */

const form = document.getElementById("signup");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email");
    let isValid = true;

    document.getElementById("email-error").textContent = "";

    const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById("email-error").textContent = 
            "Valid email required.";
        email.classList.add("invalid");
        isValid = false;
    }
    if (isValid) {
        document.getElementById("signup").style.display = "none";
        document.getElementById("successMsg").style.display = "flex";
        document.getElementById("successMsg").innerHTML = ` 
        <div class="success-content">
        <div class="success-img">
            <img src="images/icon-success.svg" alt="signed-up-icon">
        </div>
        <h1>Thanks for subscribing!</h1> 
        <p>A confirmation email has been sent to <strong>${email.value}</strong>. Please open it and click the button inside to confirm your subscription. </p>
        <button class="dismiss-btn" onclick="location.reload();" id="dismissBtn">Dismiss message</button>
        </div>`;
    }
});
