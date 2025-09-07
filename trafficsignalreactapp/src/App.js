import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [currentLight, setCurrentLight] = useState("green");

  const trafficLights = {
    green: {
      color: "green",
      duration: 4000,
      next: "yellow",
    },
    yellow: {
      color: "yellow",
      duration: 2000,
      next: "red",
    },
    red: {
      color: "red",
      duration: 5000,
      next: "green",
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {});
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(trafficLights[currentLight]);

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}> Traffic App</h1>
      <div className="signal-lights-main">
        {Object.keys(trafficLights)?.map((x, i) => {
          return (
            <div
              className="traffic-lights"
              key={i}
              style={{ backgroundColor: x }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
