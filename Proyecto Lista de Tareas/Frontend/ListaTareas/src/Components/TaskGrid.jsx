import React, { useState } from 'react'
import img1 from '../Img/delete.png';
import img2 from '../Img/editar-texto.png';
import { getTaskById } from '../Services/TasksServices';
import EditTask from './EditTask';

const TaskGrid = ({id, details, completed, setTasks}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const editTaskPressed = (e) => {
        setModalOpen(true);
    }

    return (
        <>
        <div className='task-items'>
        
            <span className='checked-task'>
                <input type="checkbox" id={`${id}`} defaultChecked={completed}/>
                <label htmlFor={`${id}`} className='task'>{`${details}`}</label>
            </span>

            <span className='crud-btn'>
                <button className="opciones" onClick={ editTaskPressed }><img src={img2} alt="Editar" /></button>
                <button className="opciones"><img src= {img1} alt="Eliminar"/></button>
            </span>
        </div>
        <EditTask id={id} details={details} realizada={completed} setModalOpen = {setModalOpen} modalOpen={modalOpen} setTasks={setTasks} />
        </>
    )
}
export default TaskGrid