import React from 'react';
import './DoneTask.css';

class DoneTask extends React.Component {
  render() {
    let dueDateMessage = Object.keys(this.props.task.date).length > 0 ? 'Due date: ' : null

    return (
      <div>
        <div className='d-flex text-left align-items-top mb-4'>
          <div className='w-75 ml-5'>
            <i
              className="fas fa-check green margin-input-status"
              onClick={() => this.props.restoreTask(this.props.task.id)}>
            </i>
            <h4 className='mt-4 d-inline'>{this.props.task.title}</h4>
            <p className='mb-0'><span>{this.props.task.description}</span></p>
            <p className='mb-0'>
              <span>
              {dueDateMessage} {this.props.task.date} {this.props.task.time}
              </span>
            </p>
            </div>
          <div className='w-15 text-right mr-2'>
            <button
              onClick={() => this.props.deleteTask(this.props.task.id, 'done')}
            >
              <i className="fas fa-times red"></i>
            </button> {/*función que llama a una función (arrow function) o sino constructor bind*/}
          </div>
        </div>
      </div>
    );
  }
}

export default DoneTask;
