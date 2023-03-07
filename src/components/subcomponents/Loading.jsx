import React from 'react'
import styled from 'styled-components'

export const Loading = () => {
  return (
    <Div>
        <h2>Por favor, espere...</h2>
    </Div>
  )
}


const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: red;
    h2{
        color: white;
    }
`