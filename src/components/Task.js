import React from 'react';

export default class Task extends React.Component {


  render() {
    return (
        <li 
        className="task draggable">
        {this.props.taskText}
        <button 
          className="task__button fas fa-eraser"
          onClick={(e) => {this.props.handleRemoveTask(this.props.taskText)}}
        >
        </button>
        </li>
      )
    }
  }

  
