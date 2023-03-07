import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { useAuth } from "../../context/authContext"

import {useState} from 'react'

export const Navegacion = () => {

  //Manejor de usuario cargar
  const { user, logout, loading } = useAuth()
  console.log(user)
  //cerrar sesion
  const handleLogout = async () => {
    await logout()
  }
  //pantalla de carga
  if (loading) return <h1>hola</h1>


  const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <header>
        <nav className="navbar">
            <div className="logo"> 
            <img src="" alt='' style={{width:"180px"}}></img>
           
            </div>
            <ul className={active ? "nav-menu active" : "nav-menu"}>
                <li className='list'>
                    <Link to="/" className="nav-links">Inicio</Link>
                </li>
                <li className='list'>
                    <a href="#" className="nav-links">FTTH</a>
                </li>
                <li className='list'>
                    <Link href="#" className="nav-links">HFC</Link>
                </li>
                <li className='list'>
                     <p style={{color: "white"}}> {user.email}</p>
                      <button onClick={handleLogout}>Logout</button>
                </li>
        
            </ul>
            <div className="menu-icon" onClick={handleClick}>
                <ion-icon  name={active ? "close" : "menu"}></ion-icon>
            </div>
        </nav>
        </header>
    );
}
