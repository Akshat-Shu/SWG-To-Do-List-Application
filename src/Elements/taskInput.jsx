import React, { useState } from 'react';
import './taskInput.css';

function TaskInput({ isOpen, toggleModal }) {
  const [selectedValue, setSelectedValue] = useState('0'); 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='add-task-wrapper'>
        <div className="main-header">
          <div className="task-priority-container">
            <input type="text" className='taskField' placeholder="Enter Task Title" />
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
          <button className='add-btn'>Add</button>
        </div>
        <button onClick={toggleModal} className='close-btn'>Close</button>
      </div>
    </div>
  );
}

export default TaskInput;

