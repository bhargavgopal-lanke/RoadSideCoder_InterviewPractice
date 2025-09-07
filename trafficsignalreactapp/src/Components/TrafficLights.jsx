import React from "react";

const TrafficLights = ({lights}) => {
  return (
    <div>
      <div className="signal-lights-main">
        {Object.keys(lights)?.map((x, i) => {
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
};

export default TrafficLights;
