import React from "react";

const useCounter = (init) => {
  const [count, setCounter] = React.useState(init);

  function handleInc() {
    setCounter((prev) => prev + 1);
  }

  function handleDec() {
    setCounter((prev) => prev - 1);
  }

  return [count, handleInc, handleDec];
};

export default useCounter;
