import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <div className="addBtn">
        <button onClick={() => dispatch(increment(3))}>+</button>
      </div>
      <div className="minusBtn">
        <button className="minusBtn" onClick={() => dispatch(decrement(3))}>
          -
        </button>
      </div>

      {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ""}
    </div>
  );
}

export default App;
