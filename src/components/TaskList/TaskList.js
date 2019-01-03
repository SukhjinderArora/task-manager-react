import React from 'react';
import Task from './Task/Task';

const TaskList = (props) => {
  const tasks = props.tasks.map((task, index) => {
    return <Task 
      description={task.taskDescription} 
      checkboxHandler={props.checkboxHandler.bind(null, index)}
      key={index}
      isChecked={task.taskStatus}
      deleteTask={props.deleteTask.bind(null, index)}
      />;
  });
  return (
    <div>
      {tasks}
    </div>
  );
}

export default TaskList;