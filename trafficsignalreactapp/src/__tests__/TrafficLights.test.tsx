import { render } from "@testing-library/react";
import TrafficLights from "../Components/TrafficLights";
import { trafficLightsObj } from "../utils/util";

describe("Traffic Light components tests", () => {
  test("should check the component render", () => {
    render(<TrafficLights lights={trafficLightsObj} />);
    // expect()
  });
});
