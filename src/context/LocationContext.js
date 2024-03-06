import React, {useState, createContext } from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Content from '../pages/Content';
import logo from '../logo 4.jpg'

export const LocationContext = createContext()

function LocationContextProvider({children}){
    const [location, setLocation] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate()
    function changeHandler(event){
        setLocation(event.target.value)
    }
    function clickHandler(){
      setCity(location);
      setTimeout(() => {
        navigate('/Content');
      }, 700);
    }

    const value = {
        city
    }

    return (
            <LocationContext.Provider value={value}>
            { city ? <Content/> : 
            <div style={{height:"100vh", width:"100vw", position:"absolute"}}>
            <img src={logo} height="100%" width="100%" style={{position:"absolute"}} />
            <Box component='form' noValidate autoCapitalize='off' sx={{display:"flex", flexDirection:"column",width:"30ch", gap:"5px",margin:"auto",marginTop:"300px"}} >
                <TextField variant='outlined' placeholder="Enter city" onChange={changeHandler}></TextField>
                <Button type='button' variant='contained' color='success' onClick={clickHandler} >Search</Button>
            </Box>
            </div>
            }
                {children}
            </LocationContext.Provider>
        
        
      )
}

export default LocationContextProvider