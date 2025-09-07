import React from "react";
import "./App.css";
import TrafficLights from "./Components/TrafficLights";

function App() {
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> Traffic App</h1>
      <TrafficLights lights={trafficLightsObj} />
    </div>
  );
}

export default App;
