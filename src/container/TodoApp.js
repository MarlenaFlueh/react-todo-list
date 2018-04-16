import React, {Component} from 'react';

import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

class TodoApp extends Component {
  state = {
    todos: ''
  };

  async componentDidMount() {
    const response = await fetch('https://second-todo-app.firebaseio.com/todos.json');
    const todos = await response.json();
    const newTodos = [];

    for (let key in todos) {
      newTodos.push({
        id: key,
        ...todos[key]
      })
    }

    this.setState({todos: newTodos});
  }
  
  addTodo = async title => {
    const todos = [...this.state.todos];

    await fetch('https://second-todo-app.firebaseio.com/todos.json', {
      method: 'post',
      body: JSON.stringify({
        title,
        completed: false
      })
    });

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
