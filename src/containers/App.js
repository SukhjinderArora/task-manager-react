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
    if (localStorage.getItem('tasks')) {
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
    localStorage.setItem('tasks', JSON.stringify(this.state.tasksList));
  }

  _inputChangeHandler = (event) => {
    this.setState({
      taskInput: event.target.value
    })
  };

  _formSubmitHandler = (event) => {
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

  _checkboxHandler = (index, event) => {
    const tasks = [ ...this.state.tasksList ];
    tasks[index].taskStatus = !tasks[index].taskStatus;

    this.setState({
      tasksList: tasks
    });
  };

  _deleteTaskHandler = (index, event) => {
    const tasks = [ ...this.state.tasksList ];
    tasks.splice(index, 1);
    this.setState({
      tasksList: tasks
    });
  };

  generateProps = () => {
    return {
      text: this.state.taskInput, 
      changeHandler: this._inputChangeHandler,
      formSubmitHandler: this._formSubmitHandler,
      tasks: this.state.tasksList,
      checkboxHandler: this._checkboxHandler,
      deleteTaskHandler: this._deleteTaskHandler
    };
  }

  render() {
    const props = this.generateProps();

    return (
      <div className="App">
        <Header />
        <Form {...props}/>
        <TaskList {...props}/>
      </div>
    );
  }
}

export default App;
