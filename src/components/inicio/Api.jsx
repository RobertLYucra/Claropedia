import React, { useEffect, useState } from 'react'
import { rutas } from '../../rutas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const Api = (props) => {
    return (

            < >
                {props.dato.map((ruta, i) => {
                    return (
                        <Cards key={i} className={ruta.type}>
                            <div className={ruta.type}>
                                <aside>
                                    <h6>{ruta.title}</h6>
                                    <p>Tipo : {ruta.type.toUpperCase()}</p>
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

//Estilo


const Cards = styled.div`
    width: 340px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
    background: none;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    .ftth {
        aside {
            h6{
                color: red;
            }
        }
    }
    .hfc{
        aside{
            h6{
                color: green;
            }
        }
    }
    div{
        width: 100%;
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        
        aside{
            line-height: 8px;
            h6{
                color: white;
            }
        }
        a{
            text-decoration: none;
            height: 100%;
            width: 70px;
        }
        
    }
    `