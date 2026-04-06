import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  useEffect(() => {
    if (city) {
      axios.get(`http://api.weatherapi.com/v1/current.json?key=ce5a4d3393954590b5051425262603&q=${city}&aqi=no`)
        .then(response => {
          setWeather(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [city]);

  return (
    <>
      City: 
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />

      {weather && weather.location && (
        <div>
          <div>City: {weather.location.name}</div>
          <div>Temperature: {weather.current.temp_c}°C</div>
        </div>
      )}
    </>
  );
}

export default Weather;