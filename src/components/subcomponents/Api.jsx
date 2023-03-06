import React, { useEffect, useState } from 'react'
import { rutas } from '../../rutas'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Api = () => {
    //Hooks de estado para turas y busqueda
    const [objets, setObjets] = useState([])
    const [search, setSearch] = useState("")
    const [results, setResultss] = useState([])


    
    useEffect(() => {
        setObjets(rutas)
        setResultss(rutas)

    }, [])
    const handleChange = (e) => {
        if (e.target.value === "") {
            setObjets(results);
        } else {
            const res = results.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setObjets(res);
        }
        setSearch(e.target.value);
    }


    return (
        <>
            <input type="text" onChange={handleChange} className="form-control"></input>
            <div className='datos'>
                {objets.map((ruta, i) => {
                    return (
                        <Cards key={i} className={ruta.type}>
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
            </div>
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