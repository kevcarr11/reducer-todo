import React from 'react'

function TodoItem(props) {
console.log(props.todoItem)
  const handleToggle = (e) => {
    e.preventDefault();
    props.dispatch({ type: "TOGGLE_ITEM", payload: props.itemId })
  }
  return (
    <h3 onClick={handleToggle} 
    className={`task${props.todoItem.completed ? " completed" : ""}`}>
      <span>{props.todoItem.item}</span>
    </h3>
  )
}

export default TodoItem
