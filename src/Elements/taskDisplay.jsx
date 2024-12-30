import { priorityEnum } from "../Structures/taskDescription";
import TaskElement from "./taskElement";
import './Styles/taskDisplay.css'



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
  res.push(<div className="tasks">{separatedTasks[0]}</div>)
  res.push(<div className="tasks">{separatedTasks[1]}</div>)
  res.push(<div className="tasks">{separatedTasks[2]}</div>)
    return (
    <div className={ view ? "task-display" : "" }>
      { view ? res : flattenedTasks }
    </div>
  )
}

export default TaskDisplay