import React from 'react';
import Todo from './Todo';

const todos = (props) => {
  return (
    <div>
      <ul>
        {
          props.todos.map((todo) => {
            return <Todo
                    key={todo.id}
                    title={todo.title}
                    completed={todo.completed}/>
          })
        }
      </ul>
    </div>
  )
}

export default todos;
