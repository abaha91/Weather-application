import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  const { name, main, weather, wind, sys } = weatherData;
  
  // Конвертация из Кельвинов в Цельсии
  const celcius = (temp) => Math.round(temp - 273.15);
  
  return (
    <div className="weather-info">
      <h2>{name}, {sys.country}</h2>
      <div className="weather-main">
        <img 
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
          alt={weather[0].description} 
        />
        <div className="temperature">
          <h3>{celcius(main.temp)}°C</h3>
          <p>Feels like: {celcius(main.feels_like)}°C</p>
        </div>
      </div>
      
      <div className="weather-details">
        <p><strong>Condition:</strong> {weather[0].description}</p>
        <p><strong>Humidity:</strong> {main.humidity}%</p>
        <p><strong>Pressure:</strong> {main.pressure} hPa</p>
        <p><strong>Wind speed:</strong> {wind.speed} m/s</p>
        <p><strong>Min temperature:</strong> {celcius(main.temp_min)}°C</p>
        <p><strong>Max temperature:</strong> {celcius(main.temp_max)}°C</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
