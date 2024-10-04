import React, { useState } from 'react';

function TaskInput() {
  const [selectedValue, setSelectedValue] = useState('0'); 
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='add-task-wrapper'>
      <div className="main-header">
        <div className="task-priority-container">
          <input type="text" className='taskField' placeholder="Enter Task Title" />
          <div className='prior-section'>
            <p>Priorities</p>
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
    </div>
  );
}

export default TaskInput;
