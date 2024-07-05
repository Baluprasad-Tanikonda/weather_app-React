import React, { useState } from 'react';
import './App.css';


const api = 'db94cfb5534a638318256be8c2361ed3';

const App = () => {

  const [location, setLocation] = useState("")
  const [weather, setWeather] = useState({});

  const search = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
      })
  }

  return (
      <section className='app'>
        <div>
          <div className='app-card'>
            <h1>Weather Application</h1>
            <input
              type='text'
              placeholder='Location'
              onChange={(e) => setLocation(e.target.value)} />
            <button onClick={search}>Get</button>
          </div>
          {typeof weather.main !== "undefined" ? (
            <div className="container">
              <div>
                <p className='name'>{weather.name}</p>
                <p className='temp'>{Math.round(weather.main.temp - 273)}°<span>C</span></p>
                <p>{weather.weather[0].main}</p>
                <p>({weather.weather[0].description} )</p>
              </div>
            </div>)
            :
            (" ")}
        </div>
      </section>
  );
};

export default App;