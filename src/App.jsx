import './App.css'
import taskDescription from './Structures/taskDescription'
import TaskElement from './Elements/taskElement'
import TaskInput from './Elements/taskInput'
import { useState } from 'react'

function App() {
  const tasks = [
    new taskDescription("Something generic", 1, null , null, ["Helo world", "Hello world 2"]),
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
      {isModalOpen ? <TaskInput isModalOpen={isModalOpen} toggleModal={toggleModal} taskTitle={""}></TaskInput> : null}
      <div>
        {tasks.map((task, index) => (
          <TaskElement 
            key={index}
            taskDescription={task} 
            subTasks={task.subtasks}
            onDelete={() => console.log("Deleted")} 
            // onEdit={() => console.log("Edited")} 
            addSubtask={() => console.log("Add Subtask")} 
            priority={'priority-high'}
          />
        ))}
      </div>
    </>
  )
}

export default App
