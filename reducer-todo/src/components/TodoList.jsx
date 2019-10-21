import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
  console.log(props.state)

  return (
    <div>
      {props.state.map((item, index) => (
        <TodoItem 
          key={index}
          itemId={item.id}
          todoItem={item}
          dispatch={props.dispatch}
          />
      ))}
    </div>
  )
}

export default TodoList
