import React from 'react';
import PropTypes from 'prop-types';

class TodoTask extends React.Component {

  choosePriorityColor = () => {
    let colorPriority = '';
      if(this.props.task.priority === 'low') {
        colorPriority = 'green';
      } else if(this.props.task.priority === 'medium') {
        colorPriority = 'orange';
      } else {
        colorPriority = 'red';
      }
      return colorPriority;
    }

  render() {
    let dueDateMessage = Object.keys(this.props.task.date).length > 0 ? 'Due date: ' : null;
    let colorDate = new Date(this.props.task.date) >= new Date()  ? ' blue mb-0' : 'red mb-0';
    let priorityMessage = Object.keys(this.props.task.priority).length > 0 ? 'Priority: ' : null;


    return (
      <div>
        <div className='d-flex text-left align-items-top mb-2'>
          <div className='w-75 ml-5'>
            <i
              className="far fa-square margin-input-status"
              title='Done'
              onClick={() => this.props.doneTask(this.props.task.id)}
            ></i>
            <h4 className='mt-4 d-inline'>{this.props.task.title}</h4>
            <p className='mb-0 ml-4'><span>{this.props.task.description}</span></p>
            <p className='mb-0 ml-4'>
              <span className={this.choosePriorityColor()}>
                {priorityMessage} {this.props.task.priority}
              </span>
            </p>
            <p className='ml-4'>
              <span className={colorDate}>
                {dueDateMessage} {this.props.task.date} {this.props.task.time}
              </span>
            </p>
            </div>
          <div className='w-15 text-right mr-2'>
            <button
              onClick={() => this.props.deleteTask(this.props.task.id, 'todo')}
            >
              <i className="fas fa-times red" title='Delete'></i>
            </button> {/*función que llama a una función (arrow function) o sino constructor bind*/}
          </div>
        </div>
      </div>
    );
  }
}

TodoTask.propTypes = {
  deleteTask : PropTypes.func.isRequired,
  doneTask : PropTypes.func.isRequired,
  task : PropTypes.object.isRequired
}

export default TodoTask;



