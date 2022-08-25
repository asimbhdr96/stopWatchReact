import React from "react";
import { useState, useRef } from "react";

const StopwatchFunction = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 10);
    }, 10);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 10);
    }, 30);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = (timer) => {
    const getMs = `${timer % 1000}`;

    const getSeconds = `0${Math.floor(timer / 1000) % 60}`.slice(-2);
    const getMinutes = `0${Math.floor(timer / 60000)}`.slice(-2);

    return `${getMinutes} : ${getSeconds} : ${getMs}`;
  };

  return (
    <div>
      <div>
        <p>{formatTime(timer)}</p>
        <div>
          {!isActive && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : isPaused ? (
            <button onClick={handlePause}>Pause</button>
          ) : (
            <button onClick={handleResume}>Resume</button>
          )}
          <button onClick={handleReset} disabled={!isActive}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default StopwatchFunction;
