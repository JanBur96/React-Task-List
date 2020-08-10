import React from 'react';

export default class Task extends React.Component {

  // grabbingOnMouseDown = (e) => {
  //   if (e.target.className === "task") {
  //     e.target.classList.toggle("grabbing")
  //   } else if (e.target.className === "task grabbing") {
  //     e.target.classList.toggle('grabbing')
  //   }
  // }

  render() {
    return (
        <li 
        // onMouseDown={this.grabbingOnMouseDown}
        // onMouseUp={this.grabbingOnMouseDown}
        className="task">
        {this.props.taskText}
        <button 
          className="task__button fas fa-eraser"
          onClick={(e) => {this.props.handleRemoveTask(this.props.taskText)}}>
        </button>
        </li>
      )
  }
}
