import React, { Component } from "react";

export default class Forecast extends Component {
  render() {
    return (
      <div>
        Date: {this.props.data.datetime} Min: {this.props.data.tempmin}, Max:{" "}
        {this.props.data.tempmax}
      </div>
    );
  }
}
