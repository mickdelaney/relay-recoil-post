import * as React from "react";
import "./App.css";
import { CounterButton } from "ui";
import { Users } from "./Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton />
        <Users />
      </header>
    </div>
  );
}

export default App;
