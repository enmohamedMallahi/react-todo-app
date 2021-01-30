import React, {useState} from 'react';

const Todo = ({title, isCompleted}) => {
  const [completed, setComplete] = useState(isCompleted)
  const icon = completed ? "fa-check-square" : "fa-square";
  return (
    <div className="todo">
      <h5>{title}</h5>
      <i onClick={() => setComplete(!completed)} className={`fas ${icon}`}></i>
    </div>
  )
}

export default Todo;