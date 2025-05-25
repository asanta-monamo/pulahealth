function isLoggedIn() {
    return localStorage.getItem("isLoggedIn") === "true";
}

function bookAppointment(serviceName) {
    if (!isLoggedIn()) {
        alert("You must be logged in to book an appointment. Please log in.");
        window.location.href = "signin.html"; 
    } else {
        alert("You have successfully booked the " + serviceName + " service!");
    }
}

