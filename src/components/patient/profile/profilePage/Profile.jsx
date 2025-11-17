import { Outlet } from "react-router-dom";
import { ProfileNavBar } from "../profileComponents/ProfileNavBar";
import '../css/profileStyles.css'

export function Profile(){

    return(
        <>
        <div className="container pt-4 p-0">
            <div className="d-flex justify-content-between align-items-center">
                <h5>Mi Perfil Paciente</h5>
                <button className="btn btn-primary"> <i class="fa-solid fa-pencil mb-0 me-2"></i> Editar Perfil</button>
            </div>
            <div className="pt-4 d-flex justify-content-center">
                <ProfileNavBar/>
            </div>
            <Outlet/>
        </div>
        </>
    )

}