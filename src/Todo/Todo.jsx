import "./Todo.css";
import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    
  return (
    <div className="box">
        <h1>TodoAdd</h1>
        <form  className="form">
         <input value={todo}  type="text"required placeholder="Your name....." />
         <button className="btn" type="submit" onClick={()=>}>Send</button>
        </form>
    </div>
  )
}

export default Todo