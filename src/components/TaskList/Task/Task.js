import React from 'react';
import style from './Task.module.css';

const Task = (props) => {
  let taskDesc = style.taskDesc;
  if(props.isChecked) {
    taskDesc = taskDesc + ' ' + style.done;
  }
  return (
    <div className={style.task}>
      <p className={taskDesc}>{props.description}</p>
      <div className={style.icon}>
        <label className={style.container}>
          <input
            className={style.input}
            type="checkbox"
            onChange={props.checkboxHandler}
            checked={props.isChecked} />
          <span className={style.checkmark}></span>
        </label>
        <button className={style.deleteBtn} onClick={props.deleteTaskHandler}>X</button>
      </div>
    </div>
  );
}

export default Task;