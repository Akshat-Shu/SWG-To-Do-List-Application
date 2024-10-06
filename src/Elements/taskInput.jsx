import React, { useState } from 'react';
import './taskInput.css';
import { taskDescription } from '../Structures/taskDescription';

function TaskInput({ isOpen, toggleModal, taskDesc, addTask, editTask, taskIndex }) {
  const [selectedValue, setSelectedValue] = useState(taskDesc?taskDesc.taskPriority:'0'); 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const[inputValue, setInputValue] =useState(taskDesc?taskDesc.taskName:'');
  const handleInputChange = (value) =>{
    setInputValue(value);
  }

  const handleFormSubmit =(event)=>{
    event.preventDefault();

    if(!inputValue) return;
    toggleModal();
    setInputValue("");
    console.log([inputValue, selectedValue]);
    if(!taskDesc){
      addTask(new taskDescription(inputValue, selectedValue, null, null, []));
    } else {
      editTask(new taskDescription(inputValue, selectedValue, null, null, taskDesc.subtasks));
    }
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='add-task-wrapper'>
        <form onSubmit={handleFormSubmit}>
          <div className="main-header">
              <div className="task-priority-container">
                <input type="text" className='taskField' placeholder="Enter Task Title" autoComplete='off' value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                <div className='prior-section'>
                  <p>Priority: </p>
                  <div className="dropdown">
                    <select value={selectedValue} onChange={handleChange}>
                      <option value="0">High</option>
                      <option value="1">Intermediate</option>
                      <option value="2">Low</option>
                    </select>
                  </div>
                </div>
              </div>
            <button className='add-btn' type='submit'>
              {!taskDesc ? 'Add' : 'Edit'}
            </button>
          </div>
        </form>
        <button onClick={toggleModal} className='close-btn'>Close</button>
      </div>
    </div>
  );
}

export default TaskInput;

