import { useState } from 'react';
import  './modalSubtask.css';

function ModalSubtask({toggleModal, addSubtask}) {
    const[inputFields, setInputFields] = useState([{id:1}])
    const handlleAdd = () =>{
        const newField = {id : inputFields.length + 1};
        setInputFields([...inputFields, newField])
    }
    const handleChange = (id, value) =>{
        const updateFields =inputFields.map((field)=>{
            if (field.id == id){
                return {...field, value};
            }
            return field;
        })
        setInputFields(updateFields)
    }
    const handleDone = () =>{
        const subtasks = inputFields.map((field) => field.value)
        console.log(subtasks);
        addSubtask(subtasks[0]);
        for (let i = 0; i < subtasks.length; i++) {
            if(subtasks[i]){
                addSubtask(subtasks[i]);
            }
        }
        toggleModal();
    }

  return (
    <div className='subtask-modal'>
        <div className="modal-box">
            <div className="top-area
            ">
                {inputFields.map((field) => (
                    <span key={field.id}><input type="text" placeholder='Add Subtask' onChange={(e)=> handleChange(field.id, e.target.value)} /></span>
                ))}
                <span>
                    <button className='addmore-btn' onClick={handlleAdd}>Add more</button>
                </span>
                <span>
                    <button className='done-btn' onClick={handleDone}>Done</button>
                </span>
            </div>
            
            
        </div>
    </div>
  )
}

export default ModalSubtask
