import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function handelClick(event) {
    setResult(result.concat(event.target.name));
  }

  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear(event) {
    setResult("");
  }

  function handelResult(event) {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error!");
    }
  }

  return (
    <div className="calc-app">
      <form>
        <input type="text" value={result} ref={inputRef} />
      </form>
      <div className="keyboard">
        <button onClick={backspace} id="backspace">
          Back
        </button>
        <button onClick={clear} id="clear">
          C
        </button>
        <button name="+" onClick={handelClick}>
          +
        </button>
        <button name="7" onClick={handelClick}>
          7
        </button>
        <button name="8" onClick={handelClick}>
          8
        </button>
        <button name="9" onClick={handelClick}>
          9
        </button>
        <button name="-" onClick={handelClick}>
          -
        </button>
        <button name="4" onClick={handelClick}>
          4
        </button>
        <button name="5" onClick={handelClick}>
          5
        </button>
        <button name="6" onClick={handelClick}>
          6
        </button>
        <button name="*" onClick={handelClick}>
          *
        </button>

        <button name="1" onClick={handelClick}>
          1
        </button>
        <button name="2" onClick={handelClick}>
          2
        </button>
        <button name="3" onClick={handelClick}>
          3
        </button>
        <button name="/" onClick={handelClick}>
          /
        </button>
        <button name="0" onClick={handelClick}>
          0
        </button>
        <button name="." onClick={handelClick}>
          .
        </button>
        <button onClick={handelResult} id="result">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
