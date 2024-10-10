import './App.css'
import { taskDescription, priorityEnum } from './Structures/taskDescription'
import TaskInput from './Elements/taskInput'
import { useState } from 'react'
import TaskDisplay from './Elements/taskDisplay'
import InfoBox from './Elements/informationBox'


function App() {
  const [tasks, setTasks] = useState([
    new taskDescription("Something generic", 1, null, ["Helo world", "Hello world 2"]),
    new taskDescription(
      "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out. I also wonder where happens if I go over two lines and go into the thee lines zone",
      2, null, [
        "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out 1", 
        "Just some long string that I want to test for if this works, trying this out may bring out some interesting results. maybe this string gets really long sometimes but I think it works out 2"
      ]
    )
  ])
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");

  const showInfo = (message) => {
    setInfoMessage(message)
    setIsInfoVisible(true);
  };

  const hideInfo = () => {
    setIsInfoVisible(false);
  };

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
  return (
    <>
      <div className='tasks-header'>
        <button onClick={toggleModal} className='add-task-button'>
          <img src='/assets/add-symbol.png' className='add-symbol'/>
          <div className='add-task-text'>Add Task</div>
        </button>
      </div>
      {isModalOpen ? <TaskInput isModalOpen={isModalOpen} toggleModal={toggleModal} addTask={addTask} showInfo={showInfo}></TaskInput> : null}
      <div>

      <TaskDisplay tasks={tasks} editTask={editTask} showInfo={showInfo} filter={[1, 1, 1]}></TaskDisplay>
      <InfoBox
        message={infoMessage}
        isVisible={isInfoVisible}
        onClose={hideInfo}
      />
      </div>
    </>
  )
}

export { App }
