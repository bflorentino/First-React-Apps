import React, { useState, useEffect } from 'react'
import { addTask } from '../Services/TasksServices';
import PropTypes from 'prop-types'

const AddTask = ( { setTasks } ) => {

    const [disabledBtn, setDisabledBtn] = useState(true);
    const [inputValue, setInputValue] = useState("");
    
    const keyPressed = (e) => setInputValue(e.target.value);

    const addTaskSubmit = (e) => {
        addTask(inputValue).then(tasks => setTasks([...tasks]))
        setInputValue("");
    }
    
    return (
        <div className='form'>
        <form className='form-task'>
            <input type="text" placeholder='Agregar nueva tarea' className='input-task' value={ inputValue } onChange={keyPressed}/>
            <input type="button" value="Add Task" className='btn-add-task' onClick={addTaskSubmit} />
            <input type ="button" value="Guardar Cambios" className='btn-edit-task' disabled= {disabledBtn}/>
        </form>
        </div>
    )
}

export default AddTask