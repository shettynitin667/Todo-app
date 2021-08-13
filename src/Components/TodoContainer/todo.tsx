import React,{useState, useContext} from 'react'
import {Container,Grid,TextField,Button, makeStyles,Box, Typography} from "@material-ui/core";
import "./todo.styles.css"
import TodoElement from './todoElement';
import {TodoContext} from '../TodoContext'

const useStyles = makeStyles({
    input:{
        margin:"0px 5px"
    }
})

const Todo:React.FC=()=>{
    const name = useContext(TodoContext)
    const classes = useStyles()
    const [todos, setTodos] = useState<any[]>([]);
    const [inputTodo, setInputTodo] = useState<string|null>("");

    function onTodoAdd(e:any){
        e.preventDefault();
        if(inputTodo){
            setTodos(prevTodos=>{
                return [...prevTodos, {title:inputTodo, id:prevTodos.length}]
            });
            console.log(todos);
            setInputTodo("");
        }
    }

    function onInputChange(e:any){
        const todo = e.target.value;
         setInputTodo(todo);
    }

    function onDelete(id:number){
        //Removing the todo by checking the id
        let newList = todos.filter(todo=> todo.id!=id);

        //Resetting the indexes from 0 to last
        newList = newList.map((todo, index)=>{
            return {...todo, id: index}
        });
        setTodos(newList);
    }


    return(
        <Container maxWidth="sm"> 
        {name}
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
                <Button type="submit" variant="contained" color="secondary" >Add</Button>
                </Box>
                </form>
            
           
            <Box className="todoList" flexDirection="column" width="100%">
                {todos.length>0 && todos.map((todo:{title:string, id:number})=>
                    <TodoElement key={todo.id} onDelete={onDelete} todo={todo}/>
                )}
                {todos.length==0? "No Todos found": null}
            </Box>
        </Container>    
        
    
    );
}

export default Todo;