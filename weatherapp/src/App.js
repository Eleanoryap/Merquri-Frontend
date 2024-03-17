import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Components/Search/Search-bar';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import sun from './Components/Assets/sun.png'

const apiKey ='6bf6238fd3ef96509d3d6fd69b0a0c17';

const App = () => {
  
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showWeatherIcon, setShowWeatherIcon] = useState(false);

  const fetchWeather = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`);
      
      setShowWeatherIcon(true);
      setWeather(response.data);
      setError('');
      addToSearchHistory(response.data);

    } catch (error) {
      setShowWeatherIcon(false);

      console.error('Error fetching weather data:', error);
      setWeather(null);
      setError('Invalid city or country name. Please try again.');
    }
  };

  const addToSearchHistory = (weatherData) => {
    const searchInfo = `${weatherData.name}, ${weatherData.sys.country}`;
    const currentTime = new Date().toLocaleString();
    const id = Math.random().toString(36).substr(2, 9); 
    setSearchHistory(prevSearchHistory => [...prevSearchHistory, { id, info: searchInfo, time: currentTime }]);
  };
  
  const handleDelete = (id) => {
    setSearchHistory(prevSearchHistory => prevSearchHistory.filter(item => item.id !== id));
  };

  const handleSearch = (searchTerm) => {
    fetchWeather(searchTerm);
  };

  return (
    <div>
      <h1>Weather App</h1>      
      <Searchbar onSearch={fetchWeather}/>
      {showWeatherIcon && <img className='weather-icon' src={sun} alt="Weather Icon"></img>}
      <WeatherInfo
        weather={weather}
        error={error}
        searchHistory={searchHistory}
        onSearch={handleSearch}
        onDelete={handleDelete}
      />
      
    </div>
  );
};

export default App;

