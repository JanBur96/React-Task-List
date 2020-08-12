import React from 'react';
import Mode from './Mode';
import Time from './Time';
import Clear from './Clear';


const Header = (props) => (
  <div className="header pseudo">
    <Mode />
    <Time />
    <Clear 
    handleRemoveAllTasks={props.handleRemoveAllTasks} 
    tasks={props.tasks}
    />
  </div>
)

export default Header;