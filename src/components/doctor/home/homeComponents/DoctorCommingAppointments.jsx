import useModal from "../../../../hooks/useModal";
import { DoctorAppointmentsDetails } from "../../modals";


export function DoctorComingAppointments() {

    const {setOpenModal} = useModal()

    return (
        <>
            <div className="card mt-3">
                <div className="card-header bg-success text-start d-flex align-items-center">
                    <i class="fa-regular fa-calendar me-2 pb-2"></i> <h5>Citas de Hoy</h5>
                </div>
                <div className="card-body">
                    <div className="border p-3 rounded-4 border-success info-appointment doctor-appointments d-flex align-items-center justify-content-between">
                        <div className="summary">
                            <h5>Nombre Paciente</h5>
                            <p className="text-secondary">Control Rutinario</p>
                            <div className="schedule d-flex">
                                <p className="m-0"><i class="fa-regular fa-clock"></i> </p>
                                <p className="ps-1 m-0 pe-3">10:00</p>
                                <p className="bg-success m-0 rounded-4 text-white p-1 pe-2 ps-2 ">Confirmada</p>
                            </div>
                        </div>
                        <button className="btn bg-white border border-success text-success" onClick={()=>{setOpenModal(true)}}>Detalles</button>
                    </div>
                </div>
            </div>
            <DoctorAppointmentsDetails/>
        </>
    )
}