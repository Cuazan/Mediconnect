import { NavLink } from "react-router-dom"

export function ProfileNavBar() {

    return (
        <>
            <ul className="nav nav-pills bg-white rounded-5">
                <li className="nav-item">
                    <NavLink to="profileInfo" end className={({ isActive }) => `nav-link ${isActive ? "active rounded-5" : ""}`}>
                        Informacion General
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="medicalInfo" className={({ isActive }) => `nav-link ${isActive ? "active rounded-5" : ""} me-0`}>
                        Informacion Medica
                    </NavLink>
                </li>
            </ul>
        </>
    )
}