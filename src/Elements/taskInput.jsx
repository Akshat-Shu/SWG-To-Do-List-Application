import React, {useState} from 'react'
import './taskInput.css';

function TaskInput() {
    const [selectedValue, setSelectedValue] = useState('0'); 
const handleChange = (event) => {
 setSelectedValue(event.target.value);}
  return (
    <div>
    <div className="main-header">
    <input type="text" className='taskField' id="formGroupExampleInput" placeholder="Enter Task Title" />

    <div className='prior-section'>
        <p>Prioties</p>
        <div className="dropdown">
        <select value={selectedValue} onChange={handleChange}>
                <option value="0">High</option>
                <option value="1">Intermediate</option>
                <option value="2">Low</option>
        </select>
        </div>
        </div>
    
<button className='add-btn'>Add</button>
        
</div>
    </div>
  )
}

export default TaskInput
