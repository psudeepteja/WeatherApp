import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
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
        <Card sx={{ backgroundColor: "#4af3f3" }}>
            <CardContent>
                {data?.message ? (
                    <Typography variant="h5">{data.message}</Typography>
                ) : (
                    <>
                        <Grid container sx={{ alignItems: "center" }}>
                            <Grid item lg={3} md={3} xs={12}>
                                < Typography variant="h5">{data.name}</Typography>
                            </Grid>
                            <Grid item lg={9} md={9} xs={12}>
                                <Grid className='weatherCard'>
                                    {data?.weather?.map((info, i) => (
                                        <Typography key={i} variant="body1">{info.main}: {info.description}</Typography>
                                    ))
                                    }
                                    <Typography variant="body1">Temperature: {temperatureInCelsius.toFixed(2)}°C</Typography>
                                    <Typography variant="body1">Wind: {data?.wind?.speed} KMPH</Typography>
                                </Grid>
                                <Grid className="weatherCard" sx={{ paddingTop: "20px" }}>
                                    <Typography variant="body1" className='weatherCardText'>
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
                        </Grid>
                    </>
                )}
            </CardContent>
        </Card >
    );
};

export default WeatherCard;
