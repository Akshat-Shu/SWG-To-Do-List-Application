import React from 'react';
import './taskTime.css';

const TaskTime = ({taskTime}) => {
  if(taskTime.completed) return (
    <div className="completed-task">
      Completed
    </div>
  )
  let date = new Date();
  if(date < taskTime.startTime) return (
    <div className="not-started-task">
      {`Starts on ${taskTime.startTime.toLocaleString()}`}
    </div>
  );
  if(date > taskTime.endTime) return (
    <div className="due-task">
      {`Due on ${taskTime.endTime.toLocaleString()}`}
    </div>
  );
  return (
    <div className="in-progress-task">
      In Progress
    </div>
  );
}

export default TaskTime;