import Modal from 'react-modal';
import useModal from '../../../../hooks/useModal';

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

export function DoctorAppointmentsDetails() {

    const { openModal, setOpenModal } = useModal()

    function closeModal() {
        setOpenModal(false);
    }

    return (
        <div>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className=" justify-content-center flex-column align-items-start p-3 border-bottom bg-light rounded-top overflow-auto">
                    <div className='p-3'><h6 className=''>Detalles adicionales</h6></div>
                    <div className="p-3 rounded mb-4" style={{ backgroundColor: "#eefffdff" }}>
                        <h6 className="fw-bold text-primary mb-3">
                            <i className="fa-regular fa-user m-2 p-0 small-icon"></i>
                            Información del Paciente
                        </h6>

                        <div className="row g-3">

                            <div className="col-6">
                                <p className="mb-1 fw-bold">Nombre:</p>
                                <p>Jose Agreda</p>
                            </div>


                            <div className="col-6">
                                <p className="mb-1 fw-bold">Edad:</p>
                                <p>45 años</p>
                            </div>

                            <div className="col-12">
                                <p className="mb-1 fw-bold">Telefono:</p>
                                <p>+503 75268225</p>
                            </div>
                            <div className="col-12">
                                <p className="mb-1 fw-bold">Edad:</p>
                                <p>45 años</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-3 rounded mb-4" style={{ backgroundColor: "#eef5ff" }}>
                        <h6 className="fw-bold text-primary mb-3">
                            <i className="fa-regular fa-calendar me-2"></i>
                            Detalles de la Cita
                        </h6>


                        <div className="row g-3">


                            <div className="col-6">
                                <p className="mb-1 fw-bold">Estado:</p>
                                <span className="badge bg-success">Confirmada</span>
                            </div>


                            <div className="col-12">
                                <p className="mb-1 fw-bold">Motivo de consulta:</p>
                                <p>Control rutinario</p>
                            </div>


                            <div className="col-12">
                                <p className="mb-1 fw-bold">Fecha y hora:</p>
                                <p>2024-08-15  - 9:00 am</p>
                            </div>
                        </div>
                    </div>


                    {/* INFORMACIÓN MÉDICA */}
                    <div className="p-3 rounded mb-4" style={{ backgroundColor: "#ffeef5" }}>
                        <h6 className="fw-bold text-danger mb-3">
                            <i className="fa-solid fa-heart-pulse me-2"></i>
                            Información Médica
                        </h6>


                        <p className="fw-bold mb-1">Alergias conocidas:</p>
                        <span className="badge bg-danger mb-3">Penicilina</span>


                        <p className="fw-bold mb-1">Notas clínicas:</p>
                        <textarea
                            className="form-control"
                            rows="3"
                            defaultValue="Paciente con hipertensión controlada. Revisar presión arterial y ajustar medicación si es necesario."
                        ></textarea>
                    </div>
                </div>


                {/* FOOTER */}
                <div className="d-flex justify-content-end gap-2 p-3 border-top bg-light rounded-bottom">
                    <button className="btn btn-outline-secondary" onClick={closeModal}>
                        Cerrar
                    </button>
                    <button className="btn btn-primary">Unirse a llamada</button>
                    <button className="btn btn-success">Agregar Diagnóstico</button>
                </div>
            </Modal>
        </div>
    );
}
