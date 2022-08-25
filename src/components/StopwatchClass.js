import React, { Component } from "react";
import StopwatchVisual from "./StopwatchVisual";
export default class StopwatchClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRunning: false,
      timeMs: 0,
      timeSec: 0,
      timeMin: 0,
    };
  }

  formatTime(time, ...args) {
    let val = time.toString();
    if (val.length < 2) val = "0" + val;
    if (args[0] === "ms" && val.length < 3) val = "0" + val;
    return val;
  }

  startRunning = () => {
    if (!this.state.isRunning) {
      this.setState((prev) => {
        return { ...prev, isRunning: !this.state.isRunning };
      });
      this.startTimer = setInterval(() => this.run(), 10);
    } else {
      this.setState((prev) => {
        return { ...prev, isRunning: !this.state.isRunning };
      });

      clearInterval(this.startTimer);
    }
  };

  run = () => {
    this.setState({ timeMs: this.state.timeMs + 10 });
    if (this.state.timeMs > 999) {
      this.setState({ timeMs: 0, timeSec: this.state.timeSec + 1 });
    }
    if (this.state.timeSec > 59) {
      this.setState({ timeSec: 0, timeMin: this.state.timeMin + 1 });
    }
  };

  reset = () => {
    this.setState({
      timeMs: 0,
      timeSec: 0,
      timeMin: 0,
    });
  };

  render() {
    let text = this.state.isRunning ? "Stop" : "Start";
    return (
      <div>
        <header>StopWatch</header>
        <StopwatchVisual {...this.state} formatTime={this.formatTime} />
        <div>
          <button onClick={this.startRunning}>{text}</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
