import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App Component", () => {
  const setUp = () => {
    render(<App />);
    let input = screen.getByRole("textbox");
    let button = screen.getByText("Submit");
    return {
      input,
      button,
    };
  };

  test("renders App component", () => {
    const { button } = setUp();
    expect(button).toBeInTheDocument();
  });

  test("calls handlechange and updates input value", () => {
    const { input } = setUp();
    fireEvent.change(input, { target: { value: "Bhargav" } });
    expect(input).toHaveValue("Bhargav");
  });

  test("calls handlesubmit and updates todo array", () => {
    const { input, button } = setUp();
    fireEvent.change(input, { target: { value: "gopal" } });
    fireEvent.click(button);
    expect(input).toHaveValue("");
  });

  describe("todo items tests", () => {
    const todoListSimulationLogic = (taskText) => {
      const { input, button } = setUp();
      fireEvent.change(input, { target: { value: taskText } });
      fireEvent.click(button);
      const label = screen.getByText(taskText);
      const checkbox = screen.getByRole("checkbox");
      const deleteButton = screen.getByText("Delete");
      return { label, checkbox, deleteButton };
    };

    test("the handlecheck function and strikes the task value", () => {
      const { label } = todoListSimulationLogic("this is to check label");
      expect(label).toBeInTheDocument();
      expect(label).not.toHaveStyle("text-decoration: line-through");
    });

    test("the handlecheck function that strikes the task value", () => {
      const { label, checkbox } = todoListSimulationLogic("this is first task");
      fireEvent.click(checkbox);
      expect(label).toHaveStyle("text-decoration: line-through");
    });

    test("the delete button exists", () => {
      const { deleteButton } = todoListSimulationLogic(
        "this is delete button check"
      );
      expect(deleteButton).toBeInTheDocument();
    });
    test("the checkbox input exists", () => {
      const { checkbox } = todoListSimulationLogic("this is to check checkbox");
      expect(checkbox).toBeInTheDocument();
    });
  });
});
