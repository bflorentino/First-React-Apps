import React, { useState, useEffect } from 'react'
import img1 from '../Img/delete.png';
import img2 from '../Img/editar-texto.png';
import { editTask } from '../Services/TasksServices';
import EditTask from './EditTask';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import DeleteTask from './DeleteTask';

const TaskGrid = ({id, detalles, realizada, setTasks}) => {

    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [checked, setChecked] = useState(realizada);
    const [checkboxPressed, setCheckboxPressed] = useState(false);

    const editTaskPressed = (e) => {
        setEditModalOpen(true);
    }

    const deleteTask = (e) => {
        (!checked
                ? toast.error("No puede eliminar una tarea si no está marcada como terminada", {
                                    position: toast.POSITION.TOP_LEFT,
                                    autoClose:false})
                : setDeleteModalOpen(true));
    }

    const checkCheckbox = (e) => {
        setChecked(e.target.checked);
        setCheckboxPressed(true);       
    } 
    
    useEffect(()=>{
        const editTaskHttp = () => {
            checkboxPressed && editTask( id, detalles, checked)
                                .then(tasks => {
                                    (setTasks([...tasks]));
                                })
        }
        editTaskHttp();
    },[checked, id, detalles, setTasks, checkboxPressed])

    return (
        <>
        <div className='task-items'>

            <span className='checked-task'>
            <input 
                type="checkbox" 
                id={`${id}`} 
                checked={ checked} 
                onChange={ checkCheckbox } 
            />
            <label htmlFor={`${id}`} className='task'>{`${detalles}`}</label>
            </span>

            <span className='crud-btn'>
                <button className="opciones" onClick={ editTaskPressed }><img src={img2} alt="Editar" /></button>
                <button className="opciones" onClick={ deleteTask }><img src= {img1} alt="Eliminar"/></button>
            </span>
        </div>
        <EditTask id={id} 
                detalles={detalles} 
                realizada={checked} 
                setEditModalOpen = {setEditModalOpen} 
                deleteModalOpen={editModalOpen} 
                setTasks={setTasks} />

        <DeleteTask id={id} 
                setDeleteModalOpen = {setDeleteModalOpen} 
                deleteModalOpen={deleteModalOpen} 
                setTasks={setTasks} />
        </>
    )
}
export default TaskGrid