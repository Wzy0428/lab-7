# Lab 7

* *Date Created*: 14/03/2025
* *Last Modification Date*: 17/03/2025

* GitLab URL: 
* Netlify URL: 
* Github URL: 


## Authors
Zhiying Wu
zh617138@dal.ca


Manual Testing
As mentioned by my TA Hardison Wang, since I'm not familiar with writing unit tests using Jest, so for this lab, I used manual testings and make sure the webpage renders without errors.

Test Cases and Results:

Theme Switcher (Light/Dark Mode)
Test Case 1: Toggle between light and dark mode
Steps:
1. Click the "Switch to Dark Mode" button.
2. Observe the theme change to dark mode.
3. Click the "Switch to Light Mode" button.
4. Observe the theme change back to light mode.

Result: The theme toggles between light and dark mode successfully.

Test Case 2: Persist theme after page refresh
Steps:
1. Set the theme to dark mode.
2. Refresh the page.
3. Observe the theme remains in dark mode.

Result: The theme persists after a page refresh.

Test Case 3: Apply theme to the entire application
Steps:
1. Toggle the theme and navigate to different pages (e.g., Home, Projects).
2. Observe the theme consistency across all pages.

Result: The theme is applied consistently across all pages.


Interactive Skill List
Test Case 1: Filter skills by searching for keywords
Steps:
1. Enter a keyword (e.g., "Frontend") in the search box.
2. Observe the skills list updating dynamically.

Result: Only skills matching the keyword is displayed.

Test Case 2: Filter skills by clicking checkboxes or buttons
Steps:
1. Click a checkbox or button to filter skills by category (e.g., "Frontend").
2. Observe the skills list updating dynamically.

Result: Only skills matching the selected category is displayed.

Test Case 3: Dynamic search results
Steps:
1. Start typing a keyword (e.g., "F").
2. Observe the skills list updating dynamically as you type.

Result: The skills list update in real-time as the user types.


Projects Page
Test Case 1: Fetch and display projects from the API
Steps:
1. Navigate to the Projects page.
2. Observe the list of projects being displayed.

Result: The projects is fetched from the API and displayed correctly with their name, author, languages, and description.

Test Case 2: Handle API errors gracefully
Steps:
1. Simulate an API error (e.g., by modifying the backend to return an error).
2. Observe the error message displayed on the Projects page.

Result: An error message is displayed if the API fails to fetch projects.


Weather Information on Home Page
Test Case 1: Fetch and display weather information
Steps:
1. Navigate to the Home page.
2. Observe the weather information being displayed.
Result: The weather information (Halifax city, temperature, humidity, wind) is fetched from the API and displayed correctly.


Responsiveness
Test Case 1: Test responsiveness on desktop, tablet, and mobile devices
Steps:
1. Open the application on a desktop browser and resize the window.
2. Use browser developer tools to simulate a mobile view.

Result: The application looks good and respond well to different screen sizes, and the hamburger menu appears on small screens and allow navigation.

## Sources Used

Bootstrap v5.0: 
https://getbootstrap.com/docs/5.0/

### File Name
index.html and index.js

*Lines ## - ##*
Line 7 && line 6-7

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

```

The code above was created by adapting the code in [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/) as shown below: 

```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

```

- <!---How---> The code in [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/) was implemented by linking the Bootstrap CSS and JavaScript files directly from a CDN (Content Delivery Network), which allows for an efficient way to access and utilise the latest version of Bootstrap without needing to download the files.
- <!---Why---> [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/)'s Code was used because it provides a robust framework that simplifies the process of creating responsive and modern web designs. 
- <!---How---> [Bootstrap v5.0](https://getbootstrap.com/docs/5.0/)'s Code was modified by adding custom styles for more personalised UI elements in the About.js, Footer.js, Header.js, Home.js, NotFound.js and Projects.js. For example, in the About.js file, the text alignment and padding were adjusted, and in the Projects.js file, background colours and padding were customised to create a visually appealing and engaging layout.


### File Name
App.js

*Lines ## - ##*
Line 1-32

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home'; 
import About from './components/About';
import Projects from './components/Projects';
import NotFound from './components/NotFound'; 
import Skills from './components/Skills';
import React from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <ThemeSwitcher /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/react/react_router.asp) as shown below: 

```
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

