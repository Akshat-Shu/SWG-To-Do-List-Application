import './App.css'
import { taskDescription, priorityEnum } from './Structures/taskDescription'
import TaskElement from './Elements/taskElement'
import TaskInput from './Elements/taskInput'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    new taskDescription("Something generic", 1, null , null, ["Helo world", "Hello world 2"]),
    new taskDescription(
      "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out. I also wonder where happens if I go over two lines and go into the thee lines zone",
      2, null, null, [
        "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out", 
        "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out"
      ]
    )
  ])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (task, index) => {
    const newTasks = [...tasks];
    newTasks[index] = task;
    setTasks(newTasks);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  console.log(tasks[0])
  return (
    // TODO: make the App.jsx page look cleaner, 
    //TODO: fix modal-content not appearing as specified in taskInput.jsx
    <>
      <button onClick={toggleModal}>Add Task</button>
      {isModalOpen ? <TaskInput isModalOpen={isModalOpen} toggleModal={toggleModal} addTask={addTask} ></TaskInput> : null}
      <div>
        {tasks.map((task, index) => (
          <TaskElement 
            key={index}
            taskDescription={task} 
            subTasks={task.subtasks}
            onDelete={() => console.log("Deleted")} 
            onEdit={(tsk) => editTask(tsk, index)} 
            addSubtask={() => console.log("Add Subtask")} 
            priority={priorityEnum[task.taskPriority]}
            taskObject={task}
          />
        ))}
      </div>
    </>
  )
}

export default App
