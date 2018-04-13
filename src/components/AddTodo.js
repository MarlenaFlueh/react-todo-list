import React, {Component} from 'react';

class AddTodo extends Component {
  state = {
    todoName: ''
  };

  onChangeHandler = event => {
    this.setState({todoName: event.target.value});
  };

  render() {
    return (
      <div>
        <input onChange={this.onChangeHandler} />
        <button onClick={() => this.props.clicked(this.state.todoName)}>add</button>
      </div>
    );
  }
}

export default AddTodo;
