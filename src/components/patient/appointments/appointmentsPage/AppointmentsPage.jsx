import { useEffect, useState } from "react"
import { GetAppointment } from "../../../../requester/Requester";
import useAuth from "../../../../hooks/useAuth";


export function AppointmentsPage() {

    const [appointments, setAppointments] = useState([]);

    const {auth} = useAuth();

    const role = auth.roles
    const userId = auth.user.id

    const getAppointments = async () => {
        try {
            const response = await GetAppointment();
            console.log(response)
            setAppointments(response)
        } catch (error) {

        }
    }

    console.log(appointments)

    useEffect(()=>{
        getAppointments()
    }, [])

    return (
        <>
            <div className="container pt-4">
                <p>Gestión de Citas</p>
                        <div className="card mt-3">
            <div className="card-header bg-primary text-start d-flex align-items-center">
                <i class="fa-regular fa-calendar me-2 pb-2"></i> <h5>Mis Proximas Citas</h5>
            </div>
            <div className="card-body">
                <div className="border d-flex justify-content-between align-items-center p-3 rounded-4 border-primary info-appointment">
                    <div className="summary">
                        <h5>Nombre Doctor</h5>
                        <p className="text-secondary">Cardilogia</p>
                        <div className="schedule d-flex">
                            <p>2024-10-15</p>
                            <p>10:00</p>
                            <p>Virtual</p>
                        </div>
                    </div>
                    <div className="actions">
                        <button className="btn btn-danger me-2">Cancelar</button>
                        <button className="btn btn-primary me-2">Unirse a llamada</button>
                        <button className="btn btn-success">Ver resultados</button>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </>
    )

}