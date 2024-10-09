import { useState, useEffect } from 'react';
import  './modalSubtask.css';

function ModalSubtask({toggleModal, addSubtask, showInfo}) {
    const[inputFields, setInputFields] = useState([{id:1}])
    // const handleAdd = () =>{
    //     const newField = {id : inputFields.length + 1};
    //     setInputFields([...inputFields, newField])
    // }
    const handleRemoveInput = (id) => {
        setInputFields(inputFields.filter((input) => (input.id) !== id));
        if (inputFields.length === 1) {
            toggleModal();;
           }
    };

    // useEffect(() => {
    //     if (inputFields.length === 1) {
    //      toggleModal();;
    //     }
    //   }, []);

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
        const validSubtasks = subtasks.filter(subtask => subtask);
        if (validSubtasks.length > 0) {
            addSubtask(validSubtasks);
        }
        toggleModal();
        
        if(!inputFields[0].value) {
            showInfo("Please enter a SubTask title");
            return;
          }
        
    }

  return (
    <div className='subtask-modal'>
        <div className="modal-box">
            <div className="top-area
            ">
                {inputFields.map((field) => (
                    <span key={field.id} className='input-field'><input type="text" placeholder='Add Subtask' onChange={(e)=> handleChange(field.id, e.target.value)} />
                    <button className='cross-btn' onClick={() => handleRemoveInput(field.id)}><img src="/assets/cross.webp" alt="" /></button>
                    
                    </span>
                ))}
                <span className='btn-grp'>
                    {/* <button className='addmore-btn' onClick={handleAdd}>Add another Subtask</button> */}
                    <button className='done-btn' onClick={handleDone}>Done</button>
                </span>

            </div>
            
            
        </div>
    </div>
  )
}

export default ModalSubtask
