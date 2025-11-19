import { DoctorComingAppointments } from "../homeComponents/DoctorCommingAppointments";
import '../css/DoctorHomeStyles.css'


export function DoctorHomePage(){

    return(
        <>
        <div className="container vh-100">
            <DoctorComingAppointments/>
        </div>
        </>
    )
}