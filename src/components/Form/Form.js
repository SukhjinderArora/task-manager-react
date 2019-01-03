import React from 'react';

const Form = (props) => {
  return (
    <form onSubmit={props.formSubmit}>
      <input value={props.text} placeholder="Enter Task" onChange={props.changeHandler}/>
      <button>Add Task</button>
    </form>
  );
}

export default Form;