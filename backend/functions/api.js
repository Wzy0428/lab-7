const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); 

const fetch = require('node-fetch'); 

const app = express();
const router = express.Router();

app.use(cors());

//Define the OpenWeather API URL using the API key from environment variables
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&units=metric&appid=${process.env.REACT_APP_SEC_API}`;  // Make sure the API key name matches what you set in your .env

//Weather API route
router.get('/weather', async (req, res) => {
  try {
    const response = await fetch(weatherAPI);
    const data = await response.json();

    //Check if the required data exists before using it
    if(data.sys && data.sys.country) {
      const weatherData = {
        city: data.name,
        country: data.sys.country,
        temperature: {
          current: data.main.temp,
          feels_like: data.main.feels_like,
          min: data.main.temp_min,
          max: data.main.temp_max,
        },
        wind: {
          speed: data.wind.speed,
          direction: data.wind.deg,
        },
        humidity: data.main.humidity,
      };
      //Send the data as a JSON response
      res.status(200).json(weatherData);
    } else {
      //Handle case where country or sys is missing
      console.error("Error: Missing 'sys' or 'country' in API response", data);
      res.status(500).json({ msg: "Weather data format is incorrect." });
    }
  } catch (err) {
    console.error("Error fetching weather data:", err);
    res.status(500).json({ msg: "Internal Server Error." });
  }
});

//Projects API route
router.get('/projects', (req, res) => {
    const projects = [
      {
        id: 1,
        title: "Project 1: Geriatric Psychiatry Green Card",
        link: "https://github.com/Wzy0428/geriatric-psychiatry-green-card-main",
        description: "An online medical resource platform to assist healthcare professionals in geriatric psychiatry by providing secure access to critical medical data and patient care guidelines.",
        author: "Zhiying Wu",
        languages: ["Node.js", "React.js"],
        skills: [
          "Built with Node.js and React.js for server-side operations and user interface.",
          "Collaborated with a team of 7 developers.",
          "Implemented unit testing with GitLab pipelines.",
          "Integrated Two-Factor Authentication (2FA) for security.",
          "Optimized for desktop, tablet, and mobile responsiveness."
        ]
      },
      {
        id: 2,
        title: "Project 2: PHP",
        link: "https://github.com/Wzy0428/php",
        description: "A web-based event listing and registration system to streamline event organization and management.",
        author: "Zhiying Wu",
        languages: ["PHP", "MySQL", "JavaScript"],
        skills: [
          "Developed using HTML, CSS, JavaScript, PHP, and MySQL.",
          "Created secure login systems and admin dashboards.",
          "Handled database operations and ensured real-time management.",
          "Enhanced security with session management and token-based authentication."
        ]
      }
    ];
    res.status(200).json(projects);
  });

//Default route for testing
router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/.netlify/functions/api', router);

//Export the app for serverless function
module.exports = app;
module.exports.handler = serverless(app);

