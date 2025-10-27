import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/home";
import { NavBar } from "../components/navbar";
import { Appointments } from "../components/appointments";
import { Profile } from "../components/profile";


export const PrivateRouter = () =>{

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="appointments" element={<Appointments />} />
                <Route path="profile" element={<Profile/>}/>
                <Route path="/" element={<Navigate to="home"/>}></Route>
            </Routes>
        </>
    )
}