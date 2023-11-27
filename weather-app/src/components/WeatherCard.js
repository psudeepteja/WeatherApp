import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../styles/index.css'
import formatTime from '../utils/formateTime';

const WeatherCard = ({ data }) => {
    if (!data) {
        return <h4>No data available</h4>;
    }
    const sunrise = new Date(data?.sys?.sunrise * 1000);
    const sunset = new Date(data?.sys?.sunset * 1000);

    const { main } = data;
    const temperatureInCelsius = main?.temp - 273.15;

    return (
        <Card sx={{ backgroundColor: "#4c86c3", color: "white" }}>
            <CardContent>
                {data?.message ? (
                    <>
                        <Typography variant="h5">{data.message}</Typography>
                    </>
                ) : (
                    <>
                        <Grid container sx={{ alignItems: "center" }}>
                            <Grid item lg={2} md={2} xs={12} sx={{ textAlign: "center" }}>
                                <Grid >
                                    <LocationOnIcon />
                                    <Typography variant="h5" sx={{ padding: "10px", }}>{data.name}</Typography>
                                </Grid>
                                <Grid sx={{ padding: "10px" }}>
                                    <Typography variant="body1">Wind: {data?.wind?.speed} KMPH</Typography>
                                </Grid>
                            </Grid>
                            <Grid item lg={7} md={7} xs={12} sx={{ textAlign: "center" }}>
                                <Grid sx={{ padding: "10px" }}>
                                    <Typography variant="h2"> {temperatureInCelsius.toFixed(2)}°C</Typography>
                                </Grid>
                                {data?.weather?.map((info, i) => (
                                    <Grid key={i}>
                                        <Typography key={i} variant="body1">{info.main}</Typography>
                                        <img src={`https://openweathermap.org/img/wn/${info.icon}@4x.png`} alt="50n.png" width="150" height="150"></img>
                                    </Grid>
                                ))
                                }
                            </Grid>
                            <Grid item lg={3} md={3} xs={12} sx={{ textAlign: "center" }}>
                                <Typography variant="body1" className='weatherCardText' >
                                    <WaterDropIcon />
                                    <Typography variant="body1">{data.main.humidity}</Typography>
                                </Typography>
                                <Typography variant="body1" className='weatherCardText'>
                                    <LightModeIcon />
                                    <Typography variant="body1"> {formatTime(sunrise)}</Typography>
                                </Typography>
                                <Typography variant="body1" className='weatherCardText'>
                                    <WbTwilightIcon />
                                    <Typography variant="body1"> {formatTime(sunset)}</Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
                )}
            </CardContent>
        </Card >
    );
};

export default WeatherCard;
