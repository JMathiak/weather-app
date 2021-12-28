import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
function App() {
  let xAPIKey = process.env.REACT_APP_API_KEY;
  let sxAPIKey = process.env.REACT_APP_SND_API_KEY;
  let zip = "75035";

  const [status, setStatus] = useState(false);

  const getWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&appid=${xAPIKey}&cnt=5&units=imperial`
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json));
    setStatus("true");
    console.log(weatherData);
  };

  const getW = () => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas%2CTx/next7days?unitGroup=us&include=days&key=${sxAPIKey}&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json))
      .catch((err) => {
        console.error(err);
      });
    console.log(weatherData);
    if (weatherData.days[0] !== "") {
      setStatus(true);
    }
  };
  const [weatherData, setWeatherData] = useState({});
  return (
    <div className="App">
      <button onClick={getW}>Test</button>
      <div>
        {!status ? <div>Waiting for input</div> : [weatherData.address]}
      </div>
      <div>
        {!status ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast data={weatherData.days[0]} />
        )}
      </div>
      <div>
        {!status ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast data={weatherData.days[1]} />
        )}
      </div>
      <div>
        {!status ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast data={weatherData.days[2]} />
        )}
      </div>
      <div>
        {!status ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast data={weatherData.days[3]} />
        )}
      </div>
      <div>
        {!status ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast data={weatherData.days[4]} />
        )}
      </div>
    </div>
  );
}

export default App;
