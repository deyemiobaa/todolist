import React from 'react';
import ToDoList from './ToDoList';
import Header from './Header';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Learn React',
          completed: false,
        },
        {
          id: 2,
          title: 'Learn Redux',
          completed: false,
        },
        {
          id: 3,
          title: 'Learn React Router',
          completed: false,
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const { todos } = this.state;
    console.log(todos);
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <Header />
        <ToDoList todos={todos} onChange={this.handleChange} />
      </>
    );
  }
}
export default TodoContainer;
