import React, { useState, useEffect } from "react";
export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [Time, setTime] = useState(0);
  useEffect(() => {
    let interval;
    if (isRunning == true) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function handleStart() {
    setIsRunning(true);
  }
  function handleStop() {
    setIsRunning(false);
  }

  return (
    <div>
      <h1>{Time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
