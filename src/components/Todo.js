import React from 'react';

const todo = props => (
  <li
    onClick={() => props.clicked(props.id)}
    style={{textDecoration: props.completed ? 'line-through' : 'none'}}
  >{props.title}</li>
);

export default todo;
