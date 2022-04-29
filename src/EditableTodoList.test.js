import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./EditableTodoList";

const testTodos = [
  {
    id: 1,
    title: "Code!",
    description: "Write some code",
    priority: 2,
  },
  {
    id: 2,
    title: "Make dinner",
    description: "Cook something healthy",
    priority: 1,
  },
  {
    id: 3,
    title: "Go to bed",
    description: "In bed by 11:15",
    priority: 3,
  },
];

describe("EditiableTodoList app", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={testTodos} />);
  });

  it("contains expected title", function () {
    const result = render(<EditableTodoList todos={testTodos} />);
    expect(result.queryByText("Code!")).toBeInTheDocument();
    expect(result.queryByText("Make dinner")).toBeInTheDocument();
    expect(result.queryByText("Go to bed")).toBeInTheDocument();
  });
});
