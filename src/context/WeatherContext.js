import { useState, useEffect, createContext, useContext} from "react";
import {ApiKey} from '../ApiKey';
import { AltitudeContext } from "./AltitudeContext";
import Content from "../pages/Content";

export const WeatherContext = createContext([])

function WeatherContextProvider({children}){
    const {latitude, longitude} = useContext(AltitudeContext);
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
          fetchData();
        }
    },[latitude,longitude]);
    async function fetchData(){
        try{
          let DataUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;
          const response = await fetch(DataUrl);
          const data = await response.json();
          setWeather(prevWeatherData => [...prevWeatherData,data]);
          setLoading(false);
        }
        catch (error){
          console.log("Error")
          setLoading(false)
        }
    }
    const value = {
        weather,
        setWeather
    }
    return(
      <WeatherContext.Provider value={value}>
      {weather.length > 0 && <Content/>}
      {children}
      </WeatherContext.Provider>
    ) 
}

export default WeatherContextProvider