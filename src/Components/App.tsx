import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Todo from './TodoContainer/todo';
import {TodoProvider} from "./TodoContext"

function App() {
  return (
    <TodoProvider>
        <div className="App">
          <Navbar title="Todo App"/>
          <Todo/>
        </div>
    </TodoProvider>
    
  );
}

export default App;
