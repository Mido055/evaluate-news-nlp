async function handleSubmit(event) {
  event.preventDefault();
  const formUrl = document.getElementById("name").value;

  try {
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: formUrl }),
    });
    const data = await response.json();
    console.log("API Response:", data);
    updateUI(data);
  } catch (error) {
    console.error("Error fetching analysis:", error);
    document.getElementById("results").innerText =
      "Failed to fetch analysis: " + error.message;
  }
}

function updateUI(apiData) {
  const resultsElement = document.getElementById("results");

  if (apiData && apiData.status && apiData.status.code === "0") {
    const sentenceList = apiData.sentence_list || [];
    const firstSentence = sentenceList[0] || {};

    resultsElement.innerHTML = `
            <p>Polarity: ${apiData.score_tag || "N/A"}</p>
            <p>Subjectivity: ${apiData.subjectivity || "N/A"}</p>
            <p>Text: ${firstSentence.text || "No text available"}</p>
        `;
  } else {
    resultsElement.innerHTML = `<p>Error: ${
      apiData.status.msg || "Unknown error"
    }</p>`;
  }
}

export { handleSubmit };
