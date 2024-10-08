const taskPrioties = Object.freeze({
  "High Priority": 0,
  "Intermediate Priority": 1,
  "Low Priority": 2,

})

const priorityEnum = Object.freeze({
  0: 'priority-high',
  1: 'priority-mid',
  2: 'priority-low',
})

class taskDescription {
  constructor(taskName, taskPriority, startTime, endTime, subtasks) {
    this.taskName = taskName;
    this.taskPriority = taskPriority
    // this.taskStart = taskStart ? null : taskStart
    // this.taskEnd = taskEnd ? null : taskEnd
    this.startTime = startTime;
    this.endTime =  endTime;
    this.subtasks = subtasks ? subtasks : []
  }
}


export { taskDescription, priorityEnum }