import { ComingAppointments } from "../homeComponents/CommingAppointments";
import '../css/HomStyles.css'
import { MedicalInf } from "../homeComponents/MedicalInf";
import { Reminders } from "../homeComponents/Reminders";

export function Home() {

    return (
        <>
            <div className="container p-0">
                <ComingAppointments/>
                <MedicalInf/>
                <Reminders/>
            </div>
        </>
    )
}