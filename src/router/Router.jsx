import { Routes, Route } from "react-router-dom";
import { Login } from "../components/login";
import RequireAuth from "../components/requireAuth/RequireAuth";
import { DoctorLayout, Layout, MainLayout } from "../components/layout";
import { Home } from "../components/patient/home";
import { AppointmentsPage } from "../components/patient/appointments";
import { MedicalInfo, Profile, ProfileInfo } from "../components/patient/profile";
import { DoctorHomePage } from "../components/doctor/home";
import { DoctorAppointments } from "../components/doctor/doctorAppointments";
import { DoctorProfile } from "../components/doctor/doctorProfile";

export const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Login />}></Route>
                    <Route path="login" element={<Login />} />

                    <Route element={<RequireAuth allowedRoles={["Patient"]} />}>
                        <Route element={<Layout />}>
                            <Route path="home" element={<Home />} />
                            <Route path="appointments" element={<AppointmentsPage />} />
                            <Route path="profile" element={<Profile />}>
                                <Route index element={<ProfileInfo />}></Route>
                                <Route path="profileInfo" element={<ProfileInfo />} />
                                <Route path="medicalInfo" element={<MedicalInfo />} />
                            </Route>
                        </Route>
                    </Route>

                    <Route element={<RequireAuth allowedRoles={["Doctor"]} />}>
                        <Route element={<DoctorLayout />}>
                            <Route path="doctorHomePage" element={<DoctorHomePage />} />
                            <Route path="doctorAppointments" element={<DoctorAppointments />} />
                            <Route path="doctorProfile" element={<DoctorProfile />} />
                        </Route>
                    </Route>

                </Route>
            </Routes>
        </>
    )

}