```

- <!---How---> The code in [w3schools](https://www.w3schools.com/react/react_router.asp) was implemented by importing and using the BrowserRouter component from react-router-dom to handle routing in the application. The Routes component is used to define multiple Route components that link different paths to specific components like Home, About, Projects, and NotFound. The Header and Footer components are added to the layout for consistency across pages.
- <!---Why---> [w3schools](https://www.w3schools.com/react/react_router.asp)'s Code was used because it provides a simple way to handle routing within a React application. 
- <!---How---> [w3schools](https://www.w3schools.com/react/react_router.asp)'s Code was modified by modifying the routes to reflect the different pages of the personal portfolio, such as the Home, About, Skills, and Projects components. Also, customising the layout by adding the Header and Footer components that appear on every page, and updating the Route paths to match the project’s structure. Including a ThemeSwitcher component to enable theme customisation.



### File Name
Header.js

*Lines ## - ##*
Line 1-32

```
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Zhiying's Portfolio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: '40px' }}> 
              <li className="nav-item" style={{ margin: '10px' }}>
                <Link className="nav-link active" to="/" aria-label="Go to Home page">Home</Link>
              </li>
              <li className="nav-item " style={{ margin: '10px' }}>
                <Link className="nav-link" to="/about" aria-label="Go to About page">About</Link>
              </li>
              <li className="nav-item" style={{ margin: '10px' }}>
                <Link className="nav-link" to="/projects" aria-label="Go to Projects page">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

```

The code above was created by adapting the code in [Lab6: Tutorial video codes from TA Hardison Wang](https://ca.bbcollab.com/guest/43ed01fcfba449b1aae234d5b0bc6520) as shown below: 

```
function Header () {
   Return (
   <h1> This is my header</h1>
   );
}

```

- <!---How---> The code in [Lab6: Tutorial video codes from TA Hardison Wang](https://ca.bbcollab.com/guest/43ed01fcfba449b1aae234d5b0bc6520) was implemented by using a simple Header function that returns JSX to display a header. In the original code, the header was very simple (<h1> This is my header</h1>), whereas in this case, I enhanced it by using the react-router-dom package to create a responsive navigation bar with links to different pages of the portfolio (Home, About, Projects).
- <!---Why---> [Lab6: Tutorial video codes from TA Hardison Wang](https://ca.bbcollab.com/guest/43ed01fcfba449b1aae234d5b0bc6520)'s Code was used because because it provided a basic structure for creating a header in a React component.  
- <!---How---> [Lab6: Tutorial video codes from TA Hardison Wang](https://ca.bbcollab.com/guest/43ed01fcfba449b1aae234d5b0bc6520)'s Code was modified by sdding the react-router-dom package to implement navigation links (Link) to different pages (Home, About, Projects), replacing the basic <h1> tag with a more complex navigation bar using Bootstrap 5 to make it responsive, and adding additional Bootstrap classes for styling and responsiveness, such as navbar, navbar-expand-lg, navbar-light, and bg-light, along with the button to toggle the navbar on smaller screens.


### File Name
Netlify.toml

*Lines ## - ##*
Line 1-6

```
[build]
  functions = "backend/functions"
  node_bundler = "esbuild"

[functions]
  node_bundler = "esbuild"

```

The code above was created by adapting the code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) as shown below: 

```
[build]
 functions = "functions"
 node_bundler = "esbuild"
[functions]
 node_bundler = "esbuild"

```

- <!---How---> The code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) was implemented by defining the [build] and [functions] sections in the Netlify.toml configuration file. The [build] section specifies the directory where serverless functions are located, and the node_bundler is set to esbuild to optimize function bundling. The [functions] section ensures that all functions use esbuild for efficient bundling.
- <!---Why---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used because it provides a standardised and recommended approach for configuring Netlify serverless functions in a full-stack web application.
- <!---How---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was modified by change the functions directory path from "functions" to "backend/functions", aligning with the project's structure.


### File Name
src/api.js

*Lines ## - ##*
Line 1-19

```
const express = require('express');
const serverless = require('serverless-http');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const router = express.Router();

app.use(cors());

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/.netlify/functions/api', router); 

module.exports = app;
module.exports.handler = serverless(app); 

```

The code above was created by adapting the code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) as shown below: 

```
const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();
module.exports.handler = serverless(app);

const router = express.Router();
router.get('/', (req, res) => {
 res.json({
 message: "Hello World!"
 });
});

app.use('/.netlify/functions/api', router);
module.exports = app;

```

- <!---How---> The code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) was implemented by using Express.js to create a simple API and configuring it as a Netlify serverless function using serverless-http. The dotenv package was included to manage environment variables, and cors middleware was added to allow cross-origin requests. The router handles a GET request at the root (/), returning a JSON response with "Hello World!". Finally, the application is mounted under /.netlify/functions/api, making it accessible as a serverless function on Netlify.
- <!---Why---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used because it provides a straightforward and efficient approach to deploying an Express.js backend as a serverless function on Netlify.
- <!---How---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was modified by removing unnecessary dependencies like axios and node-fetch, which were not required for this project. The serverless handler (module.exports.handler = serverless(app);) was moved to the end for better readability.


### File Name
Backend/package.json

*Lines ## - ##*
Line 6-10

```
  "scripts": {
    "start": "netlify-lambda serve src",
    "build": "netlify-lambda build src",
    "test": "echo \"Error: no test specified\" && exit 1"
  },

```

The code above was created by adapting the code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) as shown below: 

```
 "scripts": {
 "start": "netlify-lambda serve src",
 "build": "netlify-lambda build src",
 "test": "echo \"Error: no test specified\" && exit 1"
 },

```

- <!---How---> The code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) was implemented by configuring Netlify Lambda scripts inside the package.json file to manage serverless functions efficiently: The start script runs netlify-lambda serve src, which starts a local development server to test serverless functions, and the build script compiles functions using netlify-lambda build src, making them ready for deployment.
- <!---Why---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used because Netlify Lambda is a convenient tool for developing and deploying serverless functions. Using netlify-lambda serve allows local testing before deployment, ensuring that API endpoints function correctly.
- <!---How---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used without modification. 


### File Name
backend/aspi.js

*Lines ## - ##*
Line 1-52, 90-99

```
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

router.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);

```

The code above was created by adapting the code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) as shown below: 

```
const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const fetch = (...args) =>
import('node-fetch').then(({default: fetch}) => fetch(...args));
dotenv.config();
const app = express();
const router = express.Router();
app.use(cors());
const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=halifax,ca&&units
=metric&appid=${process.env.WEATHER_API_KEY}`;
router.get('/weather', async (req, res) => {
 fetch(weatherAPI)
 .then(res => res.json())
 .then(json => console.log(json))
 .catch(err => console.error('error:' + err));
try {
let response = await fetch(weatherAPI);
 response = await response.json();
// Extract required fields
const weatherData = {
 city: response.name,
 country: response.sys.country,
 temperature: {
 current: response.main.temp,
 feels_like: response.main.feels_like,
 min: response.main.temp_min,
 max: response.main.temp_max,
 },
 wind: {
 speed: response.wind.speed,
 direction: response.wind.deg
 },
 humidity: response.main.humidity
 };
 res.status(200).json(weatherData);
 } catch (err) {
console.log(err);
 res.status(500).json({msg: `Internal Server Error.`});
 }
});
// Home route
router.get('/', (req, res) => {
 res.json({
 message: "Hello World!"
 });
});
app.use('/.netlify/functions/api', router);
module.exports = app;
module.exports.handler = serverless(app);

```

- <!---How---> The code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) was implemented by setting up a serverless Express.js API that fetches weather data from OpenWeather API and returns it in a structured JSON format. The key components include: Express.js Router (Handles API requests efficiently),dotenv Configuration (Loads environment variables, ensuring secure API key management), CORS Middleware (Allows cross-origin requests to prevent browser security issues), fetch API Usage (Calls the OpenWeather API asynchronously), and Error Handling (Ensures proper responses for missing data or failed requests)
- <!---Why---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used because it provides a simple way to fetch and serve weather data using a serverless approach with Netlify Lambda functions.
- <!---How---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was modified by changing .then() chains to async/await is used for better readability, Adding data validation to checks if sys and country exist before processing the response, and logs an error and returns a proper JSON response if they are missing. The API key reference was updated to process.env.REACT_APP_SEC_API to match project configurations.


### File Name
src/Projects.js

*Lines ## - ##*
Line 1-23

```
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/.netlify/functions/api/projects') 
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

```

The code above was created by adapting the code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) as shown below: 

```
import { useEffect, useState } from "react";
function MyComponent() {
 const [data, setData] = useState(null);
 useEffect(() => {
 fetch("https://jsonplaceholder.typicode.com/posts/1")
 .then((response) => response.json())
 .then((data) => setData(data))
 .catch((error) => console.error("Error fetching data:", error));
 }, []); // The empty dependency array means this runs **only once** when the componen
t mounts.
 return <div>{data ? <p>{data.title}</p> : <p>Loading...</p>}</div>;
}
export default MyComponent;

```

