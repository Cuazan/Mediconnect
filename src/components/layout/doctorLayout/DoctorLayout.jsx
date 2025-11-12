import { Outlet } from "react-router-dom";
import { DoctorNavbar } from "../../navbar";

export function DoctorLayout(){

    return(
        <>
        <DoctorNavbar/>
        <Outlet/>
        </>
    )
}