import React, {useState} from 'react';
import '../../components/Register/Register.css'
import { auth } from '../../firebase'
import Logo from '../../LogoPickUp.png'
import {Link} from 'react-router-dom'

export const Register = () => {

    const[email, setEmail] = useState('')
        const[password, setPassword] = useState('')
        const[msgError, setMsgError] = useState(null)
        const registerUser = (e) =>{
            e.preventDefault()
            auth.createUserWithEmailAndPassword(email,password)
            .then(r =>  alert('Usuario registrado'))
            .catch(error => {
                if(error.code === 'auth/invalid-email'){
                    setMsgError('Correo electrónico incorrecto')
                }
                if(error.code === 'auth/weak-password'){
                    setMsgError('La contraseña debe tener al menos 6 caracteres')
                }
            })
        }
    return (
            <div className="register">
            <h1>PickUp PooL</h1>
                    <p>Tu app de entrega de pedidos</p>
                    <img className="logo" src={Logo} alt="logo" />
                <div className="registerDivForm">
                     <h3>REGÍSTRATE</h3>
                        <form className="registerForm"onSubmit={registerUser}> 
                        <label htmlFor="email">Correo electrónico*</label>
                        <input type="email" className="registerInput" onChange={(e)=>{setEmail(e.target.value)}} />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" className="registerInput" onChange={(e)=>{setPassword(e.target.value)}} />
                        <button value="regUser"  className="registerButton" >UNIRME</button>
                    </form>
                    {
                            msgError !== null ?
                            (
                                <div>{msgError}</div>
                            )
                            :
                            (
                                <span></span>
                            )
                            }
                    <Link to="/">X</Link>
                </div>  
            </div>
    )
};
