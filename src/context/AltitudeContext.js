import { useState,useEffect, createContext, useContext } from "react";
import {ApiKey} from '../ApiKey';
import { LocationContext } from "./LocationContext";

export const AltitudeContext = createContext()

function AltitudeContextProvider({children}){
    const {city} = useContext(LocationContext)
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [loading, setLoading] = useState(true);
    async function fetchAltitude(){
        setLoading(true)
        try{
        if(city !== ""){
            const AltitudeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${ApiKey}`;
            const api = await fetch(AltitudeUrl);
            const result = await api.json();
            setLatitude(result[0].lat);
            setLongitude(result[0].lon);
          }
        }
        catch (error){
          console.log("Error")
        }
        setLoading(false)
    }
    
    useEffect(() => {
        fetchAltitude()
    },[city]);

    const value = {
        latitude,
        longitude
    };

    return <AltitudeContext.Provider value={value}>
        {children}
    </AltitudeContext.Provider>


}

export default AltitudeContextProvider