import React, { Component } from 'react';
import TodoApp from './container/TodoApp';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <TodoApp />
      </div>
    );
  }
}

export default App;
