import React, { useState, useContext } from "react";
import {
  Container,
  TextField,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import "./todo.styles.css";
import TodoElement from "./todoElement";
import { addTodo, deleteTodo, getTodos } from "../actions";
import { connect } from "react-redux";

const useStyles = makeStyles({
  input: {
    margin: "0px 5px",
  },
});

interface TodoFormat {
  title: string;
  id: number;
}

const Todo: React.FC = (props: any) => {
  const classes = useStyles();

  const [inputTodo, setInputTodo] = useState<string | null>("");

  function onTodoAdd(e: any) {
    e.preventDefault();

    //Only add if input field id not empty
    if (inputTodo) {
      props.addTodo(inputTodo);
      setInputTodo("");
    }
  }

  //Set local state while input changes
  function onInputChange(e: any) {
    const todo = e.target.value;
    setInputTodo(todo);
  }

  function onDelete(id: number) {
    props.deleteTodo(id);
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={onTodoAdd}>
        <Box display="flex" justifyContent="center">
          <TextField
            value={inputTodo}
            variant="filled"
            fullWidth={true}
            type="text"
            label="Enter todo"
            className={classes.input}
            onChange={onInputChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>
        </Box>
      </form>

      <Box className="todoList" flexDirection="column" width="100%">
        {props.todos.length > 0 &&
          props.todos.map((todo: TodoFormat) => (
            <TodoElement key={todo.id} onDelete={onDelete} todo={todo} />
          ))}
        {props.todos.length == 0 ? "No Todos found" : null}
      </Box>
    </Container>
  );
};

//Props for the Component
const mapStateToProps = (state: any) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo, getTodos })(
  Todo
);
