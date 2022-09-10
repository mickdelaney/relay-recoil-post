import * as React from "react";
import {
  atom,
  useRecoilState,
} from 'recoil';

export const buttonCountState = atom({
  key: 'buttonCount', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value),
  effects: [
    ({onSet}) => {
      onSet(count => {
        console.debug("Current Count: ", count);
      });
    },
  ],
});

export const CounterButton = () => {
  const [count, setCount] = useRecoilState(buttonCountState);
  return (
    <button 
      className="bg-white text-blue-500 border p-3"
      type="button" onClick={() => setCount((c) => c + 1)}>
      Count {count}
    </button>
  );
};
