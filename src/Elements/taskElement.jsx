import React, { useState } from 'react';
import './taskElement.css';
import TaskInput from './taskInput'
import ModalSubtask from './modalSubtask';
import TaskTime from '../Structures/taskTime/taskTime.jsx';


const TaskElement = ({ taskDescription, onDelete, onEdit, priority, subtasks, showInfo }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [subTasks, setSubTasks] = useState(subtasks);
  const [subtaskChecked, setSubtaskChecked] = useState(subTasks.map(() => false));
  const [subtaskModal, setSubtaskModal] = useState(false);

  const addSubtasks = (newTasks) => {
    setSubTasks([...subTasks, ...newTasks]);
    setSubtaskChecked([...subtaskChecked, ...newTasks.map(() => isChecked)]);
    taskDescription.subtasks = subTasks;
    onEdit(taskDescription);
  }
  const removes = (index) => {
    const updatedSubTasks = subTasks.filter((i) => i !== index);
    setSubTasks(updatedSubTasks);
  };
  

  function toggleCheckBox() {
    setIsChecked(prevState => !prevState);
    for (let i = 0; i < subtaskChecked.length; i++) {
      setSubtaskChecked(prevState => {
        const newState = [...prevState];
        newState[i] = !isChecked;
        return newState;
      });
    }
  }

  const toggleSubtaskCheckBox = (index, value) => {
    setSubtaskChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handlesubtaskModal = () =>{
    setSubtaskModal(!subtaskModal)
    // const newTasks = [...subTasks];
    // newTasks.push(newTask);
    // setSubTasks(newTasks);
  }

  const handleEdit = () =>{
    setIsEditModalOpen(!isEditModalOpen);
  }
  return (
    <div className={`task-element ${priority}`}>
      <div className="task-container"></div>
        <div className="first-line-wrapper">
          <div className="task-content">
            <button className="add-subtasks" onClick={handlesubtaskModal}>+</button>
            { subtaskModal ? <ModalSubtask toggleModal={handlesubtaskModal} addSubtask={addSubtasks} showInfo={showInfo}/> : null}
            <div className="checkbox-container">
              <button className={`mark-completed-checkbox ${isChecked ? 'mark-completed-checked' : ''}`} onClick={toggleCheckBox}
              >{isChecked?<img src='/assets/check-mark.png'/>:null}</button>
            </div>
            <div className={`task-name ${isChecked?'dashed-task-name':''}`}>{taskDescription.taskName}</div>
          </div>
          <div className="button-group">
            <button className="delete-button" onClick={onDelete}>Delete</button>
            <button className="edit-button" onClick={handleEdit}>Edit</button>
            {isEditModalOpen ? <TaskInput isModalOpen={isEditModalOpen} toggleModal={handleEdit} taskDesc={taskDescription} editTask={onEdit}></TaskInput> : null}
          </div>
        </div>
        <div className="subtask-container">
          {subTasks && subTasks.map((subtask, index) => (
            <div className="subtask" key={index}>
              <div className="subtask-1">
              <img src='/assets/subtask-enter-key.png' className="subtask-enter"/>
              <div className="checkbox-container">
                <button className={`mark-completed-checkbox ${subtaskChecked[index] ? 'mark-completed-checked' : ''}`} onClick={() => {
                  toggleSubtaskCheckBox(index)
                }}
                >{subtaskChecked[index]?<img src='/assets/check-mark.png'/>:null}</button>
              </div>
              <div className={`task-name ${subtaskChecked[index]?'dashed-task-name':''}`}>{subTasks[index]}</div>
              </div>
              <button className='remove-btn' onClick={()=>removes(subTasks[index])}>
                <img src='/assets/cross.webp' className='cross-icon' />
              </button>
              
            </div>
          ))}

        </div>
        {
          taskDescription.taskTime ? (
            <div className='task-time-container'>
              <div>Status: </div>
              
              <TaskTime taskTime={taskDescription.taskTime}></TaskTime>
            </div>
          ):null
        }

    </div>
  )

};



export default TaskElement;
