import React from "react";
import { render } from "@testing-library/react";
import EditableTodo from "./EditableTodo";
import TodoApp from "./TodoApp";
import testTodos from "./testTodos";

describe("EditableTodo app", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={testTodos[0]} />);
  });

  it("contains expected title", function () {
    const result = render(<EditableTodo todo={testTodos[0]} />);
    expect(result.queryByText("Code!")).toBeInTheDocument();
  });
});
