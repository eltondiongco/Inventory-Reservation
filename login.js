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