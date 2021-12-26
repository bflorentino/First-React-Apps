import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Input} from 'reactstrap'
import { Button } from 'reactstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.css'
import { editTask } from '../Services/TasksServices'

const EditTask = ( { id, detalles, realizada, setEditModalOpen, deleteModalOpen, setTasks } ) => {

    const [inputValue, setInputValue] = useState(detalles);

    const cerrarModal = (e) => setEditModalOpen(false); 
    const editInput = (e) => setInputValue(e.target.value);

    const editTaskHttp = (e) =>  {

        editTask( id, inputValue, realizada).then(tasks => setTasks([...tasks]))
        setEditModalOpen(false);

        toast.success("Se ha editado la tarea con éxito", {
            position: toast.POSITION.TOP_LEFT,
            autoClose:7000});
    }

    return (
            <Modal isOpen={deleteModalOpen}>
                <ModalHeader>
                    Editar Tarea
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                    <Input type="text" value={inputValue} onChange={editInput}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                <Button color='primary'onClick={editTaskHttp}>Guardar Cambios</Button>
                <Button color='secondary'onClick={ cerrarModal }>Cancelar </Button>
                </ModalFooter>
            </Modal>
    )
}

export default EditTask

EditTask.propTypes = {
    id: PropTypes.number.isRequired,
    detalles: PropTypes.string.isRequired,
    realizada: PropTypes.bool.isRequired,
    setDeleteModalOpen: PropTypes.func.isRequired,
    deleteModalOpen: PropTypes.bool.isRequired,
    setTasks: PropTypes.func.isRequired,
}