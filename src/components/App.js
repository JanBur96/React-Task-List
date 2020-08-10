import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';

export default class App extends React.Component {
  state = {
    tasks: [],
}

  componentDidMount() {
    try {
      const json = localStorage.getItem('tasks');
      const tasks = JSON.parse(json);

      if (tasks) {
        this.setState(() => ({ tasks }))
      }
    } catch (e) {
      
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.tasks.length !== this.state.tasks.length) {
      const json = JSON.stringify(this.state.tasks);
      localStorage.setItem('tasks', json)
    }
  }

  handleAddTask = (task) => {
    this.setState((prevState) => ({tasks: prevState.tasks.concat([task])}));
  }

  handleRemoveTask = (taskToRemove) => {
    this.setState((prevState) => ({tasks: prevState.tasks.filter((task) => taskToRemove !== task)}))
  }

  handleRemoveAllTasks = () => {
    this.setState(() => ({tasks: []}))
  }

  render() {
    return (
      <div className="container">
        <Header handleRemoveAllTasks={this.handleRemoveAllTasks}/>
        <Tasks tasks={this.state.tasks} handleRemoveTask={this.handleRemoveTask}/>
        <AddTask handleAddTask={this.handleAddTask} />
      </div>
    )
  }
}