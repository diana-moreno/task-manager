import React, { Component } from 'react';
import TodoTask from '../../components/TodoTask/TodoTask';
import TodoDoneList from './TodoDoneList.css';

class DoneList extends Component {
  state = {

  }

  render() {
    console.log(this.props.tasks)
    return(
      <div className='card mt-4'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>DONE</h2>
          {this.props.tasks.map(task =>
          <TodoTask task={task} />
          )}

        </div>
      </div>
    );
  }
}

export default DoneList;