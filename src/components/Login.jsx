import React from 'react'
import { useState } from 'react'
import { useAuth } from "../context/authContext"
import { useNavigate } from 'react-router-dom'
import { Alert } from './Alert'
import logo from '../images/logo.png'
import styled from 'styled-components'

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const { login } = useAuth()
    const navigate = useNavigate();
    const [error, setError] = useState()

    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })

    }

    const handleSubmit = async e => {
        e.preventDefault()
        setError("")
        try {
            await login(user.email, user.password)
            navigate("/")
        } catch (error) {
            if(error.code === "auth/wrong-password"){
                setError("Contraseña incorrecta")
            }else if(error.code==="auth/invalid-email"){
                setError("Correo inválido")
            }
            else if(error.code==="auth/internal-error"){
                setError("Ingrese la contraseña")
            }
            else if(error.code==="auth/user-not-found"){
                setError("Usuario no existe")
            }
            else if(error.code==="auth/too-many-requests"){
                setError("Intenta mas tarde")
            }
        }
    }
    return (
        <Div className=''>
            <div className='login-container'>
                <img alt='' src={logo}></img>
                {error && <Alert message={error} />}
                <form onSubmit={handleSubmit} className="flex flex-col ...">
                    <div className='inputs'>
                        <label htmlFor="email" className=''>Correo</label>
                        <input type="email" name='email' placeholder='example@email.com' onChange={handleChange} ></input>
                    </div>
                    <div className='inputs'>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name='password' id='password' placeholder='******' onChange={handleChange}></input>
                    </div>
                    <section>
                    <button>Iniciar sesión</button>
                    </section>
                </form>
            </div>
        </Div>
    )
}


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    .login-container{
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 25px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        img{
            width: 280px;
            margin-bottom: 35px;
        }
        form{
            display: flex;
            flex-direction: column;
            .inputs{
                margin: 10px 10px;
                display: flex;
                flex-direction: column;
                input{
                    margin-top: 10px;
                    padding: 5px;
                    outline: none;
                    border-bottom: 2px solid #333;
                }
                
            }
            section{
                display: flex;
                justify-content: center;
                margin-top: 20px;
                button{
                    border: 2px solid red;
                    padding: 5px 10px;
                    border-radius: 12px;
                    background: #fff;
                    color: red;
                    font-weight: bold;
                    &:hover{
                        color: white;
                        background-color: red;
                    }
                }
            }
        }
    }
`