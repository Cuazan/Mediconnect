import { useNavigate, Link, useLocation } from 'react-router-dom'
import logo from '../../../assets/mediconnect-logo.png'
import '../css/LoginStyle.css'
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { UserLogin } from '../../../requester/Requester';
import { Medics } from '../loginComponents/Medics';

export function Login() {
    const { setAuth } = useAuth();

    const userRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigate();
    const location = useLocation();

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }


    useEffect(() => {
        userRef.current.focus();
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await UserLogin({ email, password });
            const token = response.token
            const role = response.user.role
            setAuth({ user: response.user, roles: [role], token: [token] })
            setEmail('')
            setPassword('')
            if (role === "Doctor") {
                navigation("/doctorHomePage", { replace: true });
            } else if (role === "Patient") {
                navigation("/home", { replace: true });
            } else {
                navigation("/", { replace: true });
            }
            console.log(response)
            console.log(response.user)
        } catch (err) {
            console.log(err)
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
                                <form className='form' onSubmit={handleSubmit} >
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label" >Email:</label>
                                        <input type="email" value={email} required className="form-control" onChange={handleEmail} ref={userRef} id="email" placeholder="tu@email.com" name="email" autoComplete='off' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="pwd" className="form-label">Contraseña:</label>
                                        <input type="password" required value={password} className="form-control" onChange={handlePassword} id="pwd" placeholder="Ingrese contraseña" name="pswd" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Nuestros Doctores:</label>
                                        <Medics />

                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
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