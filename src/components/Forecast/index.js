import {useState} from 'react'
import './index.css'

const Forecast = () => {
  const {ForecastData} = useState()
  const {forecastDate, forecasttemp, forecastcondition} = ForecastData

  return (
    <div className="forecastlist">
      <p>{forecastDate}</p>
      <p>{forecasttemp}</p>
      <p>{forecastcondition}</p>
    </div>
  )
}
export default Forecast
