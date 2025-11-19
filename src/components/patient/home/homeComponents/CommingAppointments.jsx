import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { GetAppointment, GetPatients } from "../../../../requester/Requester";

export function ComingAppointments() {

    const [appointments, setAppointments] = useState([]);
    const { auth } = useAuth();

    const getData = async () => {
        try {
            const appointmentResponse = await GetAppointment();
            const patientResponse = await GetPatients();

            const patientFound = patientResponse.find(
                (p) => p.email === auth.user.email
            );

            if (!patientFound) {
                console.log("Paciente no encontrado");
                return;
            }

            const patientAppointments = appointmentResponse.filter(
                (app) => app.patientId === patientFound.id
            );
            const now = new Date();
            const startOfWeek = new Date(now.setDate(now.getDate() - now.getDay() + 1));
            const endOfWeek = new Date(now.setDate(startOfWeek.getDate() + 6)); 

            const thisWeekAppointments = patientAppointments.filter((app) => {
                const appDate = new Date(app.scheduledAt);
                return appDate >= startOfWeek && appDate <= endOfWeek;
            });

            setAppointments(thisWeekAppointments);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="card mt-3">
                <div className="card-header bg-primary text-start d-flex align-items-center">
                    <i className="fa-regular fa-calendar me-2 pb-2"></i>
                    <h5>Citas esta Semana</h5>
                </div>

                <div className="card-body">

                    {appointments.length === 0 && (
                        <p className="text-muted">No tienes citas esta semana.</p>
                    )}

                    {appointments.length > 0 && appointments.map((app) => {

                        const date = new Date(app.scheduledAt);
                        const fecha = date.toISOString().split("T")[0];
                        const hora = date.toTimeString().split(":").slice(0, 2).join(":");

                        return (
                            <div key={app.id} className="border p-3 mb-3 rounded-4 border-primary info-appointment">
                                <div className="summary">
                                    <h5>{app.doctorName}</h5>
                                    <p className="text-secondary">{app.specialty}</p>

                                    <div className="schedule d-flex gap-3">
                                        <p>{fecha}</p>
                                        <p>{hora}</p>
                                        <p>{app.status || "Virtual"}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </>
    );
}
