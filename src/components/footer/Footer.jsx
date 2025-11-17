

export default function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 pb-3 mt-5">
            <div className="container">
                <div className="row gy-4">

                    <div className="col-md-4">
                        <h5 className="fw-bold">MediConnect</h5>
                        <p className="small">
                            Sistema integral de gestión de citas médicas que conecta pacientes con
                            profesionales de la salud de manera eficiente y segura.
                        </p>

                        <div className="d-flex gap-3 mt-3">
                            <i className="fa-brands fa-facebook fa-lg"></i>
                            <i className="fa-brands fa-x-twitter fa-lg"></i>
                            <i className="fa-brands fa-instagram fa-lg"></i>
                            <i className="fa-brands fa-linkedin fa-lg"></i>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h6 className="fw-bold mb-3">Enlaces Rápidos</h6>

                        <ul className="list-unstyled small">
                            <li><a href="#" className="text-decoration-none text-light">Acerca de Nosotros</a></li>
                            <li><a href="#" className="text-decoration-none text-light">Nuestros Servicios</a></li>
                            <li><a href="#" className="text-decoration-none text-light">Especialidades Médicas</a></li>
                            <li><a href="#" className="text-decoration-none text-light">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="text-decoration-none text-light">Política de Privacidad</a></li>
                            <li><a href="#" className="text-decoration-none text-light">Términos y Condiciones</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h6 className="fw-bold mb-3">Contacto</h6>

                        <p className="small mb-1">
                            <i className="fa-solid fa-location-dot me-2"></i>
                            Av. Principal 1234, Edificio MediCenter, Piso 5, Ciudad de México, CP 01000
                        </p>

                        <p className="small mb-1">
                            <i className="fa-solid fa-phone me-2"></i>
                            +52 (55) 1234-5678
                        </p>

                        <p className="small mb-1">
                            <i className="fa-solid fa-clock me-2"></i>
                            Lun - Vie: 8:00 AM - 8:00 PM
                        </p>

                        <p className="small">
                            <i className="fa-solid fa-envelope me-2"></i>
                            soporte@mediconnect.mx
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h6 className="fw-bold mb-3">Soporte</h6>

                        <div className="p-3 rounded mb-3 bg-primary text-light small">
                            <strong>Línea de Soporte 24/7</strong><br />
                            +503 4568-7426
                        </div>

                        <div className="p-3 rounded mb-3 bg-success text-light small">
                            <strong>WhatsApp</strong><br />
                            +503 7777-6666
                        </div>

                        <div class-name="p-3 rounded bg-secondary text-light small">
                            <strong>Email de Urgencias</strong><br />
                            urgencias@mediconnect.sv
                        </div>
                    </div>
                </div>

                <hr className="border-secondary mt-4" />

                {/* Footer Final */}
                <div className="text-center small">
                    © 2025 MediConnect. Todos los derechos reservados.
                </div>

                <div className="text-center small mt-2">
                    <a href="#" className="text-decoration-none text-light me-3">Aviso de Privacidad</a>
                    <a href="#" className="text-decoration-none text-light me-3">Cookies</a>
                    <a href="#" className="text-decoration-none text-light">Accesibilidad</a>
                </div>
            </div>
        </footer>
    );
}
