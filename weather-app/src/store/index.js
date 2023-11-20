import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../feature/slices/weatherSlice';

const store = configureStore({
    reducer: {
        weather: weatherReducer,
    },
});

export default store;
