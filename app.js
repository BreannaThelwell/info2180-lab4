//used to fetch superhero data

document.getElementById("searchButton").addEventListener("click", function() {
    console.log("Search button clicked");  // Debugging statement
    
    // Fetch data from superheroes.php
    fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log("Data fetched:", data);  // Debugging statement
            alert(data);
        })
        .catch(error => {
            console.error('Error fetching superhero data:', error);
        });
});