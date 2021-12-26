import PropTypes from 'prop-types'
import { Modal,  ModalHeader, ModalFooter, Button} from 'reactstrap'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { deleteTask } from '../Services/TasksServices'

const DeleteTask = ({ id , setDeleteModalOpen, deleteModalOpen, setTasks}) => {

    const cerrarModal = (e) => setDeleteModalOpen(false); 

    const deleteTaskHttp = (e) => {

        deleteTask(id).then(tasks => setTasks([...tasks]))
        setDeleteModalOpen(false);

        toast.success("Se ha eliminado la tarea", {
            position: toast.POSITION.TOP_LEFT,
            autoClose:7000});
    }

    return (
        <Modal isOpen={deleteModalOpen}>
            <ModalHeader>
                ¿Está seguro de que desea eliminar la tarea?
            </ModalHeader>
            <ModalFooter>
                <Button color='danger' onClick={deleteTaskHttp}>Eliminar</Button>
                <Button color='secondary'  onClick={ cerrarModal }>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteTask;

DeleteTask.propTypes = {
    id: PropTypes.number.isRequired,
    setDeleteModalOpen: PropTypes.func.isRequired,
    deleteModalOpen: PropTypes.bool.isRequired,
    setTasks: PropTypes.func.isRequired,
}