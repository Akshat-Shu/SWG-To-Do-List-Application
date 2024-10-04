import React, { useState } from 'react';
import './taskElement.css';

const setToggle = () => {
  console.log("Toggled")
}

const TaskElement = ({ taskDescription, onDelete, onEdit, addSubtask, priority }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(prevState => !prevState)
  }
  return (
    <div className={`task-element ${priority}`}>
      <div className="task-content">
        <button className="add-subtasks" onClick={addSubtask}>+</button>
        <div className="checkbox-container">
          <button className={`mark-completed-checkbox ${isChecked ? 'mark-completed-checked' : ''}`} onClick={toggleCheckBox}
          >{isChecked?<img src='/assets/check-mark.png'/>:null}</button>
        </div>
        <span className="task-name">{taskDescription.taskName}</span>
      </div>
      <div className="button-group">
        <button className="delete-button" onClick={onDelete}>Delete</button>
        <button className="edit-button" onClick={onEdit}>Edit</button>
      </div>
    </div>
  )

};



export default TaskElement;
