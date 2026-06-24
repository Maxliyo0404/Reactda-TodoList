import "./App.css";
import React from 'react'

function App() {
  return (
   <>
   <div className="cards">
      <div className="card">
        <h1 className="title">TodoList</h1>
        <form  className="form">
          <input type="text" required placeholder="Add todo......" />
          <button type="submit" className="btn"> Submit</button>
        </form>
      </div>
   </div>
   
   </>
  )
}

export default App