import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="aaf2de96b8ab5555be7fc73f2f76a1fe";
    let [city, setCity] = useState("");
    let handleChange = (e) => {
        setCity(e.target.value);
    }
    let handleSubmit = (e) => {
        e.preventDefault();
        console.log("Searching for city:", city);
        
        fetchWheather();
        setCity("");
    }
    let fetchWheather = async () => {
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let data= await response.json();
           
            let result={
                temperature:data.main.temp,
                humidity:data.main.humidity,
                tempMin:data.main.temp_min,
                tempMax:data.main.temp_max,
                feelsLike:data.main.feels_like,
                description:data.weather[0].description,
            }
            console.log(result);
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
      </form>
    </div>
  );
}
