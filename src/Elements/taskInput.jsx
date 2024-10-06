import React, { useState } from 'react';
import './taskInput.css';

function TaskInput({ isOpen, toggleModal, taskTitle }) {
  const [selectedValue, setSelectedValue] = useState('0'); 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const[inputValue, setInputValue] =useState(taskTitle);
  const handleInputChange = (value) =>{
    setInputValue(value);
  }

  const handleFormSubmit =(event)=>{
    event.preventDefault();

    if(!inputValue) return;
    toggleModal();
    setInputValue("");
    console.log([inputValue, selectedValue]);
    
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
              {taskTitle == "" ? 'Add' : 'Edit'}
            </button>
          </div>
        </form>
        <button onClick={toggleModal} className='close-btn'>Close</button>
      </div>
    </div>
  );
}

export default TaskInput;

