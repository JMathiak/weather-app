import logo from "./logo.svg";
import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Forecast from "./Components/Forecast";
import { TextField, Button } from "@mui/material";
function App() {
  let xAPIKey = process.env.REACT_APP_API_KEY;
  let sxAPIKey = process.env.REACT_APP_SND_API_KEY;
  let zip = "75035";

  const [weatherData, setWeatherData] = useState({ loaded: false, data: null });
  const [state, setSt] = useState("Tx");
  const [city, setCity] = useState("Dallas");

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
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C${state}/next7days?unitGroup=us&include=days&key=${sxAPIKey}&contentType=json`,
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
    console.log(weatherData);
  };

  return (
    <div className="App">
      <form className="form">
        <TextField
          required
          label="City"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <TextField
          required
          label="State (2 Letter Code)"
          onChange={(e) => {
            setSt(e.target.value);
          }}
        />

        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            getW();
          }}
        >
          Submit{" "}
        </Button>
        <button onClick={log}> Log</button>
      </form>

      <div>
        {!weatherData.loaded ? (
          <div>Waiting for input</div>
        ) : (
          [
            <div>Showing Weather for: {weatherData.data.resolvedAddress}</div>,
            <div className="Weather-Row">
              <Forecast info={weatherData.data.days} day={0} />
              <Forecast info={weatherData.data.days} day={1} />
              <Forecast info={weatherData.data.days} day={2} />
              <Forecast info={weatherData.data.days} day={3} />
              <Forecast info={weatherData.data.days} day={4} />
            </div>,
          ]
        )}
      </div>
    </div>
  );
}

export default App;
