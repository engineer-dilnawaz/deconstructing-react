import React, { useState } from "./react";
import { render } from "./react-dom";

import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [name, setName] = useState("Dilnawaz");

  return (
    <div className="app">
      <h1
        onclick={() => {
          console.log("first");
          setCount(count + 1);
        }}
        style={{ textAlign: "center", userSelect: "none", cursor: "pointer" }}
      >
        {count}
      </h1>
      <h1
        onclick={() => {
          console.log("first");
          setCount2(count2 + 1);
        }}
        style={{ textAlign: "center", userSelect: "none", cursor: "pointer" }}
      >
        {count2}
      </h1>
      <h1
        onclick={() => {
          setName("Dilnawaz Khan");
        }}
        style={{ textAlign: "center" }}
      >
        {name}
      </h1>
      <div style={{ textAlign: "center" }}>
        <input
          value={name}
          type="text"
          onchange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
