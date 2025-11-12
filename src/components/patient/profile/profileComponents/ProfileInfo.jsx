import useAuth from "../../../../hooks/useAuth"


export function ProfileInfo() {

    const { auth } = useAuth();
    return (
        <>
            <div className="card mt-4">
                <div className="card-header text-start d-flex align-items-center ps-5 p-2">
                   <i class="fa-solid fa-database me-2"></i> Datos Personales
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="d-flex">
                            <p><i class="fa-solid fa-user rounded-circle  mb-0 me-4 bg-primary text-white"></i></p>
                            <div className="pitient-details w-100">
                                <h5>{auth.user.firstName + ' ' + auth.user.lastName}</h5>
                                <div className="row d-flex">
                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">ID de Paciente</p>
                                        <h5 className="text-primary">{auth.user.id }</h5>
                                    </div>
                                    <div className="col-6 mt-2">
                                        <p className="text-secondary mb-0">DUI</p>
                                        <h5 className="text-dark">{auth.user.id}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <p className="title mb-0">Fecha de Nacimiento</p>
                            <p>Una fecha</p>
                            <p className="title mb-0">Género</p>
                            <p>Un genero</p>
                            <p className="title mb-0">Fecha de Nacimiento</p>
                            <p>Una fecha</p>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p className="title mb-0">Dirección</p>
                            <p>Una Dirección</p>
                            <p className="title mb-0">Teléfono</p>
                            <p>123456</p>
                            <p className="title mb-0">Correo Electrónico</p>
                            <p className="mb-0">algo@algo.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}