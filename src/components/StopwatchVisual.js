import React, { Component } from "react";

export default class StopwatchVisual extends Component {
  render() {
    return <div>
      <span>
        {this.props.formatTime(this.props.timeMin)}:
        {this.props.formatTime(this.props.timeSec)}:
        {this.props.formatTime(this.props.timeMs,'ms')}
      </span>
    </div>;
  }
}
