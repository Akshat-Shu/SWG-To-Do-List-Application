const taskPrioties = Object.freeze({
  "High Priority": 0,
  "Intermediate Priority": 1,
  "Low Priority": 2,

})

class taskDescription {
  constructor(taskName, taskPriority, taskStart, taskEnd) {
    this.taskName = taskName;
    this.taskPriority = taskPriority
    this.taskStart = taskStart ? null : taskStart
    this.taskEnd = taskEnd ? null : taskEnd
  }
}


export default taskDescription