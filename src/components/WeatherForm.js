import React, { useState } from 'react';
import { getWeatherData } from '../services/weatherService';

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
    </div>
  );
};

export default WeatherForm;
