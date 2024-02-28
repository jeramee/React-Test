// Task.js
import React from 'react';
import SubTask from './SubTask'; // Make sure to create SubTask.js if it's not already done

const Task = ({ title, description, subTasks }) => {
  return (
    <div className="task">
      <h2>{title}</h2>
      <p>{description}</p>
      
      {subTasks && subTasks.length > 0 && (
        <div className="sub-tasks">
          <h3>Sub-Tasks:</h3>
          <ul>
            {subTasks.map((subTask) => (
              <SubTask key={subTask.id} description={subTask.description} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Task;
