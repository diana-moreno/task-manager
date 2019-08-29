import React, { Component } from 'react';
import DoneTask from '../../components/DoneTask/DoneTask';
import PropTypes from 'prop-types';

class DoneList extends Component {
  state = {}

  render() {
    return(
      <div className='card'>
        <div className='card-body m-4'>
          <h2 className='mb-4 word-nowrap text-center title'>DONE</h2>
            {this.props.DoneTasks.map(task =>
              <DoneTask
                key={task.id}
                task={task}
                deleteTask={this.props.deleteTask}
                restoreTask={this.props.restoreTask}
              />
            )}
        </div>
      </div>
    );
  }
}

DoneList.propTypes = {
  DoneTasks : PropTypes.array.isRequired,
  deleteTask : PropTypes.func.isRequired,
  restoreTask : PropTypes.func.isRequired
}

export default DoneList;