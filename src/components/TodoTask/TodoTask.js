import React from 'react';

class TodoTask extends React.Component {
  render() {
    let dueDateMessage = Object.keys(this.props.task.date).length > 0 ? 'Due date: ' : null;
    let colorDate = new Date(this.props.task.date) >= new Date()  ? ' blue mb-0' : 'red mb-0';
    let priorityMessage = Object.keys(this.props.task.priority).length > 0 ? 'Priority: ' : null;

  return (
    <div>
      <div className='d-flex text-left align-items-top mb-4'>
        <div className='w-75 ml-5'>
          <input
            className='margin-input-status'
            type="checkbox" name="done" value="" title='Done'
            onClick={() => this.props.doneTask(this.props.task.id)}
          />
          <h4 className='mt-4 d-inline'>{this.props.task.title}</h4>
          <p className='mb-0'><span>{this.props.task.description}</span></p>
          <p className='mb-0'>
            <span>
              {priorityMessage} {this.props.task.priority}
            </span>
          </p>
          <p className={colorDate}>
            <span>
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

export default TodoTask;



