import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { actionDecrement, actionIncrement } from "./store/actions/counter";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  const value1 = useAppSelector((state) => state.counter1.value);

  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(actionIncrement());
  };

  const handleDecrement = () => {
    dispatch(actionDecrement());
  };

  return (
    <div className="App">
      <div>Counter 0: {value}</div>
      <div>Counter 1: {value1}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
