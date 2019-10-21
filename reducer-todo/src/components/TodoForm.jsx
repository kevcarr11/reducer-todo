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

  const handleCompleted = e => {
    e.preventDefault();
    props.dispatch({ type: "CLEAR_COMPLETED" })

}


  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        value={task}
        onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
      <form>
      <button onClick={handleCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm
