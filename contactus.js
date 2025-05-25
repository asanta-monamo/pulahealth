document.addEventListener("DOMContentLoaded", () => {
    const infoBox = document.getElementById("about-pulahealth");

    setTimeout(() => {
        infoBox.style.display = "block";
    }, 1000);

    console.log("User is viewing the Contact Us page.");
});


      document.getElementById('navToggle').addEventListener('click', function () {
            const nav = document.getElementById('mainNav');
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        });