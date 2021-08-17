import React,{createContext,useState} from 'react'

export const TodoContext = createContext<any>({});

 interface TodoFormat{
    title:string,
    id:number
}
export const TodoProvider:React.FC=(props)=>{
    
    const [todos, setTodos] = useState<TodoFormat[]>([]);
    
    return(
        <TodoContext.Provider value={{todos, setTodos}}>
            {props.children}
        </TodoContext.Provider>
    );
}
