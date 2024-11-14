//used to fetch superhero data

document.getElementById("searchButton").addEventListener("click", function() {
    // Fetch data from superheroes.php
    fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response => response.text())
        .then(data => {
            // Display the fetched HTML in an alert
            alert(data);
        })
        .catch(error => console.error('Error fetching superhero data:', error));
});