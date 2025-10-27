import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/mediconnect-logo.png'
import '../css/LoginStyle.css'
import { useState } from 'react';

export function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
   
    const navigation = useNavigate();
    const login = ()  =>{
        navigation('/', {replace:true})
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = () =>{
        e.preventDefault();
        let userCredentials = {
            email, password
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row mt-3 ">
                    <div className="col-lg-12">
                        <div className="header">
                            <img src={logo} alt="mediconnect-logo" className='logo img-fluid' />
                            <h2>Sistema Integral de Citas Médicas y Teleconsulta</h2>
                            <div className="line"></div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <h1 >Iniciar Sesión</h1>
                            </div>
                            <div className="card-body">
                                <form className='form' onSubmit={handleSubmit}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label" >Email:</label>
                                        <input type="email" className="form-control" onChange={handleEmail} id="email" placeholder="tu@email.com" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Contraseña:</label>
                                        <input type="password" className="form-control" onChange={handlePassword} id="pwd" placeholder="Ingrese contraseña" name="pswd" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="dropdown" className="form-label">Tipo de Usuario:</label>
                                        <select className="form-select" id='dropdown'>
                                            <option>Medico</option>
                                            <option>Paciente</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100" onClick={login}>Iniciar Sesión</button>
                                </form>
                            </div>
                            <div className="card-footer">
                                <h5>¿No tienes cuenta? Regístrate</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}