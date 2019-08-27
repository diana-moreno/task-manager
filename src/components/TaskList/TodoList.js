import React, { Component } from 'react';
import TodoTask from '../../components/TodoTask/TodoTask';
import NewTask from '../../components/NewTask/NewTask';
import TodoDoneList from './TodoDoneList.css';

class TodoList extends Component {
  state = {
    tasks: []
  }

  sortTasks = tasksList => {
    let sortedTasks = [
      ...tasksList.filter(a => a.date && a.time)
        .sort((a, b) => a.time.localeCompare(b.time))
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
      ...tasksList.filter(a => a.date && !a.time)
        .sort((a, b) => new Date(a.date) - new Date(b.date)),
      ...tasksList.filter(a => !a.date)
    ]
    return sortedTasks
  }

  addTask = newTask => { //arrow function para que tenga acceso a this
    let tasks = [...this.state.tasks, newTask]
    let sortedTasks = this.sortTasks(tasks)
    console.log(sortedTasks)

/*    let urgentPriorityTasks = tasks.filter(task => task.priority === 'high')
    let mediumPriorityTasks = tasks.filter(task => task.priority === 'medium')
    let lowPriorityTasks = tasks.filter(task => task.priority === 'low')
*/
    this.setState({
      tasks: sortedTasks
    })
  }

  render() {
    console.log(this.props.tasks)
    return(
      <div className='card mt-4'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>TO DO</h2>
          {this.state.tasks.map(task =>
          <TodoTask task={task} />
          )}
          <NewTask addTask={this.addTask}/>

        </div>
      </div>
    );
  }
}

export default TodoList;