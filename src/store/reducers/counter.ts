import { Action, Reducer } from "redux";

type TAcctions = Action<"COUNTER1_INCREMENT" | "COUNTER1_DECREMENT">;

type TCounterState = {
  value: number;
};

const initState: TCounterState = {
  value: 0,
};

export const counterReducer: Reducer<TCounterState, TAcctions> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case "COUNTER1_INCREMENT": {
      return { value: state.value + 1 };
    }
    case "COUNTER1_DECREMENT": {
      return { value: state.value - 1 };
    }
    default: {
      return { value: state.value };
    }
  }
};
