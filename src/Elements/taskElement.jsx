import React from 'react';
import './taskElement.css';

const TaskElement = ({ taskDescription, onDelete, onEdit, addSubtask }) => (
  <>
    <div className="task-element">
      <div className="task-content">
        <button className="add-subtasks" onClick={addSubtask}>+</button>
        <label className="checkbox-container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <span className="task-name">{taskDescription.taskName}</span>
      </div>
      <div className="button-group">
        <button className="delete-button" onClick={onDelete}>Delete</button>
        <button className="edit-button" onClick={onEdit}>Edit</button>
      </div>
    </div>
  </>

);



export default TaskElement;
