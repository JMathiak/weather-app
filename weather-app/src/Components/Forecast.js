import React, { Component } from "react";
import "../Components/Forecast.css";
export default class Forecast extends Component {
  render() {
    return (
      <div className="daily">
        Date: {this.props.info[this.props.day].datetime} <br></br>Min:{" "}
        {this.props.info[this.props.day].tempmin}, Max:{" "}
        {this.props.info[this.props.day].tempmax}
      </div>
    );
  }
}
