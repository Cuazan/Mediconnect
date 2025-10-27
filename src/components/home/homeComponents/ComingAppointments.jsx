import "../css/comingAppointmentsStyle.css"

export default function ComingAppointments() {

    return (
        <>
            <div className="row m-4">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header p-4 pb-2 d-flex align-items-center p-3">
                            <i className="fa-solid fa-calendar me-3 "></i>
                            <h4 className="m-0">
                                Proximas citas
                            </h4>
                        </div>
                        <div className="card-body p-4">
                            <div className="card border appointments-details p-4 mt-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="doc-info d-flex align-items-center ">
                                        <div className="pic me-4">
                                            <i className="fa-solid fa-user "></i>
                                        </div>
                                        <div className="data">
                                            <h4 className="m-0">Dra. Maria Garcia</h4>
                                            <h5 className="text-primary m-0">Cardiologia</h5>
                                            <p className="text-secondary m-0">2024-10-15 a las 10:00 </p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tag d-flex ">
                                            <p className="me-2 text-white rounded text-center p-2 m-0">Teleconsulta</p>
                                            <p className="me-2 text-white rounded text-center p-2 m-0">Unirse</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card border appointments-details p-4 mt-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="doc-info d-flex align-items-center ">
                                        <div className="pic me-4">
                                            <i className="fa-solid fa-user "></i>
                                        </div>
                                        <div className="data">
                                            <h4 className="m-0">Dr. Carlos Lopez</h4>
                                            <h5 className="text-primary m-0">Medicina General</h5>
                                            <p className="text-secondary m-0">2024-10-15 a las 14:00 </p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tag d-flex">
                                            <p className="me-2 text-white rounded text-center p-2 m-0">Presencial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}