import "./App.css";
import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const addTask = ()=>{
  if (task.trim() === ""){
    setTask([...task, todo])
  }
  }
  return (
   <>
   <div className="cards">
      <div className="card">
        <h1 className="title">TodoList</h1>
        <form  className="form">
          <input value={name} onChange={(e)=>setTodo(e.target.value)} type="text" required placeholder="Add todo......" />
          <button type="submit" className="btn" onClick={addTask}> Submit</button>
        </form>
      </div>
      <ul className="list">
        {task.map((el, index)=>(
         <li key={index} className="item">
           
        </li>
        ))}
       
      </ul>
   </div>
   
   </>
  )
}

export default App