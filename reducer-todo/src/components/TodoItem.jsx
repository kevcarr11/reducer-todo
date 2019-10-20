import React from 'react'

function TodoItem(props) {
  console.log(props)
  return (
    <div>
      <p>{props.todoItem.item}</p>
    </div>
  )
}

export default TodoItem
