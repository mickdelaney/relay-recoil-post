import * as React from "react";

export const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      Count {count}
    </button>
  );
};
