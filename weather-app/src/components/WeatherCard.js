import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ data }) => {
    if (!data) {
        return <h4>No data available</h4>;
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{data.name}</Typography>
                {data?.weather?.map(info => (
                    <Typography variant="body1">{info.main}: {info.description}</Typography>
                ))}
                <Typography variant="body1">Temperature: {data?.main?.temp}°C</Typography>
                <Typography variant="body1">Wind: {data?.wind?.speed} KMPH</Typography>
            </CardContent>
        </Card>
    );
};

export default WeatherCard;
