import React from 'react';

export default class Time extends React.Component {
  state = {date: new Date()};

  componentDidMount() {
    this.time = setInterval(
      () => this.getTime(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.time);
  }

  getTime() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div>
        <p className="header__time">{this.state.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})}</p>
      </div>
    );
  }
}