import * as React from "react";
import "./App.css";
import { CounterButton } from "ui";
import { Users } from "./Users";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            background: `rgba(255,255,255,.05)`,
            borderRadius: `8px`,
            padding: 16,
          }}
        >
          <p>
            This is component is from <code>ui</code>
          </p>
          <p>
            <CounterButton />
          </p>
        </div>
        
        <Users />
      </header>
    </div>
  );
}

export default App;
