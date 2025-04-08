import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ capital, lat, lon }) => {

    const api_key = import.meta.env.VITE_SOME_KEY
    
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        axios
          .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
          .then(response => {
            setWeatherData(response.data)
          })
    }, [lat, lon])

    if (weatherData) {
        return (
            <>
            <h2>Weather in {capital}</h2>

            <p>Temperature: {weatherData.current.temp.toFixed(0)} °C</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}@2x.png`} alt={weatherData.current.weather[0].description} />
            <p>{weatherData.current.weather[0].main}</p>
            <p>Wind speed: {weatherData.current.wind_speed.toFixed(1)} m/s</p>
            </>
        )
    }
}

export default Weather