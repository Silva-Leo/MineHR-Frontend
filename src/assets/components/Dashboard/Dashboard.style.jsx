import React from "react";
import styled from "styled-components";

export const StyleDashboard = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 3% 3%;
  flex-direction:column;
  `

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: baseline;
`;

export const Titulo = styled.h1`
  color: #5d405c;
`;

export const SubTitulo = styled.span`
  font-size: 15px;
  font-weight: 200;
  letter-spacing: 1px;
`;

export const Div_Texto = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

