import { selector } from "recoil";
import { timerState } from "../atoms/timerState";

export const listCountState = selector({
  key: "listCountState",
  get: ({ get }) => {
    const localState = get(timerState);
    return localState;
  },
  set: ({ set, get }, newValue) => {
    // const prevState = get(timerState);
    // const combinedtimers = [...prevState, newValue];
    return set(timerState, newValue);
  }
});
