import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { GetMedics } from "../../../../requester/Requester";

export function DoctorProfile() {

    const [medicInfo, setMedicInfo] = useState(null);
    const { auth } = useAuth();

    const getMedic = async () => {
        try {
            const response = await GetMedics();
            console.log(response)
            const medicFound = response.find(
                (medic) => medic.email?.toLowerCase() === auth.user.email?.toLowerCase()
            );

            setMedicInfo(medicFound || null);
        } catch (error) {
            console.log(error);
        }
    };
        console.log(medicInfo)
    useEffect(() => {
        if (auth?.user?.email) {
            getMedic();
        }
    }, [auth?.user?.email]);

    if (!medicInfo) {
        return (
            <div className="container mt-4">
                <h5>Cargando información del médico...</h5>
            </div>
        );
    } 

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <h5>Mi Perfil Médico</h5>
                <button className="btn btn-primary">
                    <i className="fa-solid fa-pencil mb-0 me-2"></i> Editar Perfil
                </button>
            </div>

            <div className="card mt-4">
                <div className="card-header text-start d-flex align-items-center ps-5 p-2">
                    <i className="fa-solid fa-database me-2"></i> Datos Personales
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="d-flex">
                            <p>
                                <i className="fa-solid fa-user rounded-circle mb-0 me-4 bg-primary text-white p-2"></i>
                            </p>

                            <div className="pitient-details w-100">
                                <h5>{medicInfo.fullName}</h5>

                                <div className="row d-flex">
                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">ID del Médico</p>
                                        <h5 className="text-primary">{medicInfo.id}</h5>
                                    </div>

                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">Correo</p>
                                        <h5 className="text-dark">{medicInfo.email}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p className="title mb-0">Licencia</p>
                            <p>{medicInfo.licenseNumber}</p>

                            <p className="title mb-0">Especialidad</p>
                            <p>{medicInfo.specialty}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
