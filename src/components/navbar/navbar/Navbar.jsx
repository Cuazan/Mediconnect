import { NavLink, useNavigate } from "react-router-dom"
import '../css/navStyle.css'
import test from "../../../assets/mediconnect-logo.png"

export function NavBar() {
    const navigation = useNavigate();
    const login = () => {
        navigation('/loggin', { replace: true })

    }
    return (
        <>
            <div className="panel-paciente p-4 bg-primary">
                <div className="row w-100">
                    <div className="col  d-flex align-items-center">
                        <div className="patient-inf text-white d-flex">
                            <img src={test} width='70px' alt="" />
                            <div className="patient-text-info">
                                <h5 className=" m-0 ">Panel Paciente </h5>
                                <p className="m-0">asdadsa@email.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex align-items-center justify-content-end">
                        <div className="more-options d-flex flex-wrap">
                            <button className="btn"><i className="fa-regular fa-bell text-white"></i></button>
                            <button className="btn btn-primary ms-3 close" onClick={login}>Cerrar Sesion</button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="ps-4" >
                <div className="row">
                    <div className="col-sm-12 ">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink to="/home" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/appointments" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Citas
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/history" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Historial
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/profile" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                    Perfil
                                </NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav >
        </>
    )
}



