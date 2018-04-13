import React from 'react';

import Todo from './Todo';

const todos = (props) => (
  <ul>
    {
      props.todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          clicked={props.clicked}
        />
      ))
    }
  </ul>
);

export default todos;
