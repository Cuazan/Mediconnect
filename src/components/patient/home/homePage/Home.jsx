import { ComingAppointments } from "../homeComponents/CommingAppointments";
import '../css/HomStyles.css'
import { MedicalInf } from "../homeComponents/MedicalInf";
import { Reminders } from "../homeComponents/Reminders";

export function Home() {


    return (
        <>
            <div className="container p-0">
                <ComingAppointments />
                <div className="row">
                    <div className="col-lg-6 col-md-12">

                        <MedicalInf />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        
                        <Reminders />
                    </div>
                </div>
            </div>
        </>
    )
}