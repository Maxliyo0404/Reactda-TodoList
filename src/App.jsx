import "./App.css";
import React, { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("");
  const [task, setTask] = useState([]);
  const addTask = ()=>{
  if (todo.trim() !== ""){
    setTask([...task, todo])
    setTodo("")
  }
  }
  const deleteBtn = (index) =>{
    const newDelete = task.filter((_, i)=> i !== index);
    setTask(newDelete);
  }
  return (
   <>
   <div className="cards">
      <div className="card">
        <h1 className="title">TodoList</h1>
        <form  className="form">
          <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" required placeholder="Add todo......" />
          <button type="submit" className="btn" onClick={addTask}> Submit</button>
        </form>
      </div>
      <ul className="list">
        {task.map((el, index)=>(
         <li key={index} className="item">
           {el}
           <button className="btn2" type="submit" onClick={()=>deleteBtn(index)}>🗑 Delete</button>
           <button></button>
        </li>
        ))}
       
      </ul>
   </div>
   
   </>
  )
}

export default App