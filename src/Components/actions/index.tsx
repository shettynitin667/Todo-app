export const getTodos = () => {
  return {
    type: "GET_TODOS",
  };
};

export const addTodo = (todo: string) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};
