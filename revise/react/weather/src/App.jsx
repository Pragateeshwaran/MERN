import { useState } from 'react'
import './App.css'

const apiKey = 'ae086562efb729916215919e4caced5c'

function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)

  const update = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    const data = await res.json()
    setWeather(data)
  }

  return (
    <>
      {weather && weather.main ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      ) : (
        <>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={update}>Get Weather</button>
        </>
      )}
    </>
  )
}

export default App
