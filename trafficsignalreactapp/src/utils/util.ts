
export interface trafficLightsState {
  backgroundColor: string,
  duration: number,
  next: string
}
export interface trafficLights {
  green: trafficLightsState,
  yellow: trafficLightsState,
  red: trafficLightsState,
}

export const trafficLightsObj = {
  green: {
    backgroundColor: "green",
    duration: 4000,
    next: "yellow",
  },
  yellow: {
    backgroundColor: "yellow",
    duration: 2000,
    next: "red",
  },
  red: {
    backgroundColor: "red",
    duration: 5000,
    next: "green",
  },
};


