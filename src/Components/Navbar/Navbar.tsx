import React,{useContext} from 'react'
import "./navbar.styles.css";
import {TodoContext} from '../TodoContext'

interface Navbar {
    title: string,
}


const Navbar:React.FC<Navbar>=(props)=>{
    const {todos} = useContext(TodoContext);
    return(
    <div className="navbar">{props.title}  ({`${todos.length} todos left`})</div>
    
    );
}

export default Navbar