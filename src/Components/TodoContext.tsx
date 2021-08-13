import React,{createContext} from 'react'

export const TodoContext = createContext<string>("");

export const TodoProvider:React.FC=(props)=>{

    
    return(
        <TodoContext.Provider value="">
            {props.children}
        </TodoContext.Provider>
    );
}
