import React, {useState} from "react";
import Todo from "./components/Todo.js";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const data = await response.json();
    console.log(data)
    setTodos(data)
  }


  return (
    <div className="App">
      <header>
        <h3>TodoApp</h3>
        <button className="btn" onClick={() => getTodos()}>Get Todos</button>
      </header>
      <div className="todos">
        {todos.map(todo => {
          return <Todo key={todo.id} title={todo.title} isCompleted={todo.completed} />
        })}
      </div>
    </div>
  );
}
