import React, { useState } from 'react';
import './taskElement.css';
import TaskInput from './taskInput'
import ModalSubtask from './modalSubtask';


const setToggle = () => {
  console.log("Toggled")
}

const TaskElement = ({ key, taskDescription, onDelete, onEdit, priority, subtasks }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [subTasks, setSubTasks] = useState(subtasks);
  const [subtaskChecked, setSubtaskChecked] = useState(subTasks.map(() => false));
  const[subtaskModal, setSubtaskModal] = useState(false);

  const addSubtask = (newTask) => {
    const newTasks = [...subTasks];
    newTasks.push(newTask);
    setSubTasks(newTasks);
  }


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
            { subtaskModal ? <ModalSubtask toggleModal={handlesubtaskModal}/> : null}
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

    </div>
  )

};



export default TaskElement;
