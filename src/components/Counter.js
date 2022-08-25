import React from "react";
import useCounter from "./hooks/useCounter";
const Counter = () => {
  const [count, handleInc, handleDec] = useCounter(0);

  return (
    <div>
      <p>{count}</p>
      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
};

export default Counter;
