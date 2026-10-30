import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((Count) => Count + 1);
  };

  const decrement = () => {
    setCount((Count) => Count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="counter-title">Counter App</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={increment} className="btn-primary">
          Increment
        </button>
        <button onClick={decrement} className=" btn-secondary">
          Decrement
        </button>
        <button onClick={reset} className="btn-danger">
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
