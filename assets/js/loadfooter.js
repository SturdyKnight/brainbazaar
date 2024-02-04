// loadFooter.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to dynamically load the footer
    function loadFooter() {
        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Set the path to your footer.html file
        xhr.open("GET", "footer.html", true);

        // Define what happens on successful data submission
        xhr.onload = function () {
            // Check if the request was successful
            if (xhr.status >= 200 && xhr.status < 300) {
                // Create a new div element
                var footerContainer = document.createElement("div");

                // Set the inner HTML of the new div to the received HTML from footer.html
                footerContainer.innerHTML = xhr.responseText;

                // Append the new div to the body of the document
                document.body.appendChild(footerContainer);

                console.log("Footer is loaded successfully!");
            } else {
                console.error("Failed to load footer. Status: " + xhr.status);
            }
        };

        // Define what happens in case of an error
        xhr.onerror = function () {
            console.error("Error occurred while loading footer.");
        };

        // Send the request to load the footer.html file
        xhr.send();
    }

    // Call the function to load the footer
    loadFooter();
});
