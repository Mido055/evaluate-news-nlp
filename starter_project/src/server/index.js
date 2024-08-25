//Server
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist', {
    setHeaders: function (res, path) {
        if (path.endsWith('.css')) {
            res.set('Content-Type', 'text/css');
        }
    }
}));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.post('/api/analyze', async (req, res) => {
    const urlToAnalyze = req.body.url;
    const fetch = (await import('node-fetch')).default; // Dynamically import fetch

    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${encodeURIComponent(urlToAnalyze)}&lang=en`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error with sentiment analysis:', error);
        res.status(500).send({ error: 'Unable to analyze sentiment' });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
