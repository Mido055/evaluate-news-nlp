var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

console.log(__dirname);

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

// Variables for url and api key
const aylien = require("aylien_textapi");

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

app.post('/api', async (req, res) => {
  const { url } = req.body;
  const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&url=${url}&lang=en`;

  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log("Full API Response: ", data); // Log the full response

      if (data.sentence_list && data.sentence_list.length > 0) {
          res.send({
              polarity: data.score_tag,
              subjectivity: data.subjectivity,
              text: data.sentence_list[0].text,
          });
      } else {
          res.send({
              polarity: "undefined",
              subjectivity: "undefined",
              text: "No text found - the URL may not contain sufficient text content for analysis.",
          });
      }
  } catch (error) {
      console.error("Error occurred: ", error);
      res.status(500).send({ error: "Failed to fetch data from external API." });
  }
});







app.get('/', function (req, res) {
    res.send("This is the server API page, you may access its services via the client app.");
});


// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


