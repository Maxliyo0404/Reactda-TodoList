import "./App.css";
import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const Addtodo = (()=>){

  }
  return (
   <>
   <div className="cards">
      <div className="card">
        <h1 className="title">TodoList</h1>
        <form  className="form">
          <input value={name} onChange={(e)=>setTodo(e.target.value)} type="text" required placeholder="Add todo......" />
          <button type="submit" className="btn" onClick={}> Submit</button>
        </form>
      </div>
      <ul className="list">
        {(e.map()=>()) }
      </ul>
   </div>
   
   </>
  )
}

export default App