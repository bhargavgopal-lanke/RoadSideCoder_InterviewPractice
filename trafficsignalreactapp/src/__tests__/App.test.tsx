import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("the component should render", () => {
  const component = <App />;
  render(component);
  const heading = screen.getByText("Traffic App");
  expect(heading).toBeInTheDocument();
});
