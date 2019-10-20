import React from 'react'

function TodoItem(props) {
  return (
    <div>
      <p>{props.todoItem.item}</p>
    </div>
  )
}

export default TodoItem
