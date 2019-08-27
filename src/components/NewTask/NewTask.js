import React, { Component } from 'react';

let initialState = {
  task: {
    title: '',
    description: '',
    priority: '',
    date: '',
    time: ''
  },
  error: {
    title: false,
    priority: false
  }
}

class NewTask extends Component {
  state = {
    ...initialState
  }

  setStateWithForm = key => e => { //must be arrow function
    this.setState({
      ...this.state, //si había algo antes de task
      task: {
        ...this.state.task, // lo que haya en task
        [key] : e.target.value, // lo que cambias
      }
    })
  }

  validateForm = e => {
    const { title, priority } = this.state.task
    if(title === '' | priority === '') {
      this.setState({
        ...this.state,
        error: {
          ...this.state.error,
          title: title === '' ? true : false,
          priority: priority === '' ? true : false,
        }
      })
      return
    }
    return true;
  }

  createTask = e => {
    e.preventDefault() //necesario al hacer un form-submit si no se envían los datos realmente.
    if(this.validateForm()) {
      const newTask = {...this.state.task}
      console.log(newTask)

      this.props.addTask(newTask) // se pasa newTask hacia la funcion de TodoList.
      this.resetForm();
    }
  }

  resetForm = () => {
    this.setState({
      ...initialState
    })
  }

  render() {
    return(
      <div className='card text-center mt-4'>
        <div className='card-body'>
          <form
            onSubmit={this.createTask}
          >
            <div className='d-flex'>
              <div className='d-flex flex-column justify-content-center'>
                <div className='text-left'>
                  <label className="col-sm-4 col-md-3 col-form-label text-nowrap">Title *</label>
                  <div className="col-sm-11">
                    <input
                      type="text"
                      className={this.state.error.title ? 'errorEmptyField form-control' : 'form-control'}
                      placeholder="Enter title"
                      value={this.state.task.title} // is needed when reset state
                      onChange={this.setStateWithForm('title')
                    }
                    />
                  </div>
                </div>
                <div className='text-left'>
                  <label className="col-sm-4 col-md-3 col-form-label text-nowrap">Description</label>
                  <div className="col-sm-11">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter a description"
                      value={this.state.task.description}
                      onChange={this.setStateWithForm('description')}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className='d-flex flex-column justify-content-around'>
                <div className='row'>
                  <label className="col-sm-4 col-md-3 col-form-label text-left text-nowrap">Priority *</label>
                  <div className="col-sm-8 col-md-9">
                    <select
                      className={this.state.error.priority ? 'errorEmptyField form-control' : 'form-control'}
                      value={this.state.task.priority}
                      onChange={this.setStateWithForm('priority')}
                    >
                      <option value=''>--Select priority--</option>
                      <option value='high'>High</option>
                      <option value='medium'>Medium</option>
                      <option value='low'>Low</option>
                    </select>
                  </div>
                </div>
                <div className='row'>
                  <label className="col-sm-4 col-md-3 col-form-label text-left text-nowrap">Due date</label>
                  <div className="col-sm-8 col-md-9">
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.task.date}
                      onChange={this.setStateWithForm('date')}
                    />
                  </div>
                </div>
                <div className='row'>
                  <label className="col-sm-4 col-md-3 col-form-label text-left text-nowrap">Time</label>
                  <div className="col-sm-8 col-md-9">
                  <input
                    type="time"
                    disabled= {this.state.task.date ? false : true}
                    className="form-control"
                    value={this.state.task.time}
                    onChange={this.setStateWithForm('time')}
                  />
                  </div>
                </div>
              </div>
            </div>
            <button
              className='d-inline py-2 mt-3 col-sm-3 col-lg-3 btn btn-success mx-auto'
              type='submit'
            >Add new</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTask;