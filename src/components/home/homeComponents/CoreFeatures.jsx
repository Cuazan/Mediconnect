import '../css/coreFeaturesStyle.css'

export default function CoreFeatures() {
    return (
        <>
            <div className="row m-4">
                <div className="col-lg-4 mt-3">
                    <div className="card crd1 bg-primary p-4">
                        <div className='d-flex'>
                            <button className='btn btn-primary'><i className="fa-regular fa-plus"  ></i></button>
                            <div className="crd-text ms-3 text-white ">
                                <h4>
                                    Agendar Cita
                                </h4>
                                <p className='m-0'>Crear nueva consulta médica</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div className="card crd2 p-4">
                        <div className='d-flex'>
                            <button className='btn btn-primary'><i class="fa-solid fa-video"></i></button>
                            <div className="crd-text ms-3 text-white ">
                                <h4>
                                    Teleconsulta
                                </h4>
                                <p className='m-0'>Consulta virtual</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card crd3 mt-3 p-4">
                        <div className='d-flex'>
                            <button className='btn btn-primary'><i class="fa-solid fa-file"></i></button>
                            <div className="crd-text ms-3 text-white ">
                                <h4>
                                    Mis Resultados
                                </h4>
                                <p className='m-0'>Ver Resultados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}