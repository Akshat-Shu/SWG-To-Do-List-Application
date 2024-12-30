import TaskInput from './Elements/taskInput'
import { useState } from 'react'
import TaskDisplay from './Elements/taskDisplay'
import InfoBox from './Elements/informationBox'
import { getLocalstorage, setLocalstorage } from './Elements/todoStorage'
import { fetchTasks, createTask, deleteTask } from './services/api';

function Home() {


  const [tasks, setTasks] = useState( () => getLocalstorage())
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [isPriorityView, setIsPriorityView] = useState(false);

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

  const toggleView = () => {
    setIsPriorityView(!isPriorityView);
  };


  console.log(tasks);
  setLocalstorage(tasks)
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

        <div className='toggle-view'>
          <div className='n-view'>Normal View</div>
          <label className="toggle-switch">
            <input type="checkbox" checked={isPriorityView} onChange={toggleView} />
            <span className="slider"></span>
          </label>
          <div className='p-view'>Priority View</div>
        </div>

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

      <TaskDisplay tasks={tasks} editTask={editTask} showInfo={showInfo} filter={getFilter(selectedPriorities)} deleteTask={deleteTask} view={isPriorityView} ></TaskDisplay>
      <InfoBox
        message={infoMessage}
        isVisible={isInfoVisible}
        onClose={hideInfo}
      />
      </div>
    </>
  )
}

export { Home }