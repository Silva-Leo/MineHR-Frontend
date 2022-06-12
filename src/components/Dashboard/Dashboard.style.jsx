import React from "react";
import styled from "styled-components";

export const StyleDashboard = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2% 2%;
  flex-direction:column;
  `

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 30%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 3%;
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
  justify-content:center;
`;

export const Section_Graphics = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    align-items:flex-start;
`
export const Section_BarraSimples = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow:0 0 10px  #e2dfdf ;
    width: 48%;
`

export const Section_Scatter = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 10px;
    box-shadow:0 0 10px  #e2dfdf ;
    width: 48%;
`