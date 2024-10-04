import './App.css'
import taskDescription from './Structures/taskDescription'
import TaskElement from './Elements/taskElement'
import TaskInput from './Elements/taskInput'
import { useState } from 'react'

function App() {
  const tasks = [
    new taskDescription("Something generic", 1, null , null)
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(tasks[0])
  return (
    // TODO: make the App.jsx page look cleaner, 
    //TODO: fix modal-content not appearing as specified in taskInput.jsx
    <>
    <button onClick={toggleModal}>Add Task</button>
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <TaskInput />
            <button onClick={toggleModal} className='click-close'>Close</button>
          </div>
        </div>
      )}
      <div>
        <TaskElement taskDescription={tasks[0]} onDelete={console.log("Deleted")} onEdit={console.log("Edited")} addSubtask={console.log("Add Subtask") } priority={'priority-high'}></TaskElement>
      </div>
    </>
  )
}

export default App
