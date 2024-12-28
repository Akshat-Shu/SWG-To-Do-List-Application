import React, { useState } from 'react';
import './Styles/taskInput.css';
import { taskDescription } from '../Structures/taskDescription';
import taskTime from '../Structures/taskTime/taskTime.js';

const formatDateTime = (date) => {
  if (!date) return '';
  const d = new Date(date);
  const pad = (num) => num.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

function TaskInput({ isOpen, toggleModal, taskDesc, addTask, editTask, showInfo }) {
  const [selectedValue, setSelectedValue] = useState(taskDesc?taskDesc.taskPriority:'0'); 
  const [startTime, setStartTime] = useState(taskDesc?(taskDesc.taskTime?formatDateTime(taskDesc.taskTime.startTime):''):'');
  const [endTime, setEndTime] = useState(taskDesc?(taskDesc.taskTime?formatDateTime(taskDesc.taskTime.endTime):''):'');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const[inputValue, setInputValue] =useState(taskDesc?taskDesc.taskName:'');
  const handleInputChange = (value) =>{
    setInputValue(value);
  }


  const handleFormSubmit =(event)=>{
    event.preventDefault();
    toggleModal();
    
    if(!inputValue) {
      showInfo("Please enter a task title");
      return;
    }
    let timeTask = null
    if(startTime != '' && endTime != '') {
      const timeStart = new Date(startTime);
      const timeEnd = new Date(endTime);
      if(timeStart > timeEnd) {
        showInfo("Uh, Oh! The task should start before it ends.");
        return;
      }
      timeTask = new taskTime(startTime, endTime, false);
    }
    setInputValue("");
    if(!taskDesc){
      addTask(new taskDescription(inputValue, selectedValue, timeTask, []));
    } else {
      editTask(new taskDescription(inputValue, selectedValue, timeTask, taskDesc.subtasks));
    }
  }

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className='add-task-wrapper'>
        <form onSubmit={handleFormSubmit}>
          <div className="main-header">
            <div className="task-priority-container">
              <input type="text" className='taskField' placeholder="Enter Task Title" autoComplete='off' value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
              <button className='add-btn' type='submit'>
              {!taskDesc ? 'Add' : 'Edit'}
            </button>
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
              <div className="time-picker-container">
                <div className="time-picker">
                  <label>Start Time:</label>
                  <input
                    type="datetime-local"
                    value={startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                  /> 
                  {/* Very basic time picker, maybe use react-time-picker later on */}
                </div>
                <div className="time-picker">
                  <label>End Time:</label>
                  <input
                    type="datetime-local"
                    value={endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                  />
                </div>
              </div>
            </div>

            
          </div>
          
        </form>
        <button onClick={toggleModal} className='close-btn'>Close</button>
      </div>
    </div>
  );
}
export default TaskInput;
