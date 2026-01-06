import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({weatherData}) {
    const init_url="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot="https://plus.unsplash.com/premium_photo-1689298477277-7e488d5ecc10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://images.unsplash.com/photo-1649140063428-5c9025684b96?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainy="https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const snowy="https://images.unsplash.com/photo-1577928614565-ef010b14b8bb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    return (
        <div className="infoBox">
            
             <Card>
      <CardMedia
        sx={{ height: 220 }}
        image={weatherData.temperature >= 22 ? hot : (weatherData.temperature <= 0 ? snowy : (weatherData.weather.includes("rain") ? rainy : cold))}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherData.city} {weatherData.temperature >= 22 ? <SunnyIcon /> : (weatherData.temperature <= 0 ? <SevereColdIcon /> : (weatherData.weather.includes("rain") ? <ThunderstormIcon /> : <AcUnitIcon />))}
        </Typography>
        <Typography variant="body2" component={"span"} sx={{ color: 'text.secondary' }}>
         <div>Temperature={weatherData.temperature}&deg;C</div>
            <div>Humidity={weatherData.humidity}%</div>
            <div>Temp Min={weatherData.tempMin}&deg;C</div>
            <div>Temp Max={weatherData.tempMax}&deg;C</div>
            <div>Feels Like={weatherData.feelsLike}&deg;C</div>
            <div>The weather is described as {weatherData.weather}</div>
        </Typography>
      </CardContent>
    
    </Card>
        </div>
    );
}