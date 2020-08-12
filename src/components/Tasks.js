import React from 'react';
import Task from './Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Tasks = (props) => (
  <ul className="tasks">
    <TransitionGroup>
      {
        props.tasks.map((task, index) => (
          <CSSTransition 
          key={task} 
          timeout={300} 
          classNames="task-list"
          >
            <Task 
            key={task} 
            taskText={task} 
            handleRemoveTask={props.handleRemoveTask}
            />
          </CSSTransition>
       ))
      }
    </TransitionGroup>
  </ul>
)

export default Tasks;