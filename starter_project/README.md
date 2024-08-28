# NLP News Article Evaluation Tool

## Project Description

This project is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. It uses the Aylien API to analyze the content of the articles, classifying them based on their polarity (positive, negative, or neutral) and subjectivity (opinion-based or factual). The project is built using Node.js, Express.js, Webpack, and SCSS, and it includes unit testing with Jest.


## Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/nlp-news-article-evaluation.git
  
   
2. **Install Dependencies:**
Install the required npm packages:
   ```bash
   npm install
```
3. Set Up Environment Variables:

Create a ` .env" file in the root directory of the project and add your Aylien API credentials:
```bash
API_ID=your-aylien-api-id 
API_KEY=your-aylien-api-key
```
**Running the Project**

Development Mode
To start the development server with live reloading:
```bash
npm run build-dev
```
This will open the project in your default browser at " http://localhost : 3000'.
Production Mode
To build the project for production:
```bash
npm run build-prod 
```
Then, start the Express server:
```bash
npm start
```

Running Tests To run unit tests with Jest:
```bash

npm run test
```
**Project Features**
. NLP Analysis: Uses the Aylien API to classify articles or blogs based on their content.
. Responsive Design: The project is styled using SCSS and supports different screen sizes.
. Unit Testing: Includes unit tests for key functionalities using Jest.
. Service Worker: The project is configured to work offline using service workers in the production build.


**Dependencies**
. "express": Web server framework for Node.js
. 'cors": Middleware for handling Cross-Origin Resource Sharing (CORS)
. "dotenv": Loads environment variables from a " .env' file
. "webpack": Module bundler for JavaScript files
. 'babel-loader", "@babel/core", "@babel/preset-env": For transpiling modern JavaScript
. 'sass-loader", "css-loader', 'style-loader", "node-sass": For handling and compiling SCSS files
. "html-webpack-plugin": Simplifies the creation of HTML files to serve Webpack bundles
. "jest": JavaScript testing framework
. "jest-environment- jsdom": Test environment for running tests in a simulated browser environment

**License**
This project is licensed under the MIT License - see the LICENSE file for details.

**Acknowledgments**
. Aylien API for providing the NLP services.
. Udacity for the starter code and project guidelines.