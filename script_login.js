function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "kali") {
        alert("Login successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        alert("Invalid username or password. Try again.");
    }
}
