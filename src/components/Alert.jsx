import React from 'react'
import styled from 'styled-components'

export const Alert = ({message}) => {
  return (
    <Div className=''>
        <span>{message}</span>
    </Div>
  )
}


const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: #bd0808;
`