import { priorityEnum } from "../Structures/taskDescription";
import TaskElement from "./taskElement";



function TaskDisplay({ tasks, editTask, showInfo, filter}) {

  let separatedTasks = [[], [], []];
  
  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i]
    separatedTasks[task.taskPriority].push(
      <TaskElement 
        key={i}
        taskDescription={task} 
        subtasks={task.subtasks}
        onDelete={() => console.log("Deleted")} 
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
  return (
    <div>
      {flattenedTasks}
    </div>
  )
}

export default TaskDisplay