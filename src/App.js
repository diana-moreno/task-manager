import React, { Component } from 'react';
import Header from './components/Header/Header';

import TodoList from './components/TaskList/TodoList';
import DoneList from './components/TaskList/DoneList';

class App extends Component {
  state = {
    tasks: []
  }

  render() {
    const minWidthStyle = {minWidth: '600px'}

    return (
      <div className='container-fluid'>
        <Header title='Task manager' />
        <div className='d-flex flex-wrap mt-5'>
{/*          <div className='col-md-4 mx-auto' style={minWidthStyle}>
            <NewEvent addTask={this.addTask}/>
          </div>*/}
          <div className='col-md-6 mx-auto' style={minWidthStyle}>
            <TodoList addTask={this.addTask}/>
          </div>
          <div className='col-md-6 mx-auto' style={minWidthStyle}>
            <DoneList tasks={this.state.tasks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