- <!---How---> The code in [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View) was implemented by using the useState hook to manage the project data, loading state, and error messages. Also, it was implemented by using the useEffect hook to fetch project data from a Netlify serverless function (http://localhost:8888/.netlify/functions/api/projects), and handling loading and error states to provide appropriate feedback to the user.
- <!---Why---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was used because it simplifies integrating backend data into the frontend by using fetch and useState, and providing a structured approach to fetching data in a React component.
- <!---How---> [Lab 7: Develop and Deploy Full-Stack Web App with React, Express, Netlify and Amplify (How-To Guide)](https://dal.brightspace.com/d2l/le/content/361473/viewContent/4808614/View)'s Code was modified by changing the API endpoint(http://localhost:8888/.netlify/functions/api/projects), managing an array of projects using setProjects(data), and including loading and error states to provide better UI feedback.

## Artificial Intelligence Tools Used
* [ChatGPT](https://chatgpt.com/) - The AI Tool used

### Prompt Used on *NAME OF AI TOOL*

```
I want to implement a theme switcher (light/dark mode) using React state (useState), where users should be able to toggle between light mode and dark mode, and the theme should persist after page refresh (hint: use localStorage).

```

The code prompt above was used [ChatGPT](https://chatgpt.com/) to generate the code shown below: 

```
import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Theme Switcher</h1>
      <button
        className="px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;

```

#### File Name
ThemeSwitcher.js

```
import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  //Initialize the state from localStorage if available
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  //Update the theme and save it to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  //Apply the theme class to the document body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeSwitcher;

```

- <!---How---> The code in [ChatGPT](https://chatgpt.com/) was implemented by fetching the theme from localStorage when the component loads, using useState to manage the theme state (light or dark), using useEffect to apply the selected theme to the document.body and update localStorage, and providing a button that allows users to toggle between themes.
- <!---Why---> [ChatGPT](https://chatgpt.com/)'s Code was used because it leverages React best practices, including useState and useEffect, and provides a simple and efficient implementation of a theme switcher.
- <!---How---> [ChatGPT](https://chatgpt.com/)'s Code was modified by refactoring the toggleTheme function to use setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")), making it more readable, and editing the css to make the UI design more appealing. 


### Prompt Used on *NAME OF AI TOOL*

```
I want to implement an interactive skill list using React state (useState), where visitors should be able to filter skills by searching for keywords of category and by clicking (e.g. text with checkbox, buttons). Search result display is on the fly (e.g., while the visitor is typing in the search
box or checked a checkbox, before clicking any button such as ‘search’ or ‘confirm’) and
the result is populated properly on the page. 

```

The code prompt above was used [ChatGPT](https://chatgpt.com/) to generate the code shown below: 

```
import React, { useState } from "react";

const skillsData = [
  { name: "React", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
];

const categories = ["Frontend", "Backend", "Database"];

const SkillList = () => {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(skill.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Skill List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search skills..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* Category Filter */}
      <div className="flex gap-4 mb-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </div>

      {/* Skill List */}
      <ul className="border rounded p-4">
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <li key={skill.name} className="p-2 border-b last:border-0">
              {skill.name} <span className="text-gray-500">({skill.category})</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No skills found.</p>
        )}
      </ul>
    </div>
  );
};

export default SkillList;

```

#### File Name
Skills.js

```
import React, { useState } from 'react';

const skillsData = [
  { id: 1, skill: 'React', category: 'Frontend' },
  { id: 2, skill: 'Node.js', category: 'Backend' },
  { id: 3, skill: 'CSS', category: 'Frontend' },
  { id: 4, skill: 'Express.js', category: 'Backend' },
  { id: 5, skill: 'SQL', category: 'Database' },
  { id: 6, skill: 'JavaScript', category: 'Frontend' },
  { id: 7, skill: 'Java', category: 'Backend' },
  { id: 8, skill: 'HTML', category: 'Frontend' },
  { id: 9, skill: 'Firebase', category: 'Database' },
  { id: 10, skill: 'MySQL', category: 'Database' },
  { id: 11, skill: 'Cloud', category: 'Database' },
  { id: 12, skill: 'server', category: 'Backend' },
  { id: 13, skill: 'API', category: 'Backend' },
];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({
    Frontend: false,
    Backend: false,
    Database: false,
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories({
      Frontend: false,
      Backend: false,
      Database: false,
    });
  };

  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch =
      skill.skill.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      searchTerm.length > 0 &&
      skill.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSelectedCategory =
      selectedCategories[skill.category] || Object.values(selectedCategories).every((value) => !value);

    return (matchesSearch || matchesCategory) && matchesSelectedCategory;
  });

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>

      <input
        type="text"
        placeholder="Search for a skill or category"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <button onClick={clearFilters} className="clear-filters-button">
        Clear Filters
      </button>

      <div className="category-filters">
        <label>
          <input
            type="checkbox"
            name="Frontend"
            checked={selectedCategories.Frontend}
            onChange={handleCategoryChange}
          />
          Frontend
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            name="Backend"
            checked={selectedCategories.Backend}
            onChange={handleCategoryChange}
          />
          Backend
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            name="Database"
            checked={selectedCategories.Database}
            onChange={handleCategoryChange}
          />
          Database
        </label>
      </div>

      <div>
        {filteredSkills.length > 0 ? (
          filteredSkills.map((skill) => (
            <div key={skill.id} className="filtered-skill">
              <strong>{skill.skill}</strong> ({skill.category})
            </div>
          ))
        ) : (
          <p>No skills found matching your search or selected categories.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;

```

- <!---How---> The code in [ChatGPT](https://chatgpt.com/) was implemented in a React component that dynamically filters and displays a list of skills. It uses React's useState to manage user input for searching and filtering by category. The filtering logic updates in real time as users type or check/uncheck categories. 
- <!---Why---> [ChatGPT](https://chatgpt.com/)'s Code was used because it efficiently handles searching, filtering, and live updates.
- <!---How---> [ChatGPT](https://chatgpt.com/)'s Code was modified by adjusting the skill list structure to include unique IDs, improving the filtering logic to support both keyword searches and category selections, and adding a "Clear Filters" button to enhance user experience.

## Acknowledgments

A special thanks to my professor Gabriella Mosquera my course TA Hardison Wang, and Bootstrap v5.0 for their examples and inspiration for the implementation and development of the script.