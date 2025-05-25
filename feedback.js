document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedback-form");
    const messageDiv = document.getElementById("feedback-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const rating = form.rating.value;
        const comments = form.comments.value.trim();

        if (!name || !email || !comments) {
            messageDiv.style.color = "red";
            messageDiv.textContent = "Please fill in all required fields.";
            return;
        }

        messageDiv.style.color = "green";
        messageDiv.textContent = "Thank you for your feedback!";

        setTimeout(() => {
            form.reset();
            messageDiv.textContent = "";
        }, 3000);
    });
});


   document.getElementById('navToggle').addEventListener('click', function () {
            const nav = document.getElementById('mainNav');
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });