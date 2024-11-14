//used to fetch superhero data

document.getElementById("searchButton").addEventListener("click", function() {
    const searchField = document.getElementById("searchField").value.trim();
    const sanitizedInput = encodeURIComponent(searchInput);  // Sanitize input to prevent injection
    const url = searchField ? `superheroes.php?query=${sanitizedInput}` : 'superheroes.php';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("result").innerHTML = data;  // Display data in the result div
        })
        .catch(error => {
            console.error('Error fetching superhero data:', error);
        });
});