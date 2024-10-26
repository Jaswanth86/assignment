// components/WeatherCard.js
import React from 'react'

function WeatherCard({data}) {
  return (
    <div className="weather-card">
      <h2>Current Weather in {data.name}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt={data.weather[0].description}
        />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <p className="condition">{data.weather[0].description}</p>
        <div className="details">
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind Speed: {data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
