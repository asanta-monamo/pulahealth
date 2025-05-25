document.addEventListener("DOMContentLoaded", function () {
    const signinForm = document.getElementById("signin-form");

    signinForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const validCredentials = [
            { username: "monamoasanta@gmail.com", password: "asanta" },
            { username: "karabo@gmail.com", password: "asanta" }
        ];

        const user = validCredentials.find(
            (cred) => cred.username === username && cred.password === password
        );

        if (user) {
            localStorage.setItem("loggedInUser", username);

            window.location.href = "bookappointment.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});



