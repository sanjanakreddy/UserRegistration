document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("message");

    if(password !== confirm){
        message.innerHTML = "Passwords do not match!";
        message.style.color = "red";
    }
    else{
        alert("Registration Successful!");
        message.innerHTML = "Registration Successful!";
        message.style.color = "green";
    }

});