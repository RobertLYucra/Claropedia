import { Api } from './Api'
import { rutas } from '../../rutas'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


export const Inicio = () => {
  //declarando variables
  const [objets, setObjets] = useState([])
  const [search, setSearch] = useState("")
  const [results, setResultss] = useState([])

  //Obteniendo datos
  useEffect(() => {
    setObjets(rutas)
    setResultss(rutas)

  }, [])

  //capturar datos de busqueda
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
    <div className='container'> 
      <Buscador className='buscador'>
        <input type="text" placeholder='Buscar artículo' onChange={handleChange} className="form-control"></input>
      </Buscador>
      <Articulos >
      <Api dato={objets}/>
      </Articulos>
    </div>
  )
}


const Buscador = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input{
    max-width: 450px;
    margin: 15px 25px;

  }
`

const  Articulos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
  place-items: center;
  gap: 20px;
`