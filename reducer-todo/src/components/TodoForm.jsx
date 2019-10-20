import React, { useState } from 'react'


function TodoForm(props) {
  const [task, newTask] = useState("");

  const handleChange = (e) => {
    newTask(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.dispatch({ type: "ADD_NEW_TASK", payload: task})
    newTask('')
  }


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={task}
        onChange={handleChange}
        />
      </form>
    </div>
  )
}

export default TodoForm
