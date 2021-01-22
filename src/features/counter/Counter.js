import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
// import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      {/* <div className={styles.row}> */}
      <div className="text-3xl font-bold flex justify-items-center justify-center text-center p-2 space-x-4">
        <button
          // className={styles.button}
          className="focus:outline-none focus:ring focus:border-purple-500 appearance-none text-4xl px-12 pb-2 cursor-pointer bg-purple-700 text-yellow-400 shadow-md outline-none border-purple-900 border-2 rounded-xl"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        {/* <span className={styles.value}>{count}</span> */}
        <span className="focus:outline-none focus:ring focus:border-purple-500 appearance-none text-5xl px-12 pb-2 cursor-pointer bg-yellow-400 text-purple-900 shadow-md outline-none border-purple-900 border-2 rounded-xl">
          {count}
        </span>
        <button
          // className={styles.button}
          className="focus:outline-none focus:ring focus:border-purple-500 appearance-none text-4xl px-12 pb-2 cursor-pointer bg-purple-700 text-yellow-400 shadow-md outline-none border-purple-900 border-2 rounded-xl"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      {/* <div className={styles.row}> */}
      <div className="space-y-5 text-3xl font-bold flex flex-col justify-items-center justify-center text-center mt-5 ">
        <input
          // className={styles.textbox}
          className="text-purple-900 focus:outline-none focus:ring h-10 focus:border-purple-500 text-2xl text-center rounded-lg bg-purple-200"
          placeholder="set the amount"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className="focus:outline-none focus:ring focus:border-purple-500 appearance-none text-4xl cursor-pointer bg-purple-700 text-yellow-400 py-2 shadow-md outline-none border-purple-900 border-2 rounded-xl"
          // className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          // className={styles.asyncButton}
          className="focus:outline-none focus:ring focus:border-purple-500 appearance-none text-4xl py-2 cursor-pointer bg-purple-700 text-yellow-400 shadow-md outline-none border-purple-900 border-2 rounded-xl"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
