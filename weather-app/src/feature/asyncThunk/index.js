import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '2570c0f121a8b68a09f96cd86591bbdd';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';


export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (city, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
