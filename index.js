const users = {
    "monamoasanta@gmail.com": "asanta",
    "karabo@gmail.com": "asanta"
};

function loginUser(email, password) {
    if (users[email] === password) {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful!");
        window.location.href = "index.html"; 
    } else {
        alert("User not registered. Please sign up.");
        window.location.href = "signup.html";
    }
}

function registerUser(email, password) {
    localStorage.setItem(email, password); 
    localStorage.setItem("loggedInUser", email); 
    alert("Registration successful!");
    window.location.href = "index.html";
}

function isLoggedIn() {
    return localStorage.getItem("loggedInUser") !== null;
}

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}


document.getElementById("signup-form").addEventListener("submit", handleSignup);

    