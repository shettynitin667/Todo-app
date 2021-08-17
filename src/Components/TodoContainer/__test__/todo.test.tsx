import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Todo } from "../todo";

interface Todo {
  title: string;
  id: number;
}

const todos = [
  {
    title: "First",
    id: 0,
  },
];

const props = {
  todos,
  addTodo: jest.fn(),
  getTodo: jest.fn(),
  deleteTodo: jest.fn(),
};

const addTodos = (todos: Todo[]) => {
  const inputElement = screen.getByRole("textbox");
  const addButton = screen.getByRole("button");
  todos.map((todo) => {
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(addButton);
  });
};

const deleteTodos = () => {
  const deleteButtons = screen.queryAllByTestId("deleteTodo");
  deleteButtons.map((deleteButton) => {
    fireEvent.click(deleteButton);
  });
};

test("Check count of the tasks added", () => {
  render(<Todo {...props} />);
  addTodos(todos);
  const todoElements = screen.queryAllByTestId("todoElement");
  expect(todoElements.length).toBe(1);
});

//Remaining to be impemented
// test("Check count becomes zero when all tasks are deleted", async () => {
//   render(<Todo {...props} />);
//   addTodos(todos);
//   // deleteTodos();
//   // const todoElements = screen.queryAllByTestId("todoElement");
//   // expect(todoElements.length).toBe(2);
//   const deleteButtons = await screen.findByTestId("deleteTodo");
//   // fireEvent.click(deleteButtons);
//   // const todoElements = screen.queryAllByTestId("todoElement");
//   expect(deleteButtons).toBeInTheDocument();
// });
