import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Box } from "@material-ui/core";
import "./todo.styles.css";

interface Todo {
  todo: {
    title: string;
    id: number;
  };
  onDelete: (id: number) => void;
}

const TodoElement: React.FC<Todo> = ({ todo, onDelete }) => {
  return (
    <Box
      display="flex"
      data-testid="todoElement"
      justifyContent="space-between"
      className="todoElement"
    >
      {todo.title}
      <DeleteIcon
        data-testid="deleteTodo"
        onClick={() => onDelete(todo.id)}
        className="delete"
      />
    </Box>
  );
};

export default TodoElement;
