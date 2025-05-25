import axios from 'axios';

// OpenWeatherMap API key
// You need to register at https://openweathermap.org/api 
// and replace API_KEY with the key received after registration
const API_KEY = '61755ac774475cbaebff25d05096f3de';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeatherData = async (city) => {
  try {
    console.log('Sending request with key:', API_KEY);
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}`;
    console.log('Request URL:', url);
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    
    if (error.response) {
      console.error('Error status:', error.response.status);
      console.error('Error data:', error.response.data);
      
      if (error.response.status === 404) {
        throw new Error('City not found. Please check the spelling.');
      } else if (error.response.status === 401) {
        throw new Error('API authorization error. Check your API key or wait for activation (up to 2 hours).');
      } else {
        throw new Error(`API Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
      }
    } else {
      throw new Error('Failed to connect to API. Check your internet connection.');
    }
  }
};
