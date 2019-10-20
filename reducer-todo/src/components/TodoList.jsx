import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  return (
    <div>
      {props.state.map(item => (
        <TodoItem 
          key={item.id}
          todoItem={item}
          />
      ))}
    </div>
  )
}

export default TodoList
