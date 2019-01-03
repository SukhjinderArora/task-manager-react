import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header/Header';
import Form from '../components/Form/Form';
import TaskList from '../components/TaskList/TaskList';

class App extends Component {

  constructor(props) {
    super(props);

    /**
     * taskList = [{ taskDescription: '', taskStatus: 'done'}]
     */


    if (localStorage.getItem('tasks') !== 'undefined') {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      this.state = {
        taskInput: '',
        tasksList: tasks
      }
    } else {
      this.state = {
        taskInput: '',
        tasksList: []
      };
      localStorage.setItem('tasks', JSON.stringify(this.state.tasksList));
    }
  }

  componentDidUpdate() {
    console.log('Inside TasksList Component');
    localStorage.setItem('tasks', JSON.stringify(this.state.tasksList));
  }

  inputChangeHandler = (event) => {
    this.setState({
      taskInput: event.target.value
    })
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    const taskDescription = this.state.taskInput.trim();
    if(taskDescription === '') return;

    const tasks = [ ...this.state.tasksList ];
    tasks.push({
      taskDescription,
      taskStatus: false
    });

    this.setState({
      taskInput: '',
      tasksList: tasks
    });
  };

  checkboxHandler = (index, event) => {
    const tasks = [ ...this.state.tasksList ];
    tasks[index].taskStatus = !tasks[index].taskStatus;

    this.setState({
      tasksList: tasks
    });
  };

  deleteTaskHandler = (index, event) => {
    const tasks = [ ...this.state.tasksList ];
    tasks.splice(index, 1);
    this.setState({
      tasksList: tasks
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Form 
          text={this.state.taskInput} 
          changeHandler={this.inputChangeHandler} 
          formSubmit={this.formSubmitHandler} 
        />
        <TaskList 
          tasks={this.state.tasksList}
          checkboxHandler={this.checkboxHandler}
          deleteTask={this.deleteTaskHandler}
        />
      </div>
    );
  }
}

export default App;
