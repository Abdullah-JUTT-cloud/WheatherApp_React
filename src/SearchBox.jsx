import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import './SearchBox.css';
import Alert from '@mui/material/Alert';

export default function SearchBox({updateWeatherData}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="aaf2de96b8ab5555be7fc73f2f76a1fe";
    let [city, setCity] = useState("");
    let[error,setError]=useState(false);
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = async(e) => {
        try{
            e.preventDefault();
        console.log("Searching for city:", city);
        
        fetchWheather();
        let weatherData= await fetchWheather({updateWeatherData});
        updateWeatherData(weatherData);
        setCity("");
        }catch(err){
            setError(true);
            console.log("Error in handleSubmit:", err);
        }
        
        
    }
    let fetchWheather = async () => {
        try{
              let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let data= await response.json();
           
            let result={
                city:city,
                temperature:data.main.temp,
                humidity:data.main.humidity,
                tempMin:data.main.temp_min,
                tempMax:data.main.temp_max,
                feelsLike:data.main.feels_like,
                weather:data.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(err){
            console.log("Error fetching weather data:", err);
            throw err;
        }
     
    }
    
  return (
    <div className="searchBox">
      <h3>Search for Wheather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField id="city" required label="City Name" variant="outlined" onChange={handleChange} value={city} />
        <br /><br />
         <Button type="submit" variant="contained" >
        Search
      </Button>
    {error && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                        Error fetching data. Please check the city name.
                    </Alert>
                )}
      </form>
    </div>
  );
}
