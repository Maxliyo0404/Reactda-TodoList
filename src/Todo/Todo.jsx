import "./Todo.css";
import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState("");
    const [list, setList] = useState([]);
    const addList = ()=>{
        if(todo.trim()!== ""){
         setList([...list, todo]);
         setTodo("")
        } 
    }
  return (
    <div className="boxs">
    <div className="box">
        <h1>TodoAdd</h1>
        <form  className="form">
         <input onChange={(e)=>setTodo(e.target.value)} value={todo}  type="text"required placeholder="Your name....." />
         <button className="btn" type="submit" onClick={()=>addList}>Send</button>
        </form>
        </div>
        <ul className="list">
            {list.map((el, index)=>)
            }
        </ul>
    </div>
  )
}

export default Todo