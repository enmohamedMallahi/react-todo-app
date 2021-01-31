import React, {useState} from "react";
import Todo from "./components/Todo.js";
import "./style.css";

export default function App() {
  const [todos, setTodos] = useState([{text: 'Get Money back'}]);
  
  return (
    <div className="App">
      <header>
        <h3>TodoApp <span className="text-tiny">(by mohaXmall)</span></h3>
        <button className="btn" onClick={() => getTodos()}>Get Todos</button>
      </header>
      <form style={{textAlign: 'center'}}>
        <input/>
        <button>Add</button>
      </form>
      <div className="todos">
        {todos.map(todo => {
          return <Todo key={todo.id} text={todo.text} isCompleted={todo.completed} />
        })}
      </div>
    </div>
  );
}
