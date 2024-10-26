// components/ForecastCard.js
import React from 'react'

function ForecastCard({data}) {
  const date = new Date(data.dt * 1000)

  return (
    <div className="forecast-card">
      <h3>{date.toLocaleDateString()}</h3>
      <img
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt={data.weather[0].description}
      />
      <p className="temp-high">High: {Math.round(data.main.temp_max)}°C</p>
      <p className="temp-low">Low: {Math.round(data.main.temp_min)}°C</p>
      <p className="condition">{data.weather[0].description}</p>
    </div>
  )
}

export default ForecastCard
