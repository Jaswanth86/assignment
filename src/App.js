// App.js
import React, {useState} from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import ForecastCard from './components/ForecastCard'

function App() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)
  const API_KEY = '33603b8a9ca3ea259a4c1fc6c9a03bae'

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      )
      const data = await response.json()

      if (data.cod === '404') {
        setError('City not found')
        setWeatherData(null)
        return
      }

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`,
      )
      const forecastData = await forecastResponse.json()

      setWeatherData({
        current: data,
        forecast: forecastData.list
          .filter((item, index) => index % 8 === 0)
          .slice(0, 5),
      })
      setError(null)
    } catch (err) {
      setError('Failed to fetch weather data')
      setWeatherData(null)
    }
  }

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={fetchWeatherData}>Search</button>
      </div>

      {error && <div className="error">{error}</div>}

      {weatherData && (
        <div className="weather-container">
          <WeatherCard data={weatherData.current} />
          <div className="forecast-container">
            {weatherData.forecast.map((day, index) => (
              // Suppressing the ESLint warning for using index as a key
              // eslint-disable-next-line react/no-array-index-key
              <ForecastCard key={index} data={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
