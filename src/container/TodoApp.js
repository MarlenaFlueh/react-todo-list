import React, {Component} from 'react';
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';

class TodoApp extends Component {
  state = {
    todos: [{
      id: 0,
      title: 'Todo one',
      completed: true
    }, {
      id: 1,
      title: 'Todo two',
      completed: false
    }]
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
    })
  }

  changeTodoState = id => {
    const todos = [...this.state.todos].map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo);
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div>
        <AddTodo clicked={this.addTodo}/>
        <Todos todos={this.state.todos} clicked={this.changeTodoState}/>
      </div>
    )
  }
}


export default TodoApp;
