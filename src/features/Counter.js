import React from "react";
import { useSelector, useDispatch } from "react-redux"; // read data from store with useSelector. dispatch actions with useDispatch
import { increment, decrement } from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="increment" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="decrement" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

// anytime increment or decrement are clicked:
//The corresponding Redux action will be dispatched to the store
//The counter slice reducer will see the actions and update its state
//The <Counter> component will see the new state value from the store and re-render itself with the new data
