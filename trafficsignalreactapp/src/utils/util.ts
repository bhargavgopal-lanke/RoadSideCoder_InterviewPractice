
export type trafficLightsColor = "green" | "yellow" | "red";
export interface trafficLightsState {
  backgroundColor: string,
  duration: number,
  next: trafficLightsColor
}
export interface trafficLightsInterface {
  green: trafficLightsState,
  yellow: trafficLightsState,
  red: trafficLightsState,
}



export const trafficLightsObj = {
  green: {
    backgroundColor: "green",
    duration: 4000,
    next: "yellow" as trafficLightsColor,
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 2000,
    next: "red" as trafficLightsColor,
  },
  red: {
    backgroundColor: "red",
    duration: 5000,
    next: "green" as trafficLightsColor,
  },
};


