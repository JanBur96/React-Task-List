import React from 'react';

export default class AddTask extends React.Component {
  handleAddTask = (e) => {
    e.preventDefault();

    const taskValue = e.target.elements.task.value.trim();
    
    if (taskValue) {
      this.props.handleAddTask(taskValue);
      e.target.elements.task.value = '';
    }
  }

  render() {
    return (
      <div>
        <form className="add-task" onSubmit={this.handleAddTask}>
          <input className="add-task__input" type="text" name="task" />
          <button className="add-task__button"><i class="fas fa-plus"></i></button>
        </form>
      </div>
    )
  }
}