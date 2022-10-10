import React, { useEffect, useContext, useRef } from "react";
import { TimerContext } from "../context/TimerContext";

function Timer() {
  const { state, dispatch } = useContext(TimerContext);
  const intervalRef = useRef();

  useEffect(() => {
    if (!state.running) return;

    intervalRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [state.running]);

  return (
    <div>
      {" "}
      <p>{state.time}</p>
      <button
        onClick={() => {
          dispatch({
            type: "start",
          });
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "stop",
          });
        }}
      >
        Stop
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "reset",
          });
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Timer;
