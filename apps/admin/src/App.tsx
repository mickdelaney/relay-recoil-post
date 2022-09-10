import * as React from "react";
import "./App.css";
import { CounterButton } from "ui";
import { Users } from "./Users";

function App() {
  return (
    <div className="container">
      <main className="m-8">
        
        <div className="flex bg-gray-100 mb-4 p-4">

          <CounterButton />

        </div>

        <div className="bg-blue-100 border p-4">
          
          <Users />        

        </div>

  
      </main>
    </div>
  );
}

export default App;
