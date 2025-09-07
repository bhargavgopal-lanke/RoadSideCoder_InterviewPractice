import { setUpTrafficLightsTest } from "../utils/setupTrafficLightsTest";
import "@testing-library/jest-dom";

describe("Traffic Light components tests", () => {
  test("should renders initial green light", () => {
    const { getLightByColor } = setUpTrafficLightsTest();
    expect(getLightByColor("green")).toBeTruthy();
  });

  test("clears timeout on unmount", () => {
    const clearSpy = jest.spyOn(global, "clearTimeout");
    const { unmount } = setUpTrafficLightsTest();
    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });
});
