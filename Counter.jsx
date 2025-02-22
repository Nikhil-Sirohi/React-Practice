import React, { useState } from "react";
export default function App() {
  const [Count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(Count + 1);
  };
  const handleDecrement = () => {
    setCount(Count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>{Count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
