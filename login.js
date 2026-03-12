function validateLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (email === "admin@asiatech.edu.ph" && password === "eltonpogimo") {
        alert("Login successful!");
        window.location.href = "dashboard.html";
        return false;
    } else {
        alert("Invalid email or password.");
        return false;
    }
}

function openRegister(){
    document.getElementById("registerPopup").style.display = "block";
}

function closeRegister(){
    document.getElementById("registerPopup").style.display = "none";
}

function registerUser(){

    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let password = document.getElementById("regPassword").value;

    if(name === "" || email === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Registration Successful!");

    closeRegister();
}