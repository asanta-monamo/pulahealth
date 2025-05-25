document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query")?.toLowerCase();

    const doctorCards = document.querySelectorAll(".doctor-card");

    if (query) {
        doctorCards.forEach(card => {
            const name = card.querySelector(".doctor-name").textContent.toLowerCase();
            const specialty = card.querySelector(".doctor-specialty").textContent.toLowerCase();

            const matches = name.includes(query) || specialty.includes(query);
            card.style.display = matches ? "flex" : "none";
        });
    }
});


    document.getElementById('navToggle').addEventListener('click', function () {
            const nav = document.getElementById('mainNav');
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });