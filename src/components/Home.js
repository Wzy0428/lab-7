import React, { useState, useEffect } from 'react';

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //Fetch weather data from the backend API (use localhost for development)
    const apiUrl = "http://localhost:8888/.netlify/functions/api/weather"; 

    const fetchWeather = async () => {
      try {
        const response = await fetch(apiUrl); //Call the weather API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="text-center my-5">
      <h1 className="display-4">
        Hi, I'm Zhiying! <br /> Welcome to My Portfolio
      </h1>
      <br />
      <p className="lead">
        Cybersecurity Research | Full-Stack Developer | Coop at the NSERC CREATE Cybersecurity Program
      </p>
      <br />
      <img
        src="profile.jpeg"
        alt="Zhiying Wu, a third-year computer science student"
        className="img-fluid rounded-circle"
        width="500"
      />

      {/* Weather Information */}
      <div className="weather-info mt-5">
        {loading && <p>Loading weather...</p>}
        {error && <p>Error: {error}</p>}
        {weather && (
          <div className="mb-4 p-3 bg-light border rounded">
            <h3>Weather in {weather.city}, {weather.country}</h3>
            <p>
              <strong>Temperature:</strong> {weather.temperature.current}°C 
              (Feels like: {weather.temperature.feels_like}°C, 
              Min: {weather.temperature.min}°C, Max: {weather.temperature.max}°C)
            </p>
            <p><strong>Humidity:</strong> {weather.humidity}%</p>
            <p>
              <strong>Wind:</strong> {weather.wind.speed} m/s, {weather.wind.direction}°
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
