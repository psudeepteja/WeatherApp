import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { fetchWeather } from '../feature/asyncThunk';
import { Box } from '@mui/material';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchTerm) {
                dispatch(fetchWeather(searchTerm));
            }
        }, 1000);

        return () => clearTimeout(debounceTimer);
    }, [searchTerm, dispatch]);

    return (
        <Box>
            <TextField
                label="Search City..."
                variant="outlined"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ width: "100%", }}
            />
        </Box>
    );
};

export default SearchBar;



