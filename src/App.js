import React from "react";
import StopwatchClass from "./components/StopwatchClass";
import StopwatchFunction from "./components/StopwatchFunction";
import Counter from "./components/Counter";
import CounterClass from "./components/CounterClass";
const App = () => {
  return (
    <>
      <h3>StopwatchClass</h3>
      <StopwatchClass />
      <h3>StopwatchFunction</h3>
      <StopwatchFunction />
      <h3>CounterFunction</h3>
      <Counter />
      <h3>CounterClass</h3>
      <CounterClass />
    </>
  );
};

export default App;
