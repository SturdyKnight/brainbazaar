// loadHeader.js

document.addEventListener("DOMContentLoaded", function () {
    console.log("Attempting to load Header...");
    // Function to dynamically load the header
    function loadHeader() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set the path to your header.html file
        xhr.open("GET", ('/assets/Extras/head.html'), true);

        // Define what happens on successful data submission
        xhr.onload = function () {
            // Check if the request was successful
            if (xhr.status >= 200 && xhr.status < 300) {
                // Create a new div element
                var headerContainer = document.createElement("div");

                // Set the inner HTML of the new div to the received HTML from header.html
                headerContainer.innerHTML = xhr.responseText;

                // Append the new div to the body of the document
                document.body.prepend(headerContainer);

                console.log("Header is loaded successfully!");
            } else {
                console.error("Failed to load header. Status: " + xhr.status);
            }
        };

        // Define what happens in case of an error
        xhr.onerror = function () {
            console.error("Error occurred while loading header.");
        };

        // Send the request to load the header.html file
        xhr.send();
    }

    // Call the function to load the header
    loadHeader();
});
