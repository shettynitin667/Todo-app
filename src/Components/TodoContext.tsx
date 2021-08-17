import { createContext, useState } from "react";

interface Todo {
  title: string;
  id: number;
}
export const TodoContext = createContext<any>({});

export function TodoProvider(props: any) {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodoContext.Provider>
  );
}
