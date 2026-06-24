import "./App.css";
import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);

  return (
   <>
   <div className="cards">
      <div className="card">
        <h1 className="title">TodoList</h1>
        <form  className="form">
          <input value={name} onChange={(e)=>setTodo(e.target.value)} type="text" required placeholder="Add todo......" />
          <button type="submit" className="btn"> Submit</button>
        </form>
      </div>
   </div>
   
   </>
  )
}

export default App