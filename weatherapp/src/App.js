import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Components/Search/Search-bar';
import WeatherInfo from './Components/WeatherInfo/WeatherInfo';
import sun from './Components/Assets/sun.png'
import { WiMoonAltThirdQuarter } from "react-icons/wi";


const apiKey ='6bf6238fd3ef96509d3d6fd69b0a0c17';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showWeatherIcon, setShowWeatherIcon] = useState(false);
  const [headerText, setHeaderText] = useState('Weather App');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
 // Toggle theme class on body
 document.body.classList.toggle('dark-theme', newTheme === 'dark');  
  };

  const fetchWeather = async (searchTerm) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`);
      
      setShowWeatherIcon(true);
      setWeather(response.data);
      setError('');
      addToSearchHistory(response.data);
      setHeaderText(`${response.data.name}, ${response.data.sys.country}`);

    } catch (error) {
      setShowWeatherIcon(false);
      console.error('Error fetching weather data:', error);
      setWeather(null);
      setError('Invalid city or country name. Please try again.');
      setHeaderText('Weather App');

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
   
    <div  className='app'> 
    <div className='container'>
    {/* <div  className='app'> */}

      <div className='header'> 
      <h1>{headerText}</h1> 
      <button className={`theme-toggle ${theme}`} onClick={toggleTheme}><WiMoonAltThirdQuarter /></button>
      </div>
      <Searchbar onSearch={fetchWeather} theme ={theme} />
      {/* <Searchbar onSearch={fetchWeather}/> */}

      {showWeatherIcon && <img className='weather-icon' src={sun} alt="Weather Icon"></img>}
      <WeatherInfo
        weather={weather}
        error={error}
        searchHistory={searchHistory}
        onSearch={handleSearch}
        onDelete={handleDelete}
        theme ={theme}
      />
      </div>
    </div>
  );
};

export default App;

