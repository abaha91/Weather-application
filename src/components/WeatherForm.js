import React, { useState } from 'react';
import { getWeatherData } from '../services/weatherService';
import { weatherDemoData } from '../demoData';

const WeatherForm = ({ setWeatherData, setLoading, setError }) => {
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const data = await getWeatherData(city);
      setWeatherData(data);
    } catch (error) {
      setError(error.message || 'Error getting weather data');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const useDemoData = () => {
    setLoading(true);
    setError(null);
    
    // Имитация задержки сети
    setTimeout(() => {
      setWeatherData(weatherDemoData);
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="weather-form">
        <div className="form-group">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="city-input"
          />
          <button type="submit" className="search-button">Get Weather</button>
        </div>
      </form>
      
      <div className="demo-mode">
        <button onClick={useDemoData} className="demo-button">
          Use Demo Data (Moscow)
        </button>
        <p className="demo-note">
          * For workshop: if API is unavailable or the key is not activated
        </p>
      </div>
    </div>
  );
};

export default WeatherForm;
