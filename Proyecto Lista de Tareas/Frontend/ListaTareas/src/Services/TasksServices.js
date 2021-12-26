const url = 'https://localhost:44346/api/Tareas';

export const getAllTasks = async() => {

    const res = await fetch(url);
    const { data } = await res.json();

    return data;
}

export const editTask = async( id, detalles, realizada) => {

    const put = {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            detalles:detalles,
            realizada: realizada
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    }

    const res = await fetch(url,put);
    const { data } = await res.json();
    
    return data;

}

export const addTask = async(  detalles ) => {
    
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8' 
        },
        body: JSON.stringify({
            detalles:detalles
        })
    }

    const res = await fetch(url, post);
    const { data } = await res.json();

    return data;
}

export const deleteTask = async( id ) => {

    const del = {
        method: 'DELETE',
    }

    const res = await fetch(`${url}/${id}`, del);
    const { data } = await res.json();
    
    return data;
}