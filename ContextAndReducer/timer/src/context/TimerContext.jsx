import { createContext, useReducer, useState } from "react";
import { timerReducer } from "../reducer/timerReducer";

export const TimerContext = createContext();

const initialState = {
  time: 0,
  running: false,
};

export function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  const providerValue = {
    state,
    dispatch,
  };

  return (
    <TimerContext.Provider value={providerValue}>
      {children}
    </TimerContext.Provider>
  );
}
