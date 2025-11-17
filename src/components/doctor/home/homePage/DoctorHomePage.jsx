import { DoctorComingAppointments } from "../homeComponents/DoctorCommingAppointments";
import '../css/DoctorHomeStyles.css'


export function DoctorHomePage(){

    return(
        <>
        <div className="container border border-primary vh-100">
            <DoctorComingAppointments/>
        </div>
        </>
    )
}