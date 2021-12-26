import { getAllTasks } from "../Services/TasksServices"
import { useState, useEffect } from "react"

export const useFetchGetAllTasks = (conteo) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })
    
    useEffect(() => {
        getAllTasks().then( tasks => {
            setState({
                data:tasks,
                loading:false
            })
        })
    }, [conteo])
    console.log(state);
    return state;
}