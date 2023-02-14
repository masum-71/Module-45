import { useState } from "react";
import Api from "./Api";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <Counter counter={counter} setCounter={setCounter}></Counter>
      <Api></Api>
    </div>
  );
}

function Counter(props) {
  const handleIncreases = () => {
    props.setCounter(props.counter + 1);
  };
  const handleDecreases = () => {
    props.setCounter(props.counter - 1);
  };
  return (
    <div>
      <h3>Counter: {props.counter} </h3>
      <button onClick={handleIncreases}>Increases</button>
      <button onClick={handleDecreases}>DEcreases</button>
    </div>
  );
}

export default App;
