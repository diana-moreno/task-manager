import React, { Component } from 'react';
import TodoTask from '../../components/TodoTask/TodoTask';
import NewTask from '../../components/NewTask/NewTask';


class TodoList extends Component {
  state = { visibleNewTask: false }

  toggleClick = () => {
    this.setState({
      visibleNewTask: this.state.visibleNewTask ? false : true
    })
  }
  render() {

    return(
      <div className='card mt-4'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>TO DO</h2>
          <div>
            <i className="fas fa-plus green"
               onClick={() => this.toggleClick()}
            >
              <h4 className='d-inline new-task-add-message green'>Add new task</h4>
            </i>
          </div>
          {this.state.visibleNewTask &&
          <NewTask
            addTask={this.props.addTask}
            toggleClick={this.toggleClick}
          />}

          {this.props.TodoTasks.map(task =>
            <TodoTask
              key={task.id}
              task={task}
              deleteTask={this.props.deleteTask}
              doneTask={this.props.doneTask}
            />
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;