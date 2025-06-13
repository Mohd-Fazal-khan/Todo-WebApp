import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
          </div>
          <div className="btn-group">
            <button className="edit" onClick={() => onEdit(task)}>Edit</button>
            <button className="delete" onClick={() => onDelete(task.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
