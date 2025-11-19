

export function Reminders() {

    return (
        <>
            <div className="card mt-3">
                <div className="card-header reminders bg text-start d-flex align-items-center">
                    <i class="fa-regular fa-bell me-2 pb-2"></i> <h5>Recordatorios</h5>
                </div>
                <div className="card-body">
                    <div className=" reminder p-3 rounded-4 info-appointment">
                        <div className="summary">
                            <h5>Nombre Recordatorio</h5>
                            <p className="text-secondary mb-0">Especialidad</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}