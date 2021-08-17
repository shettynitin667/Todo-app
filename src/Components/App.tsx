import "./App.css";
import Navbar from "./Navbar/Navbar";
import Todo from "./TodoContainer/todo";

function App() {
  return (
    <div className="App">
      <Navbar title="Todo App" />
      <Todo />
    </div>
  );
}

export default App;
