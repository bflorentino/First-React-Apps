import React, { useState } from 'react'
import { addTask } from '../Services/TasksServices';
import PropTypes from 'prop-types'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

toast.configure();

const AddTask = ( { setTasks } ) => {

    const [inputValue, setInputValue] = useState("");
    
    const keyPressed = (e) => setInputValue(e.target.value);

    const addTaskSubmit = (e) => {

        e.preventDefault();

        addTask(inputValue).then(tasks => {
            setTasks([...tasks])
            
            toast.success("Se ha añadido la tarea con éxito", {
                            position: toast.POSITION.TOP_LEFT,
                            autoClose:7000});

            setInputValue("");

        }).catch(error =>  toast.error("La tarea no pudo ser agregada", {
                            position: toast.POSITION.TOP_LEFT,
                            autoClose:7000}));
    }
    
    return (
        <div className='form'>
        <form className='form-task' onSubmit={addTaskSubmit}>
            <input type="text" placeholder='Agregar nueva tarea' className='input-task' value={ inputValue } onChange={keyPressed}/>
            <input type="button" value="Add Task" className='btn-add-task' onClick={addTaskSubmit} />
        </form>
        </div>
    )
}

export default AddTask

AddTask.propType = {
    setTasks: PropTypes.func.isRequired
}