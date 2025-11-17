import useAuth from "../../../hooks/useAuth"
import { useNavigate, NavLink } from "react-router-dom";

export function DoctorNavbar() {
    const navigation = useNavigate();

    const { auth, setAuth } = useAuth()

    function handleExit() {
        navigation('/login', { replace: true })
        setAuth('')
    }

    return (
            <>
                <nav className="p-2" >
                    <div className="container p-0 align-items-center d-flex justify-content-between">
                        <div className="page-info">
                            <h5>Mediconnect</h5>
                            <p>Portal del Médico</p>
                        </div>
                        <div>
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <NavLink to="/doctorHomePage" end className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                        Inicio
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/doctorAppointments" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                        Añadir Cita
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/doctorProfile" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                                        Perfil
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="end justify-content-between d-flex flex-wrap">
                            <div className="profile-info">
                                <h5>{auth.user.firstName + ' ' + auth.user.lastName}</h5>
                                <p>{auth.user.email}</p>
                            </div>
                            <div className="divider"></div>
                            <button className="btn exit border h-0" onClick={handleExit}>Salir</button>
                        </div>
                    </div>
                </nav >

        </>
    )
}