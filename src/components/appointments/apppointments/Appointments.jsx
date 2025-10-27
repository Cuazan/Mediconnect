import ComingAppointments from "../../home/homeComponents/ComingAppointments"
import "../css/appointmentsStyle.css"

export function Appointments() {


    return (
        <>
            <div className="row  m-4">
                <div className="col-lg-12 d-flex justify-content-between align-items-center">
                    Gestion de citas
                    <button className="btn btn-primary new-appoint"><i className="fa-regular fa-plus pe-2"  ></i>Nueva Cita</button>
                </div>
            </div>
            <ComingAppointments></ComingAppointments>
        </>
    )
}