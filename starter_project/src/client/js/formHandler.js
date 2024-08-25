//form handelr 

async function handleSubmit(event) {
    event.preventDefault();
    const formUrl = document.getElementById('name').value;

    try {
        const response = await fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: formUrl })
        });
        const data = await response.json();
        console.log("Data parsed:", data);
        updateUI(data);
    } catch (error) {
        console.error('Error fetching analysis:', error);
        document.getElementById('results').innerText = 'Failed to fetch analysis: ' + error.message;
    }
}

function updateUI(apiData) {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML = `
        <p>Polarity: ${apiData.polarity}</p>
        <p>Subjectivity: ${apiData.subjectivity}</p>
        <p>Text: ${apiData.text}</p>
    `;
}

export { handleSubmit };