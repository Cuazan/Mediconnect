import Modal from 'react-modal';
import useModal from '../../../../hooks/useModal';
import { useEffect, useState } from 'react';
import { GetMedics, GetPatients, PostAppointment } from '../../../../requester/Requester';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "700px",
        height: "800px",
        borderRadius: "20px",
        padding: "0",
        border: "none",
        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
};

Modal.setAppElement('#root');
export function AddAppointMent() {

    const { openModal, setOpenModal } = useModal();


    const [doctors, setDoctors] = useState([]);
    const [patients, setPatients] = useState([]);


    const [doctorId, setDoctorId] = useState("");
    const [patientId, setPatientId] = useState("");
    const [reason, setReason] = useState("");
    const [status, setStatus] = useState(1);
    const [scheduledAt, setScheduledAt] = useState("");


    function closeModal() {
        setOpenModal(false);
    }


    const getDoctorsPatients = async () => {
        try {
            const patientsResponse = await GetPatients();
            const doctorsResponse = await GetMedics();
            setPatients(patientsResponse);
            setDoctors(doctorsResponse);
        } catch (error) { }
    };


    useEffect(() => {
        getDoctorsPatients();
    }, []);


    const handleSubmit = async () => {
        let appointmentInfo = {
            patientId: Number(patientId),
            doctorId: Number(doctorId),
            statusId: Number(status),
            scheduledAt: new Date(scheduledAt).toISOString(),
            reason: reason || "",
        };

        try {
            const response = await PostAppointment(appointmentInfo);
            console.log(response);
            setDoctorId('');
            setPatientId('');
            setReason('');
            setStatus('');
            setScheduledAt(''); 
            setOpenModal(false)          
        } catch (error) {
            console.log("POST ERROR:", error.response?.status, error.response?.data);
        }
    };

    return (
        <Modal isOpen={openModal} onRequestClose={closeModal} style={customStyles}>
            <div className="container p-4">
                <h4 className="mb-4 fw-bold text-center">Crear Nueva Cita</h4>

                <div className="mb-3">
                    <label className="form-label">Paciente</label>
                    <select
                        className="form-select"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                    >
                        <option value="">Seleccione un paciente</option>
                        {patients.map((p) => (
                            <option key={p.id} value={p.id}>
                                {p.fullName} — {p.gender}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Doctor</label>
                    <select
                        className="form-select"
                        value={doctorId}
                        onChange={(e) => setDoctorId(e.target.value)}
                    >
                        <option value="">Seleccione un doctor</option>
                        {doctors.map((d) => (
                            <option key={d.id} value={d.id}>
                                {d.fullName} — {d.specialty}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Motivo de la cita</label>
                    <input
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="form-control"
                        placeholder="Ej: Dolor de cabeza"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Estado</label>
                    <select
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="1">Confirmada</option>
                        <option value="2">Pendiente</option>
                        <option value="3">Cancelada</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Fecha y hora</label>
                    <input
                        type="datetime-local"
                        className="form-control"
                        value={scheduledAt}
                        onChange={(e) => setScheduledAt(e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-outline-secondary w-45" onClick={closeModal}>
                        Cancelar
                    </button>


                    <button className="btn btn-primary w-45" onClick={handleSubmit}>
                        Publicar Cita
                    </button>
                </div>
            </div>
        </Modal>
    );
}