import React, { useEffect, useState } from "react";

const TrafficLights = ({ lights }: any) => {
  const [currentLight, setCurrentLight] = useState("green");

  useEffect(() => {
    const { duration, next } = lights[currentLight];

    const timer = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [currentLight]);

  return (
    <div>
      <div className="signal-lights-main">
        {Object.keys(lights)?.map((color, i) => {
          return (
            <div
              className="traffic-lights"
              key={i}
              style={{
                backgroundColor:
                  color === currentLight && lights[color].backgroundColor,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLights;
