import React from 'react';
import { useSelector } from 'react-redux';
import WeatherCard from './WeatherCard';
import Container from '@mui/material/Container';

const WeatherList = () => {
    const weatherData = useSelector((state) => state.weather.data);

    return (
        <Container >
            <h1>Weather Information</h1>
            <WeatherCard data={weatherData} />
        </Container>
    );
};

export default WeatherList;
