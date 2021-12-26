import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup} from 'reactstrap'
import { editTask } from '../Services/TasksServices'

const EditTask = ( { id, details, completed, setModalOpen, modalOpen, setTasks } ) => {

    const [inputValue, setInputValue] = useState(details);

    const cerrarModal = (e) => setModalOpen(false); 
    const editInput = (e) => setInputValue(e.target.value);

    const editTaskHttp = (e) =>  {
        editTask( id, inputValue, completed).then(tasks => setTasks([...tasks]))
        setModalOpen(false);
    }

    return (
            <Modal isOpen={modalOpen}>
                <ModalHeader>
                    Editar Tarea
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                    <input type="text" className='editar' value={inputValue} onChange={editInput}/>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <button className='btn-editar-modal' onClick={editTaskHttp}>Guardar Cambios</button>
                    <button className='Cerrar' onClick={ cerrarModal }>Cerrar</button>
                </ModalFooter>
            </Modal>
    )
}

export default EditTask
