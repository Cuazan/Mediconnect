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
                    {console.log(auth)}
                    <div className="container p-0 align-items-center d-flex justify-content-between">
                        <div className="page-info">
                            <h5>Mediconnect</h5>
                            <p>Portal del paciente</p>
                        </div>
                        <div>
                            <ul className="nav nav-pills">
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