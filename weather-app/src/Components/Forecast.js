import React, { Component } from "react";
import "../Components/Forecast.css";
import {
  WiRain,
  WiNightPartlyCloudy,
  WiDaySunny,
  WiSnow,
} from "weather-icons-react";
import Card from "@mui/material/Card";

export default class Forecast extends Component {
  render() {
    return (
      <div className="daily">
        <Card variant="outlined" className="card">
          {this.props.info[this.props.day].datetime}
          <br></br>
          {this.props.info[this.props.day].icon === "rain" ? (
            <WiRain size={30} color="#000" />
          ) : null}
          {this.props.info[this.props.day].icon === "partly-cloudy-day" ? (
            <WiNightPartlyCloudy size={30} color="#000" />
          ) : null}
          {this.props.info[this.props.day].icon === "clear-day" ? (
            <WiDaySunny size={30} color="#000" />
          ) : null}
          {this.props.info[this.props.day].icon === "snow" ? (
            <WiSnow size={30} color="#000" />
          ) : null}
          <br></br>
          {this.props.info[this.props.day].conditions}
          <br></br>Min: {this.props.info[this.props.day].tempmin}°F, Max:{" "}
          {this.props.info[this.props.day].tempmax}°F
        </Card>
      </div>
    );
  }
}
