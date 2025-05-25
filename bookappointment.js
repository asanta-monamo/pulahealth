document.addEventListener("DOMContentLoaded", () => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You must log in to book an appointment.");
        window.location.href = "signin.html"; 
    }

    const authButtons = document.getElementById("auth-buttons");
    if (authButtons) {
        authButtons.innerHTML = `
            <span>Welcome, ${loggedInUser}</span>
            <button onclick="logoutUser()">Log out</button>
        `;
    }

    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;

        if (!name || !phone || !doctor || !date) {
            alert("Please fill out all fields.");
            return;
        }

        alert(`Appointment booked with ${doctor} for ${name} on ${date}.`);

        bookingForm.reset();
    });
});

function logoutUser() {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "signin.html"; 
}



document.getElementById('navToggle').addEventListener('click', function () {
    const nav = document.getElementById('mainNav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });