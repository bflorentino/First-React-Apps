import React, {useState, useEffect } from 'react'
import AddTask from './AddTask'
import TaskGrid from './TaskGrid'
import { getAllTasks } from '../Services/TasksServices'

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getAllTasks().then( task => {
            setTasks([...task])
        })
    }, [])

    return (
        <>
            <div className='cont-todo-list'>
                <AddTask setTasks= {setTasks} />
                <h1>Lista de tareas</h1>
                <ol className = 'cont-tasks'>
                {
                    tasks.map(task =>(
                        <TaskGrid
                            key = {task.id}
                            {...task}
                            setTasks={setTasks}
                        />
                    ))
                }
                </ol>
            </div>
        </>
    )
}

export default ToDoList