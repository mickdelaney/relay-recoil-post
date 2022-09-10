import * as React from "react";

export const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return (
    <button 
      className="bg-white text-blue-500 border p-3"
      type="button" onClick={() => setCount((c) => c + 1)}>
      Count {count}
    </button>
  );
};
