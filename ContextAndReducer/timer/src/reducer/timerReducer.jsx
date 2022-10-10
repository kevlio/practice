export function timerReducer(state, action) {
  switch (action.type) {
    case "start":
      return { ...state, running: true };
    case "stop":
      return { ...state, running: false };
    case "reset":
      return { ...state, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}
