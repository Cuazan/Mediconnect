

export function ComingAppointments(){

    return(
        <>
        <div className="card mt-3">
            <div className="card-header bg-primary text-start d-flex align-items-center">
                <i class="fa-regular fa-calendar me-2 pb-2"></i> <h5>Mis Proximas citas</h5>
            </div>
            <div className="card-body">
                <div className="border p-3 rounded-4 border-primary info-appointment">
                    <div className="summary">
                        <h5>Nombre Doctor</h5>
                        <p className="text-secondary">Cardilogia</p>
                        <div className="schedule d-flex">
                            <p>2024-10-15</p>
                            <p>10:00</p>
                            <p>Virtual</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}