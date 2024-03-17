import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Components/Search/Search-bar';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import sun from './Components/Assets/sun.png'

const App=() =>{

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const apiKey = '6bf6238fd3ef96509d3d6fd69b0a0c17'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

  const fetchWeather = async (search) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`);
      setWeather(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeather(null);
      setError('Invalid city or country name. Please try again.');
    }
  };

  return (
    <div className="container">
     
      <Searchbar onSearch={fetchWeather}/>
      <img className='weather-icon' src={sun}></img>

      <WeatherInfo weather={weather} error={error}/>
      <div>
      
     </div>
    </div>
    
  );
}

export default App;
