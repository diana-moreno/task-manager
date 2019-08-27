import React from 'react';
import './TodoTask.css';

class TodoTask extends React.Component {
  render() {
  return (
    <div>
      <div className='d-flex text-left align-items-top mb-4'>
        <div className='w-75 ml-5'>

          <i class="far fa-meh-rolling-eyes orange"></i>
{/*          <i class="far fa-tired red"></i>
          <i class="far fa-smile green"></i>*/}
          <h4 className='mt-4 d-inline'>{this.props.task.title}</h4>
          <p className='mb-0'><span>{this.props.task.description}</span></p>
          <p className='mb-0'><span>Due date: {this.props.task.date} {this.props.task.time}h</span></p>
          </div>
        <div className='w-15 text-right mr-2'>

          <button><i className="fas fa-check green"></i></button>
          <button><i className="fas fa-times red"></i></button>
        </div>
      </div>
    </div>
  );
}
}

export default TodoTask;



