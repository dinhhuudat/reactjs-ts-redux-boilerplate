import { Action, Reducer } from "redux";

type TAcctions = Action<"INCREMENT" | "DECREMENT">;

type TCounterState = {
  value: number;
};

const initState: TCounterState = {
  value: 0,
};

export const counter1Reducer: Reducer<TCounterState, TAcctions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case "INCREMENT": {
      return { value: state.value + 1 };
    }
    case "DECREMENT": {
      return { value: state.value - 1 };
    }
    default: {
      return { value: state.value };
    }
  }
};
