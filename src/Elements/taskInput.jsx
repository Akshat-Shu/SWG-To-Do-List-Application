import React, { useState, useEffect } from 'react';
import './taskInput.css';
import { taskDescription } from '../Structures/taskDescription';

function TaskInput({ isOpen, toggleModal, taskDesc, addTask, editTask, showInfo }) {
  const [selectedValue, setSelectedValue] = useState(taskDesc?taskDesc.taskPriority:'0'); 
  const [startTime, setStartTime] = useState(taskDesc?taskDesc.startTime:'');
  const [endTime, setEndTime] = useState(taskDesc?taskDesc.endTime:'');
  const[status, setStatus] =useState("")

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const[inputValue, setInputValue] =useState(taskDesc?taskDesc.taskName:'');
  const handleInputChange = (value) =>{
    setInputValue(value);
  }

  //Tried a lot but not able to display Status on taskElement... 
  const checkStatus = () => {
    const currentTime = new Date();
    const startDateObj = new Date(startTime);
    const endDateObj = new Date(endTime);

    if (currentTime >= startDateObj && currentTime <= endDateObj) {
      setStatus('Ongoing');
    } else if (currentTime < startDateObj) {
      setStatus('Not Started');
    } else {
      setStatus('Completed');
    }
  };
  useEffect(() => {
    checkStatus();
  }, [startTime, endTime]);


  const handleFormSubmit =(event)=>{
    event.preventDefault();
    toggleModal();
    
    if(!inputValue) {
      showInfo("Please enter a task title");
      return;
    }
    
    setInputValue("");
    console.log([inputValue, selectedValue]);
    if(!taskDesc){
      addTask(new taskDescription(inputValue, selectedValue, startTime, endTime, []));
    } else {
      editTask(new taskDescription(inputValue, selectedValue, startTime, endTime, taskDesc.subtasks));
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
              Status : {status}
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
export default TaskInput ;
