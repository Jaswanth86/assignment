import {useState} from 'react'
import './index.css'

const WeatherData = () => {
  const {cityName, weatherDetails} = useState()
  const {currenttemp, Humidity, windspeed, weatherconditions} = weatherDetails
  return (
    <div>
      <h1>{cityName}</h1>
      <h3>`${currenttemp} C`</h3>
      <p>`$Humidity:{Humidity}%`</p>
      <p>`$Windspeed:{windspeed}`</p>
    </div>
  )
}

export default WeatherData
