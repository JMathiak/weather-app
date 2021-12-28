import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";

function App() {
  let xAPIKey = "d3f9e99f98c3ca67260b4e49369f2998";
  const [weatherData, setWeatherData] = useState({});
  const getWeather = () => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?zip=75035,us&appid=d3f9e99f98c3ca67260b4e49369f2998"
    )
      .then((response) => response.json())
      .then((json) => setWeatherData(json));
  };
  return (
    <div className="App">
      <button onClick={getWeather}>Test</button>
      <div>{weatherData.city.name}</div>
    </div>
  );
}

export default App;
