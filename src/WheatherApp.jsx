import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx'
import { useState } from 'react';
export default function WheatherApp(){
    const [weatherData,setWheatherData]=useState({
         city:"lahore",
        temperature:25,
        humidity:60,
        tempMin:20,
        tempMax:30,
        feelsLike:24,
        weather:"mist",
    });
    let updateWeatherData=(newData)=>{
        setWheatherData(newData);
    }
 return(
    <>
        <h1 style={{textAlign:'center'}}>Wheather Widget!</h1>
          <SearchBox updateWeatherData={updateWeatherData}/>
      <InfoBox weatherData={weatherData}/>
    </>
 )
}