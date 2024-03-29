import React, { useState, useEffect } from 'react';
import SearchHistory from '../Search/Search-history';


const WeatherInfo = ({ weather, error,searchHistory, onSearch, onDelete, theme }) => {
    const [dateTime, setDateTime] = useState(new Date());
    const weatherDescription = weather?.weather[0]?.description;

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);
  if (error) {
    return <p className={`error-message ${theme}`}>{error}</p>;
  }

  if (!weather || !weather.weather || weather.weather.length === 0) {
    return null;
  }
  const toCamelCase = (str) => {
    return str.toLowerCase().replace(/(?:^|\s|-)\w/g, function(match) {
        return match.toUpperCase();
    }).replace(/\s+/g, '').replace(/(?<=\w)(?=[A-Z])/g, ' ');
};
    const camelCaseDscription= toCamelCase(weatherDescription);

  return (

    <div className={`info-container ${theme}`}>
    <p className={`info-title ${theme}`}> Today's Weather</p>
    <h1 className={`temperature ${theme}`}>{weather.main.temp}°</h1>
    <p className={`maxmin-temp ${theme}`}>H: {weather.main.temp_max}° L: {weather.main.temp_min}°</p>
     <div className='inline-container'> 
     <p className={`inline ${theme} bold`}> {weather.name}, {weather.sys.country}</p>
     <p  className={`inline ${theme}`}>{dateTime.toLocaleString()}</p>
     <p  className={`inline ${theme}`}>Humidity: {weather.main.humidity}%</p>
     <p  className={`inline ${theme}`}>{camelCaseDscription}</p>
    </div>
    <SearchHistory
        searchHistory={searchHistory}
        onSearch={onSearch}
        onDelete={onDelete}
        theme ={theme}
      />
     
    </div>
  
  );
};

export default WeatherInfo;
