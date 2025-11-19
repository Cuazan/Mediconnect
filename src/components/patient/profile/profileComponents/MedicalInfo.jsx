import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { GetMedicalRecords, GetPatients } from "../../../../requester/Requester";

export function MedicalInfo() {

    const { auth } = useAuth();

    const [medicalInfo, setMedicalInfo] = useState([]);
    const [patients, setPatients] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);

    const getData = async () => {
        try {
            const medicalInfoResponse = await GetMedicalRecords();
            const patientsResponse = await GetPatients();

            setMedicalInfo(medicalInfoResponse);
            setPatients(patientsResponse);

            const patient = patientsResponse.find(
                (p) => p.email?.toLowerCase() === auth.email?.toLowerCase()
            );

            setCurrentPatient(patient || null);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (!currentPatient) {
        return (
            <div className="container mt-4">
                <h4>No se encontró información del paciente asociado a este usuario.</h4>
            </div>
        );
    }

    const patientRecords = medicalInfo.filter(
        (record) => record.patientId === currentPatient.id
    );

    return (
        <div className="container mt-4">
            <h3>Registros Médicos del Paciente</h3>

            <div className="row g-3 mt-3">

                {patientRecords.length > 0 ? (
                    patientRecords.map((record) => (
                        <div key={record.id} className="col-md-6">
                            <div className="card shadow-sm">

                                <div className="card-header bg-primary text-white">
                                    <strong>
                                        {currentPatient.name} {currentPatient.lastname}
                                    </strong>
                                </div>

                                <div className="card-body">
                                    <p><strong>Historia Médica:</strong> {record.medicalHistory}</p>
                                    <p><strong>Alergias:</strong> {record.allergies}</p>
                                    <p><strong>Enfermedades Crónicas:</strong> {record.chronicDiseases}</p>
                                    <p><strong>Medicamentos Controlados:</strong> {record.controlledMedications}</p>
                                    <p><strong>Notas:</strong> {record.notes}</p>
                                </div>

                            </div>
                        </div>
                    ))
                ) : (
                    <p>No hay registros médicos para este paciente.</p>
                )}

            </div>
        </div>
    );
}
