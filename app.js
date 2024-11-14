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
            // Format the superhero list by wrapping it in HTML tags as a string
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            const aliases = Array.from(doc.querySelectorAll('li')).map(li => li.textContent);
            
            // Construct the HTML-like structure as a string
            let formattedList = "<ul>";
            aliases.forEach(alias => {
                formattedList += `<li>${alias}</li>`;
            });
            formattedList += "</ul>";

            // Display the formatted list in an alert box
            alert("Superheroes:\n" + formattedList);
        })
        .catch(error => console.error('Error fetching superhero data:', error));
});