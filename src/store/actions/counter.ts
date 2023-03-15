type TActions<T, D> = {
  type: T;
  payload?: D;
};

export const actionIncrement = (): TActions<"INCREMENT", any> => {
  return {
    type: "INCREMENT",
  };
};

export const actionDecrement = (): TActions<"DECREMENT", any> => {
  return {
    type: "DECREMENT",
  };
};
