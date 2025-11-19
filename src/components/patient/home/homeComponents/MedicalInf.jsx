import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { GetMedicalRecords, GetPatients } from "../../../../requester/Requester";

export function MedicalInf() {

    const { auth } = useAuth();
    const [medicalInfo, setMedicalInfo] = useState(null);

    const getData = async () => {
        try {
            const patientResponse = await GetPatients();
            const medicalResponse = await GetMedicalRecords();

            // 1. Encontrar paciente por email
            const patientFound = patientResponse.find(
                (p) => p.email?.toLowerCase() === auth.user.email?.toLowerCase()
            );

            if (!patientFound) return;

            const medicalFound = medicalResponse.find(
                (m) => m.patientId === patientFound.id
            );

            setMedicalInfo(medicalFound || null);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.user?.email) {
            getData();
        }
    }, [auth?.user?.email]);

    if (!medicalInfo) {
        return (
            <div className="card mt-3">
                <div className="card-header bg-success text-start d-flex align-items-center">
                    <i className="fa-regular fa-heart me-2 pb-2"></i>
                    <h5>Información Médica</h5>
                </div>
                <div className="card-body">
                    <p className="text-muted">Cargando información médica...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="card mt-3">
            <div className="card-header bg-success text-start d-flex align-items-center">
                <i className="fa-regular fa-heart me-2 pb-2"></i>
                <h5>Información Médica</h5>
            </div>

            <div className="card-body">

                <div className="medical-data p-3 rounded-4 d-flex justify-content-between">
                    <p className="mb-0">Historial Médico</p>
                    <span>{medicalInfo.medicalHistory || "No registrado"}</span>
                </div>

                <div className="medical-data p-3 rounded-4 d-flex justify-content-between mt-2">
                    <p className="mb-0">Alergias</p>
                    <span>{medicalInfo.allergies || "No registrado"}</span>
                </div>

                <div className="medical-data p-3 rounded-4 d-flex justify-content-between mt-2">
                    <p className="mb-0">Enfermedades Crónicas</p>
                    <span>{medicalInfo.chronicDiseases || "No registrado"}</span>
                </div>

                <div className="medical-data p-3 rounded-4 d-flex justify-content-between mt-2">
                    <p className="mb-0">Medicamentos Controlados</p>
                    <span>{medicalInfo.controlledMedications || "No registrado"}</span>
                </div>

                <div className="medical-data p-3 rounded-4 d-flex justify-content-between mt-2">
                    <p className="mb-0">Notas</p>
                    <span>{medicalInfo.notes || "No registrado"}</span>
                </div>

            </div>
        </div>
    );
}
