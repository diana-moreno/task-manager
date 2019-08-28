import React, { Component } from 'react';
import TodoTask from '../../components/TodoTask/TodoTask';
import NewTask from '../../components/NewTask/NewTask';


class TodoList extends Component {
  state = {}

  render() {
    return(
      <div className='card mt-4'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>TO DO</h2>
          {this.props.TodoTasks.map(task =>
          <TodoTask
            key={task.id}
            task={task}
            deleteTask={this.props.deleteTask}
            doneTask={this.props.doneTask}
          />
          )}
          <NewTask addTask={this.props.addTask}/>
        </div>
      </div>
    );
  }
}

export default TodoList;