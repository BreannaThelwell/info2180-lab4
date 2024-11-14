//used to fetch superhero data

document.getElementById("searchButton").addEventListener("click", function() {
    // Fetch data from superheroes.php
    fetch('superheroes.php')
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.text(); //html expectation
        })
        .then(data => {
            // Create a formatted string to display in the alert
            let formattedList = "Superheroes:\n";
            formattedList += data.replace(/<\/?[^>]+(>|$)/g, ""); // Remove HTML tags

            // Display the formatted list in an alert box
            alert(formattedList);
        })
        .catch(error => console.error('Error fetching superhero data:', error));
});