import React from 'react';

export default class Mode extends React.Component {
  
  handleMode = () => {
    document.body.classList.toggle('light');
    const header = document.querySelector('.header');
    header.classList.toggle('pseudo');
    header.classList.toggle('sunrise');

    document.documentElement.classList.add('transition');
    
    window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
    }, 1000)
    console.log("hello")
  }


  render() {
    return(
      <div>
        <i 
          className="header__mode fas fa-moon"
          onClick={this.handleMode}
          >
        </i>
      </div>
    )
  }
}