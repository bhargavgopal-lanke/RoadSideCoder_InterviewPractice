import { render } from "@testing-library/react";
import TrafficLights from "../Components/TrafficLights";
import { trafficLightsObj } from "./util";

export const setUpTrafficLightsTest = () => {
  jest.useFakeTimers();

  const utils = render(<TrafficLights lights={trafficLightsObj} />);
  const container = utils.container;
  type trafficLightColor = keyof typeof trafficLightsObj;
  const getLightByColor = (color: trafficLightColor) => {
    return Array.from(container.querySelectorAll(".traffic-lights")).find(
      (el) =>
        getComputedStyle(el).backgroundColor ===
        trafficLightsObj[color].backgroundColor
    );
  };

  const advanceToNextLight = (color: trafficLightColor) => {
    jest.advanceTimersByTime(trafficLightsObj[color].duration);
  };
  return {
    ...utils,
    getLightByColor,
    advanceToNextLight,
  };
};
