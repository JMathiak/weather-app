import React, { Component } from "react";

export default class Forecast extends Component {
  render() {
    return (
      <div>
        Date: {this.props.info[this.props.day].datetime} Min:{" "}
        {this.props.info[this.props.day].tempmin}, Max:{" "}
        {this.props.info[this.props.day].tempmax}
      </div>
    );
  }
}
