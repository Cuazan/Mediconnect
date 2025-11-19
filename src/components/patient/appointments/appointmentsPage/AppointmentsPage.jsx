import { useEffect, useState } from "react";
import { DeleteAppointment, GetAppointment, GetPatients } from "../../../../requester/Requester";
import useAuth from "../../../../hooks/useAuth";
import { ViewResultsModal } from "../../modals";
import useModal from "../../../../hooks/useModal";

export function AppointmentsPage() {

    const [appointments, setAppointments] = useState([]);
    const [patient, setPatient] = useState(null);

    const { auth } = useAuth();

    const { setOpenModal } = useModal();

    const getAppointments = async () => {
        try {
            const appointmentResponse = await GetAppointment();
            const patientResponse = await GetPatients();

            const patientFound = patientResponse.find(
                (p) => p.email === auth.user.email
            );

            const filteredAppointments = appointmentResponse.filter(
                (app) => app.patientId === patientFound.id
            );

            setAppointments(filteredAppointments);

        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async(id)=>{
        try {
            const response = await DeleteAppointment(id);
            await getAppointments();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAppointments();
    }, []);

    return (
        <>
            <div className="container pt-4 overflow-auto">
                <h6>Gestion de Citas</h6>
                {appointments.length === 0 && (
                    <p className="text-muted">No tienes citas próximas.</p>
                )}

                {appointments.length > 0 && appointments.map((app) => {
                    const date = new Date(app.scheduledAt);

                    const fecha = date.toISOString().split("T")[0];
                    const hora = date.toTimeString().split(":").slice(0, 2).join(":");

                    return (
                        <div className="card mt-3" key={app.id}>
                            <div className="card-header bg-primary text-start d-flex align-items-center">
                                <i className="fa-regular fa-calendar me-2 pb-2"></i>
                                <h5></h5>
                            </div>

                            <div className="card-body">
                                <div className="border d-flex justify-content-between align-items-center p-3 rounded-4 border-primary info-appointment">

                                    <div className="summary">
                                        <h5>Razon: {app.reason}</h5>
                                        <div className="d-flex">
                                            <p className="text-secondary">Doctor: {app.doctorName}</p>
                                        </div>
                                        <p className="text-secondary">Especialidad: {app.specialty}</p>
                                        <div className="schedule d-flex gap-3">
                                            <p>{fecha}</p>
                                            <p>{hora}</p>
                                            <p>Virtual</p>
                                        </div>
                                    </div>
                                    <div className="actions">
                                        <button className="btn btn-danger me-2" onClick={()=>handleDelete(app.id)}>Cancelar</button>
                                        <button className="btn btn-primary me-2">Unirse a llamada</button>
                                        <button className="btn btn-success" onClick={() => setOpenModal(true)}>Ver resultados</button>
                                        
                                    </div>
                                    <ViewResultsModal appointmentId={app.id} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );
}
