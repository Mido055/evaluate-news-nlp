import { checkForName } from './nameChecker';

// Define the server URL
const serverURL = 'https://localhost:8000/api';

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Now, safely access the DOM elements
    const form = document.getElementById('urlForm');
    if (form) {
        form.addEventListener('submit', handleSubmit);
    }
});

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Example code that checks the submitted name
    checkForName(formText);

    // Check if the URL is valid and send it to the server using the serverURL constant
    // Add your logic here
}

// Export the handleSubmit function
export { handleSubmit };
