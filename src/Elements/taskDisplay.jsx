import { priorityEnum } from "../Structures/taskDescription";
import TaskElement from "./taskElement";



function TaskDisplay({ tasks, editTask }) {
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
        addSubtask={() => console.log("Add Subtask")} 
        priority={priorityEnum[task.taskPriority]}
        taskObject={task}
      />
    )
  }
  const flattenedTasks = separatedTasks[0].concat(separatedTasks[1]).concat(separatedTasks[2])
  return (
    <div>
      {flattenedTasks}
    </div>
  )
}

export default TaskDisplay