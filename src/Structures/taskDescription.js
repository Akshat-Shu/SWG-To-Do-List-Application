const taskPrioties = Object.freeze({
  "High Priority": 0,
  "Intermediate Priority": 1,
  "Low Priority": 2,

})

class taskDescription {
  constructor(taskName, taskPriority, taskStart, taskEnd, subtasks) {
    this.taskName = taskName;
    this.taskPriority = taskPriority
    this.taskStart = taskStart ? null : taskStart
    this.taskEnd = taskEnd ? null : taskEnd
    this.subtasks = subtasks ? subtasks : []
  }
}


export default taskDescription