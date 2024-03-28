import "./App.css";

import { FibButton } from "./components/FibButton";

function App() {
  return (
    <>
      <h1>Fibonacci Counter Test</h1>
      <p>
        {" "}
        Edit the button to increment the display to the next value in the{" "}
        <a
          href="https://en.wikipedia.org/wiki/Fibonacci_sequence"
          target="_blank"
        >
          Fibonacci sequence
        </a>{" "}
        starting from one on each reload{" "}
      </p>
      <h2> Example </h2>
      <div className="card">
        <button> current in sequence is 1 </button> {"onclick =>"}{" "}
        <button> current in sequence is 1</button> {"onclick =>"}{" "}
        <button> current in sequence is 2</button>
      </div>
      <div className="card">
        <p> Edit this button </p>
        <FibButton />
      </div>
    </>
  );
}

export default App;
