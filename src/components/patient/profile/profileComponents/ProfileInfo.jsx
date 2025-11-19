import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { GetPatients } from "../../../../requester/Requester";

export function ProfileInfo() {

    const [patientInfo, setPatientInfo] = useState(null);
    const { auth } = useAuth();

    const getData = async () => {
        try {
            const response = await GetPatients();
            const patientFound = response.find(
                (p) => p.email === auth.user.email
            );

            setPatientInfo(patientFound);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!patientInfo) {
        return (
            <p className="text-muted">Cargando información del paciente...</p>
        );
    }

    return (
        <>
            <div className="card mt-4">
                <div className="card-header text-start d-flex align-items-center ps-5 p-2">
                    <i className="fa-solid fa-database me-2"></i>
                    Datos Personales
                </div>

                <div className="card-body">

                    <div className="row">
                        <div className="d-flex">
                            <p>
                                <i className="fa-solid fa-user rounded-circle mb-0 me-4 bg-primary text-white p-3"></i>
                            </p>
                            <div className="pitient-details w-100">
                                <h5>{patientInfo.fullName}</h5>

                                <div className="row d-flex">
                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">ID de Paciente</p>
                                        <h5 className="text-primary">{patientInfo.id}</h5>
                                    </div>

                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">DUI</p>
                                        <h5 className="text-dark">{auth.user.id}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p className="title mb-0">Fecha de Nacimiento</p>
                            <p>{new Date(patientInfo.birthDate).toLocaleDateString()}</p>

                            <p className="title mb-0">Género</p>
                            <p>{patientInfo.gender}</p>

                            <p className="title mb-0">Contacto de Emergencia</p>
                            <p>{patientInfo.emergencyContact}</p>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <p className="title mb-0">Dirección</p>
                            <p>No disponible</p> 

                            <p className="title mb-0">Teléfono</p>
                            <p>No disponible</p> 

                            <p className="title mb-0">Correo Electrónico</p>
                            <p className="mb-0">{patientInfo.email}</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
