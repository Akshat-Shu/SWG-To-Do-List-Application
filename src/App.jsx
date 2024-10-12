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

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [selectedPriorities, setSelectedPriorities] = useState(["high", "mid", "low"]);
  const handlePriorityChange = (event) => {
    const value = event.target.value;
    setSelectedPriorities((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((priority) => priority !== value)
        : [...prevSelected, value]
    );
  };

  const getFilter = (selectedPriorities) => {
    return [selectedPriorities.includes("high"), selectedPriorities.includes("mid"), selectedPriorities.includes("low")];
  }


  return (
    <>
      <div className='header'>
        <h1 className='app-title'>SWG To-Do List Application</h1>
        <img src='assets/swg-logo.png' className='swg-logo'></img>
      </div>
      <div className='tasks-header'>
        <button onClick={toggleModal} className='add-task-button'>
          <img src='/assets/add-symbol.png' className='add-symbol'/>
          <div className='add-task-text'>Add Task</div>
        </button>

        <div className='priority-filter'>
          <div className='priority-filter-text'>
            <img src='assets/filter-symbol.png' className='filter-symbol'></img>
            Priority Filter: 
          </div>
          <label>
            <input
              type="checkbox"
              value="high"
              checked={selectedPriorities.includes("high")}
              onChange={handlePriorityChange}
            />
            High
          </label>
          <label>
            <input
              type="checkbox"
              value="mid"
              checked={selectedPriorities.includes("mid")}
              onChange={handlePriorityChange}
            />
            Intermediate 
          </label>
          <label>
            <input
              type="checkbox"
              value="low"
              checked={selectedPriorities.includes("low")}
              onChange={handlePriorityChange}
            />
            Low 
          </label>
        </div>
      </div>
      
      {isModalOpen ? <TaskInput isModalOpen={isModalOpen} toggleModal={toggleModal} addTask={addTask} showInfo={showInfo}></TaskInput> : null}
      <div>

      <TaskDisplay tasks={tasks} editTask={editTask} showInfo={showInfo} filter={getFilter(selectedPriorities)} deleteTask={deleteTask}></TaskDisplay>
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
