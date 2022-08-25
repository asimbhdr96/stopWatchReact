import React, { Component } from "react";
import HigherOrderComponent from "./HocHelper/HigherOrderComponent";

class CounterClass extends Component {

  render() {
    const { count, handleInc, handleDec } = this.props;

    return (
      <div>
        <p>{count}</p>
        <div>
          <button onClick={handleInc}>Increment</button>
          <button onClick={handleDec}>Decrease</button>
        </div>
      </div>
    );
  }
}

export default HigherOrderComponent(CounterClass);
