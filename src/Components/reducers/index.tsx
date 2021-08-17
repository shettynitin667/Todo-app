import { combineReducers } from "redux";

interface Todo {
  title: string;
  id: number;
}
interface Action {
  type: string;
  payload?: number | Object;
}
const todos = (state: Todo[] = [], action: Action) => {
  if (action.type == "GET_TODOS") {
    return state;
  }

  if (action.type == "ADD_TODO") {
    return [...state, { title: action.payload, id: state.length }];
  }

  if (action.type == "DELETE_TODO") {
    let newList = state.filter((todo: Todo) => todo.id != action.payload);

    //Resetting the indexes from 0 to last
    newList = newList.map((todo: Todo, index: number) => {
      return { ...todo, id: index };
    });
    return newList;
  }
  return state;
};

export default combineReducers({
  todos,
});
