import useModal from "../../../../hooks/useModal"
import { AddAppointMent } from "../../modals";


export function DoctorAppointments() {
    const {setOpenModal} = useModal();

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between">
                    <h6>Historial de Citas</h6>
                    <button className="btn btn-primary" onClick={()=>{setOpenModal(true)}}>Añadir Cita</button>
                </div>
            </div>
            <AddAppointMent/>
        </>
    )
}