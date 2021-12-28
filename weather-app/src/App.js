import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
function App() {
  let xAPIKey = process.env.REACT_APP_API_KEY;
  let sxAPIKey = process.env.REACT_APP_SND_API_KEY;
  let zip = "75035";

  const [weatherData, setWeatherData] = useState({ loaded: false, data: null });

  // const getWeather = () => {
  //   fetch(
  //     `http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zip},us&appid=${xAPIKey}&cnt=5&units=imperial`
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setWeatherData(response);
  //       console.log(weatherData);
  //     });
  //   setStatus("true");
  //   console.log(weatherData);
  // };

  const getW = () => {
    fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dallas%2CTx/next7days?unitGroup=us&include=days&key=${sxAPIKey}&contentType=json`,
      {
        method: "GET",
        headers: {},
      }
    )
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        } else {
          setWeatherData({ loaded: true, data: data });
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    console.log(weatherData);
  };

  const log = () => {
    console.log(weatherData.days[0]);
  };

  return (
    <div className="App">
      <button onClick={getW}>Test</button>
      <button onClick={log}> Log</button>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          [weatherData.data.address]
        )}
      </div>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast info={weatherData.data.days} day={0} />
        )}
      </div>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast info={weatherData.data.days} day={1} />
        )}
      </div>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast info={weatherData.data.days} day={2} />
        )}
      </div>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast info={weatherData.data.days} day={3} />
        )}
      </div>
      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          <Forecast info={weatherData.data.days} day={4} />
        )}
      </div>
    </div>
  );
}

export default App;
