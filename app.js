//used to fetch superhero data

document.getElementById("searchButton").addEventListener("click", function() {
    console.log("Search button clicked");  // Debugging statement

    // Fetch data from superheroes.php
    fetch('superheroes.php')  // Relative path to the PHP file
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log("Data fetched:", data);  // Debugging statement
            alert(data);  // Display the data in an alert
        })
        .catch(error => console.error('Error fetching superhero data:', error));
});