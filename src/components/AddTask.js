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
      <div className="add-task">
        <form 
        aria-label="Add Task Form" 
        className="add-task__form" 
        onSubmit={this.handleAddTask}
        >
          <input 
          aria-label="Add Task Input" 
          className="add-task__input" 
          type="text" name="task" 
          placeholder="Add your task here" 
          />
          <button 
          aria-label="Add Task Button" 
          className="add-task__button"
          >
          <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>
    )
  }
}