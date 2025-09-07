import React, { useEffect, useState } from "react";
import {
  trafficLights,
  trafficLightsColor,
  trafficLightsState,
} from "../utils/util";

type trafficLightsProps = { lights: trafficLights };
const TrafficLights = ({ lights }: trafficLightsProps) => {
  const [currentLight, setCurrentLight] = useState<trafficLightsColor>("green");

  useEffect(() => {
    const { duration, next }: trafficLightsState = lights[currentLight];

    const timer = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [lights, currentLight]);

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
                  color === currentLight ? lights[color].backgroundColor : "",
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default TrafficLights;
