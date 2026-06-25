import "./Todo.css";
import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    
  return (
    <div className="box">
        <h1>TodoAdd</h1>
        <form  className="form">
         <input type="text"required placeholder="Your name....." />
        </form>
    </div>
  )
}

export default Todo