import useAuth from "../../../../hooks/useAuth";

export function DoctorProfile() {

    const { auth } = useAuth();
    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Mi Perfil Médico</h5>
                    <button className="btn btn-primary"> <i class="fa-solid fa-pencil mb-0 me-2"></i> Editar Perfil</button>
                </div>
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
                                            <p className="text-secondary mb-0">ID de Medico</p>
                                            <h5 className="text-primary">{auth.user.id}</h5>
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
                                <p className="title mb-0">Email</p>
                                <p>Una fecha</p>
                                <p className="title mb-0">Licencia</p>
                                <p>Un genero</p>
                                <p className="title mb-0">Especialidad</p>
                                <p>Una fecha</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}