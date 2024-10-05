import React, { useState } from 'react';
import './taskElement.css';

const setToggle = () => {
  console.log("Toggled")
}

const TaskElement = ({ taskDescription, onDelete, onEdit, addSubtask, priority, subTasks }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [subtaskChecked, setSubtaskChecked] = useState(subTasks.map(() => false));

  const toggleCheckBox = () => {
    setIsChecked(prevState => !prevState);
    for (let i = 0; i < subtaskChecked.length; i++) {
      setSubtaskChecked(prevState => {
        const newState = [...prevState];
        newState[i] = !isChecked;
        return newState;
      });
    }
  };

  const toggleSubtaskCheckBox = (index, value) => {
    setSubtaskChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  return (
    <div className={`task-element ${priority}`}>
      <div className="task-container"></div>
        <div className="first-line-wrapper">
          <div className="task-content">
            <button className="add-subtasks" onClick={addSubtask}>+</button>
            <div className="checkbox-container">
              <button className={`mark-completed-checkbox ${isChecked ? 'mark-completed-checked' : ''}`} onClick={toggleCheckBox}
              >{isChecked?<img src='/assets/check-mark.png'/>:null}</button>
            </div>
            <div className={`task-name ${isChecked?'dashed-task-name':''}`}>{taskDescription.taskName}</div>
          </div>
          <div className="button-group">
            <button className="delete-button" onClick={onDelete}>Delete</button>
            <button className="edit-button" onClick={onEdit}>Edit</button>
          </div>
        </div>
        <div className="subtask-container">
          {subTasks && subTasks.map((subtask, index) => (
            <div className="subtask" key={index}>
              <img src='/assets/subtask-enter-key.png' className="subtask-enter"/>
              <div className="checkbox-container">
                <button className={`mark-completed-checkbox ${subtaskChecked[index] ? 'mark-completed-checked' : ''}`} onClick={() => {
                  toggleSubtaskCheckBox(index)
                  console.log(`Subtask ${index} clicked`)
                }}
                >{subtaskChecked[index]?<img src='/assets/check-mark.png'/>:null}</button>
              </div>
              <div className={`task-name ${subtaskChecked[index]?'dashed-task-name':''}`}>{subTasks[index]}</div>
            </div>
          ))}
        </div>
      {/* </div> */}
      {/* <div className="subtask-container">
        {subTasks && subTasks.map((subtask, index) => (
          <div className="subtask" key={index}>
            <button className="subtask-checkbox" onClick={setToggle}>{subtask.taskName}</button>
          </div>
        ))}
      </div> */}
    </div>
  )

};



export default TaskElement;
