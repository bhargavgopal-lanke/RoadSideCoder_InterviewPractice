import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders App component", () => {
  render(<App />);
  const submitElement = screen.getByText("Submit");
  expect(submitElement).toBeInTheDocument();
});

test("calls handlechange and updates input value", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Bhargav" } });
  expect(input).toHaveValue("Bhargav");
});
