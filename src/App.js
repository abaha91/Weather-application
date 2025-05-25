import React, { useState } from 'react';
import './App.css';
import WeatherForm from './components/WeatherForm';
import WeatherInfo from './components/WeatherInfo';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherForm 
          setWeatherData={setWeatherData} 
          setLoading={setLoading} 
          setError={setError} 
        />
        {error && <ErrorMessage message={error} />}
        {loading && <p>Loading data...</p>}
        {weatherData && <WeatherInfo weatherData={weatherData} />}
      </header>
    </div>
  );
}

export default App;
