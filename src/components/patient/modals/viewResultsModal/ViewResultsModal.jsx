import Modal from "react-modal";
import useModal from "../../../../hooks/useModal";
import { GetClinicalHistory } from "../../../../requester/Requester";
import { useEffect, useState } from "react";

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

Modal.setAppElement("#root");

export function ViewResultsModal({ appointmentId }) {
    const { openModal, setOpenModal } = useModal();

    const [clinicalData, setClinicalData] = useState(null);
    const [loading, setLoading] = useState(true);

    const getClinicalHistory = async () => {
        try {
            const response = await GetClinicalHistory(appointmentId);
            setClinicalData(response);
            setLoading(false);
        } catch (error) {
            console.log("ERROR HISTORY:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (appointmentId) getClinicalHistory();
    }, [appointmentId]);

    const closeModal = () => setOpenModal(false);

    return (
        <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Clinical Results Modal"
        >
            <div className="justify-content-center flex-column align-items-start p-3 border-bottom bg-light rounded-top overflow-auto">

                <div className="p-3">
                    <h5 className="fw-bold">Detalles del Diagnóstico</h5>
                </div>

                {clinicalData && (
                    <>
                        <div className="p-3 rounded mb-4" style={{ backgroundColor: "#eef5ff" }}>
                            <h6 className="fw-bold text-primary mb-3">
                                <i className="fa-regular fa-calendar me-2"></i>
                                Detalles de la cita
                            </h6>

                            <p><strong>ID de cita:</strong> {clinicalData.appointmentId}</p>
                            <p><strong>Fecha de registro:</strong> {new Date(clinicalData.registeredAt).toLocaleString()}</p>
                        </div>

                        <div className="p-3 rounded mb-4" style={{ backgroundColor: "#ffeef5" }}>
                            <h6 className="fw-bold text-danger mb-3">
                                <i className="fa-solid fa-heart-pulse me-2"></i>
                                Diagnóstico
                            </h6>

                            <p><strong>Diagnóstico:</strong></p>
                            <p>{clinicalData.diagnosis || "No registrado"}</p>

                            <p className="mt-3"><strong>Motivo:</strong></p>
                            <p>{clinicalData.reason || "No especificado"}</p>

                            <p className="mt-3"><strong>Tratamiento:</strong></p>
                            <p>{clinicalData.treatment || "N/A"}</p>

                            <p className="mt-3"><strong>Notas adicionales:</strong></p>
                            <textarea
                                className="form-control"
                                rows={4}
                                defaultValue={clinicalData.notes || ""}
                                readOnly
                            />
                        </div>
                    </>
                )}
            </div>

            <div className="d-flex justify-content-end gap-2 p-3 border-top bg-light rounded-bottom">
                <button className="btn btn-outline-secondary" onClick={closeModal}>
                    Cerrar
                </button>
            </div>
        </Modal>
    );
}
