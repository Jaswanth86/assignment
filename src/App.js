import {useState, Component} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherData from './components/WeatherCards'
import Forecast from './components/Forecast'
import './App.css'

class App extends Component {
  render() {
    const SearchInput = this.SearchBar
    const {weatherData} = this
    const {forecastData} = this
    return (
      <div>
        <SearchBar onchange={this.onchange} />
        <WeatherData
          currenttemp={weatherData.temperature}
          Humidity={weatherData.Humidity}
          windspeed={weatherData.wind}
          cityName={SearchInput}
        />
        <Forecast
          forecastDate={forecastData.forecastDate}
          forecasttemp={forecastData.temperature}
          forecastcondition={forecastData.forecastcondition}
        />
      </div>
    )
  }
}

export default App
