import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';


export default function InfoBox({weatherData}) {
    const init_url="https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
    return (
        <div className="infoBox">
            
             <Card>
      <CardMedia
        sx={{ height: 220 }}
        image={init_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherData.city}
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