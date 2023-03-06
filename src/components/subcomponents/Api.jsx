import React from 'react'
import { rutas } from '../../rutas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Api = () => {
    return (
        <>
            {rutas.map((ruta, i) => {
                return (
                    <Cards key={ruta.id} className={ruta.type}>
                        <div className={ruta.type}>
                            <aside>
                                <h5>{ruta.title}</h5>
                                <p>Tipo : {ruta.type}</p>
                                <p>{ruta.desciption}</p>
                            </aside>
                            <Link to={ruta.navigation}>Ver más</Link>
                        </div>
                    </Cards>
                )
            })}
        </>
    )
}


const Cards = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    overflow: hidden;
    .ftth{
        background: red;
    }
    .hfc{
        background-color: green;
    }
    div{
        width: 300px;
        margin: 10px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        height: 85px;
        aside{
            line-height: 8px;
            h5{
                color: white;
            }
        }
        a{
            color: white;
            text-decoration: none;
            padding: 10px;
        }
        
    }
    `