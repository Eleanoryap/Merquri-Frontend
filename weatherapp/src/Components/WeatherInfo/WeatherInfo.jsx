import React, { useState, useEffect } from 'react';
import sun from '../Assets/sun.png'
import { FaWeight } from 'react-icons/fa';

const WeatherInfo = ({ weather, error }) => {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(interval); // Clean up the interval on unmount
    }, []);
  if (error) {
    return <p>{error}</p>;
  }

  if (!weather) {
    return null;
  }

  return (
    <div className='info-container'>
    <p className='title'> Today's Weather</p>
    <h1 className='temperature'>{weather.main.temp}°</h1>
    <p className='maxmin-temp'>H: {weather.main.temp_max}° L: {weather.main.temp_min}°</p>
     <div className='inline-container'> 
     <p className='inline bold' > {weather.name}, {weather.sys.country}</p>
     <p  className='inline'>{dateTime.toLocaleString()}</p>
     <p  className='inline'>Humidity: {weather.main.humidity}%</p>
     <p  className='inline'>{weather.weather[0].description}</p>
    </div>

     
    </div>
  );
};

export default WeatherInfo;
