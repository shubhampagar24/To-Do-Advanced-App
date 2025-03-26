import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../redux/taskSlice';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Tasks</h3>
      {tasks.length === 0 ? <p>No tasks added yet</p> : null}
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <span>{task.text}</span>
          <button onClick={() => dispatch(removeTask(task.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
