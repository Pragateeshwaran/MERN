import { useState } from 'react';
import './App.css';

const API_KEY = 'ae086562efb729916215919e4caced5c'; // Replace with your real API key

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      console.log(data); // Debug

      if (data.cod !== 200) {
        alert(`Error: ${data.message}`);
        return;
      }

      setWeather(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  return (
    <div className="app">
      <h1>Weather App 🌦️</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {weather && weather.main && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>🌡 Temperature: {weather.main.temp} °C</p>
          <p>🌬 Wind Speed: {weather.wind.speed} m/s</p>
          <p>📝 Condition: {weather.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
