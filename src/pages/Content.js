import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContext'
import { LocationContext } from '../context/LocationContext';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AirIcon from '@mui/icons-material/Air';
import thunderstorm from '../bad-weather-meadow-landscape-mah0cuqoos27pbyl.jpg'
import drizzle from '../Rain.webp'
import rain from '../pexels-pixabay-459451.jpg'
import smoke from '../tree-832079_1280.jpg'
import cloud from '../164653-free-download-cloudy-weather-hd-wallpaper-wallpapercharlie.jpg'
import snow from '../bbeb66cc27ed2e0a5b94e6b1d3e85d5f.jpg'
import clear from '../desktop-wallpaper-clear-weather-1280-x-800-weather.jpg'

const Content = () => {
  const {weather} = useContext(WeatherContext);
  const {city} = useContext(LocationContext)
  if(weather){
    console.log(weather)
    return (
      <div className='container'>
      {weather[0].weather[0].main === "Thunderstorm" && <img src={thunderstorm} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>} 
      {weather[0].weather[0].main === "Drizzle" && <img src={drizzle} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      {weather[0].weather[0].main === "Rain" && <img src={rain} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      {weather[0].weather[0].main === "Snow" && <img src={snow} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      {weather[0].weather[0].main === "Clouds" && <img src={cloud} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      {weather[0].weather[0].main === "Clear" && <img src={clear} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      {weather[0].weather[0].id > 700 && weather[0].weather[0].id < 800 && <img src={smoke} width="100%" height="100%" style={{position:"absolute", zIndex:"-5"}}/>}
      <div className='left'>
        <div className='tempContainer'>
        <div className='city'>{city}</div>
        <div className='temp'>{weather[0].main.temp}<div>&#176;</div>C</div>
        <div className='main'>{weather[0].weather[0].main}</div>
        </div>
        <div className='Wrapper'>
          <div className='feelsLikeContainer'>
            <div><DeviceThermostatIcon/> Feels Like</div>
            <div className='feelsLike'>{weather[0].main.feels_like}<div>&#176;</div>C</div>
          </div>
          <div className='humidityContainer'>
            <div><WaterDropIcon/> Humidity</div>
            <div>{weather[0].main.humidity} %</div>
          </div>
        </div>
        <div className='Wrapper'>
          <div className='visibilityContainer'>
            <div ><VisibilityIcon/> Visibility</div>
            <div>{weather[0].visibility} m</div>
          </div>
          <div className='pressureContainer'>
            <div><AirIcon/> Pressure</div>
            <div>{weather[0].main.pressure} hPa</div>
          </div>
        </div>
      </div>
      <div className='right'>
        <div className='windContainer'>
          <div className='wind'>
            <div>Wind Degree</div>
            <div>{weather[0].wind.deg}&#176;</div>
          </div>
          <div className='wind'>
            <div>Wind Speed</div>
            <div>{weather[0].wind.speed} m/s</div>
          </div>
          <div className='wind'>
          <div>Wind Gusts</div>
          {weather[0].wind.gust ? (<div>{weather[0].wind.gust}m/s</div>) :(<div>NA</div>) }
          </div>
          <div className='cloud'>
            <div>Cloudiness</div>
            <div>{weather[0].clouds.all} %</div>
          </div>
        </div>
        <div className='RainContainer'>
        <div className='rain'>
          <div>Rain (1 Hours)</div>
          {weather[0].rain ? (weather[0].rain["1h"] ? (<div>{weather[0].rain["1h"]} mm</div>) :(<div>NA</div>)) : (<div>NA</div>)}
        </div>
        <div className='rain'>
          <div>Rain (3 Hours)</div>
          {weather[0].rain ? (weather[0].rain["3h"] ? (<div>{weather[0].rain["3h"]} mm</div>) :(<div>NA</div>)) : (<div>NA</div>)}
        </div>
        <div className='snow'>
          <div>Snow (1 Hours)</div>
          {weather[0].snow ? (weather[0].snow["1h"] ? (<div>{weather[0].snow["1h"]} mm</div>) :(<div>NA</div>)) : (<div>NA</div>)}
        </div>
        <div className='snow'>
          <div>Snow (3 Hours)</div>
          {weather[0].snow ? (weather[0].snow["3h"] ? (<div>{weather[0].snow["3h"]} mm</div>) :(<div>NA</div>)) : (<div>NA</div>)}
        </div>
        </div>
        <div className='MinMaxContainer'>
          <div className='MinMax'>
            <div className='MinMaxTemp'>
              <div>Min Temp</div>
              <div>{weather[0].main.temp_min}&#176;C</div>
            </div>
            <div className='MinMaxTemp'>
              <div>Max Temp</div>
              <div>{weather[0].main.temp_max}&#176;C</div>
            </div>
            
          </div>
          <div className='Ground'>
            <div className='AtmPressure'>
              <div>Pressure (Sea Level)</div>
              {weather[0].main.grnd_level ? (<div>{weather[0].main.grnd_level} hPa</div>) :(<div>NA</div>) }
            </div>
            <div className='AtmPressure'>
              <div>Pressure (Ground Level)</div>
              {weather[0].main.sea_level ? (<div>{weather[0].main.sea_level} hPa</div>) :(<div>NA</div>) }
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Content