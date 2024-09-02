import { nameChecker } from './nameChecker';

const serverURL = 'http://localhost:8000/api';

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Validate the URL
    if (nameChecker(formText)) {
        // If the URL is valid, proceed with sending data to the server
        console.log("Sending data to the server...");
        
        // Add your logic here to send the URL to the server using the serverURL constant
        fetch(serverURL, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText }),
        })
        .then(res => res.json())
        .then(function(res) {
            // Handle the response from the server
            document.getElementById('results').innerHTML = `
                <p><strong>Polarity:</strong> ${res.polarity}</p>
                <p><strong>Subjectivity:</strong> ${res.subjectivity}</p>
                <p><strong>Text:</strong> ${res.text}</p>
            `;
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while processing your request.");
        });
    } else {
        console.log("URL validation failed. Request not sent.");
    }
}

export { handleSubmit };
