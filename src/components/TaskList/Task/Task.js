import React from 'react';
import style from './Task.module.css';

const Task = (props) => {
  let taskDone = '';
  if(props.isChecked) {
    taskDone = style.done;
  }
  return (
    <div className={style.task}>
      <p className={taskDone}>{props.description}</p>
      <input type="checkbox" onChange={props.checkboxHandler} checked={props.isChecked}/>
      <button onClick={props.deleteTask}>&times;</button>
    </div>
  );
}

export default Task;