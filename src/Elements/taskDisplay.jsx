import { priorityEnum } from "../Structures/taskDescription";
import TaskElement from "./taskElement";
import './Styles/taskDisplay.css'
import DroppableContainer from "./DroppableColumn";


function TaskDisplay({ tasks, editTask, showInfo, filter, deleteTask, view}) {

  let separatedTasks = [[], [], []];
  
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i]
    separatedTasks[task.taskPriority].push(
      <TaskElement 
        key={i}
        taskDescription={task} 
        subtasks={task.subtasks}
        onDelete={() => deleteTask(i)} 
        onEdit={(tsk) => editTask(tsk, i)} 
        priority={priorityEnum[task.taskPriority]}
        showInfo={showInfo}
        index={i}
      />
    )
  }
  const flattenedTasks = []
  for (let i = 0; i < 3; i++) {
    if (filter[i]) {
      flattenedTasks.push(separatedTasks[i])
    }
  }

  let res = []
  res.push(<DroppableContainer tasks={separatedTasks[0]} key={"high"}/>)
  res.push(<DroppableContainer tasks={separatedTasks[1]} key={"intermediate"}/>)
  res.push(<DroppableContainer tasks={separatedTasks[2]} key={"low"}/>)
  if(view) {
    return (
      <div className="task-display">
        {res}
      </div>
    )
  }
  return (
    <div>
      {flattenedTasks}
    </div>
  )
}

export default TaskDisplay