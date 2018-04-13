import React, {Component} from 'react';

import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

class TodoApp extends Component {
  state = {
    todos: null
  };

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    this.setState({todos});
  }

  addTodo = title => {
    const todos = [...this.state.todos];
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length + 1,
          title,
          completed: false
        }]
    });
  };

  changeTodoState = id => {
    const todos = this.state.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.setState({todos});
  };

  render() {
    let todos = <p>Loading...</p>;

    if (this.state.todos) {
      todos = (
        <Todos
          todos={this.state.todos}
          clicked={this.changeTodoState}
        />
      );
    }

    return (
      <div>
        <AddTodo clicked={this.addTodo}/>
        {todos}
      </div>
    );
  }
}

export default TodoApp;
