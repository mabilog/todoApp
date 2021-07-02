import React from 'react'

const Todo = ({todo}) => {
  return (
    <div key={todo.id}>
      {todo.todo}
    </div>
  )
}

export default Todo
