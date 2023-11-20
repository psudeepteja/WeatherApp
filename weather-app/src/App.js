import React from 'react';
import Container from '@mui/material/Container';
import SearchBar from './components/SearchBar';
import WeatherList from './components/WeatherList';

function App() {
  return (
    <Container sx={{ marginTop: "25px" }}>
      <SearchBar />
      <WeatherList />
    </Container>
  );
}

export default App;
