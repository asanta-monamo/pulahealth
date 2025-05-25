document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.querySelector(".search-bar button");
    const searchInput = document.querySelector(".search-bar input");

    if (searchBtn && searchInput) {
        searchBtn.addEventListener("click", function () {
            const query = searchInput.value.trim();
            if (query) {
                window.location.href = `doctorsdirectory.html?query=${encodeURIComponent(query)}`;
            } else {
                alert("Please enter a search term.");
            }
        });
    }
});




 