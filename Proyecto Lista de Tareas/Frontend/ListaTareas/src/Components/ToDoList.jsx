import React, {useState, useEffect } from 'react'
import AddTask from './AddTask'
import TaskGrid from './TaskGrid'
import { getAllTasks } from '../Services/TasksServices'

const ToDoList = () => {

    const [tasks, setTasks] = useState([]);
        // const [conteo, setConteo] = useState(0);

    useEffect(() => {
        getAllTasks().then( task => {
            setTasks([...task])
        })
    }, [])
    // const {data:tareas, loading} = useFetchGetAllTasks(conteo);

    return (
        <>
            <div className='cont-todo-list'>
                <AddTask setTasks= {setTasks} />
                <ol className = 'cont-tasks'>
                    {
                        tasks.map(
                            task =>(
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