import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather } from '../asyncThunk';

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        data: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        builder.addCase(fetchWeather.rejected, (state, action) => {
            state.data = action.payload;
        })
    },
});

export default weatherSlice.reducer;
