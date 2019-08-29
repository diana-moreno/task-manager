import React, { Component } from 'react';
import Header from './components/Header/Header';

import TodoList from './components/TaskList/TodoList';
import DoneList from './components/TaskList/DoneList';

class App extends Component {
  state = {
    TodoTasks: [],
    DoneTasks: []
  }

  // cargar los datos almacenados al cargar la página
  componentDidMount() {
    localStorage.setItem('TodoTasks', [])
    localStorage.setItem('DoneTasks', [])

    const todotasks = localStorage.getItem('TodoTasks')
    const donetasks = localStorage.getItem('DoneTasks')

    this.setState({
      TodoTasks: todotasks ? JSON.parse(todotasks) : [], // lo convierte en un array de objetos
      DoneTasks: donetasks ? JSON.parse(donetasks) : []
    })
  }
  // almacenar los datos cuando se añaden o eliminan eventos
  componentDidUpdate() {
    localStorage.setItem('TodoTasks', JSON.stringify(this.state.TodoTasks))
    localStorage.setItem('DoneTasks', JSON.stringify(this.state.DoneTasks))
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
    let tasks = [...this.state.TodoTasks, newTask]
    let sortedTasks = this.sortTasks(tasks)
    this.setState({
      ...this.state.TodoTasks,
      TodoTasks: sortedTasks
    })
  }

  deleteTask = (id, status) => {
    if(status === 'todo') {
      let taskDeleted = [...this.state.TodoTasks].filter(task => task.id !== id)
      this.setState({
        ...this.state.DoneTask,
        TodoTasks: taskDeleted
      })
    } else if(status === 'done') {
      let taskDeleted = [...this.state.DoneTasks].filter(task => task.id !== id)
      this.setState({
        ...this.state.TodoTasks,
        DoneTasks: taskDeleted
      })
    }
  }

  doneTask = (id) => {
    let doneTask = [...this.state.TodoTasks].filter(task => task.id === id)[0]
    let DoneTasks = [...this.state.DoneTasks, doneTask]
    this.deleteTask(id, 'todo')
    this.setState({
      ...this.state.TodoTasks,
      DoneTasks
    })
  }
  restoreTask = (id) => {
    let taskToRestore = [...this.state.DoneTasks].filter(task => task.id === id)[0]
    this.addTask(taskToRestore);
    this.deleteTask(id, 'done');
  }

  render() {
    const minWidthStyle = {minWidth: '600px'}

    return (
      <div className='container-fluid'>
        <Header title='Task manager' />
        <div className='d-flex flex-wrap mt-5'>
          <div className='mx-auto' style={minWidthStyle}>
            <TodoList
              TodoTasks={this.state.TodoTasks}
              addTask={this.addTask}
              deleteTask={this.deleteTask}
              doneTask={this.doneTask}
            />
          </div>
          <div className='mx-auto' style={minWidthStyle}>
            <DoneList
              DoneTasks={this.state.DoneTasks}
              addTask={this.addTask}
              deleteTask={this.deleteTask}
              restoreTask={this.restoreTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
