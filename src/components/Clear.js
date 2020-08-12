import React from 'react';

const Clear = (props) => (
  <div className="header__clear">
    {
      props.tasks.length > 0 && <p 
      onClick={props.handleRemoveAllTasks}
      className="header__clear-button"
      >
      Clear
      </p>
    }
  </div>
)

export default Clear