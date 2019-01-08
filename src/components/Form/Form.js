import React from 'react';
import style from './Form.module.css';

const Form = (props) => {
  return (
    <form className={style.form} onSubmit={props.formSubmitHandler}>
      <input 
        className={style.taskInput} 
        value={props.text} 
        placeholder="Enter Task" 
        onChange={props.changeHandler}
      />
      <button className={style.btn} type="submit">Add Task</button>
    </form>
  );
}

export default Form;