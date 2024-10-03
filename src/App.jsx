import './App.css'
import taskDescription from './Structures/taskDescription'
import TaskElement from './Elements/taskElement'
import TaskInput from './Elements/taskInput'

function App() {
  const tasks = [
    new taskDescription("Something generic", 1, null , null)
  ]
  console.log(tasks[0])
  return (
    <>
    <TaskInput/>
      <div>
        <TaskElement taskDescription={tasks[0]} onDelete={console.log("Deleted")} onEdit={console.log("Edited")} addSubtask={console.log("Add Subtask")}></TaskElement>
      </div>
    </>
  )
}

export default App
