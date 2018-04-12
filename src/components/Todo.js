import React from 'react';

const todo = (props) => {
  return props.completed ? <li style={{textDecorationLine: 'line-through'}}>{props.title}</li> : <li>{props.title}</li>
}

export default todo;
