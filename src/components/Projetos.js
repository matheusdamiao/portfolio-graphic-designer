import React from 'react'
import styled from 'styled-components'
import Foto1 from '../assets/foto-1.svg'
import Foto2 from '../assets/foto-2.svg'
import Foto3 from '../assets/foto-3.svg'
import Foto4 from '../assets/foto-4.svg'
import Foto5 from '../assets/foto-5.svg'

const Projeto = styled.img`
    max-width: 800px;
    width: 30%;
    object-fit: cover;
     max-height: 1000px;
     border-radius: 9px;
    transition: 0.3s;
    box-shadow: 8px 5px 30px 5px rgba(81, 103, 31, 0.35);
    cursor: pointer;

     :hover{
        transform: scale(1.1)
     }
     @media screen and (max-width: 1000px){
        width: 95%;
        max-height: 500px;

        :hover {
            transform: scale(0.9)
        }
     }
`
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    
`


const Projetos = () => {
  return (
    <Wrapper>
      <Projeto src={Foto1}/>
      <Projeto src={Foto2}/>  
      <Projeto src={Foto3}/>  
      <Projeto src={Foto4}/>  
      <Projeto src={Foto5}/>  

    </Wrapper>
  )
}

export default Projetos
