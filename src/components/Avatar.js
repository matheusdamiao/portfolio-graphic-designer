import styled from "styled-components";
import React from "react";
import avatarPic from "../assets/avatar-designer.svg";

const Imagem = styled.img`
  max-width: 150px;

  border-radius: 50%;
  object-fit: center;
`;

const Name = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 20px;
`;

const Origem = styled.small`
  color: gray;
  font-size: 0.7rem;
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
  font-weight: 200;
`;
const Bio = styled.p`
  font-size: 0.9rem;
  max-width: 500px;
  font-weight: 400;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
`;

const Avatar = () => {
  return (
    <>
      <Imagem src={avatarPic} />
      <Name>Patrícia da Silva Magalhães</Name>
      <Bio> Designer Gráfico | Branding </Bio>
      <Origem> Rio de Janeiro, Brasil </Origem>
    </>
  );
};

export default Avatar;
