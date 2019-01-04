import React from 'react';
import style from './Form.module.css';

const Form = (props) => {
  return (
    <form  className={style.form} onSubmit={props.formSubmit}>
      <input 
        className={style.taskInput} 
        value={props.text} 
        placeholder="Enter Task" 
        onChange={props.changeHandler}
      />
      <button className={style.btn}>Add Task</button>
    </form>
  );
}

export default Form;