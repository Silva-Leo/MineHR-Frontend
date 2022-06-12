import React from "react";
import styled from "styled-components";
import { devices } from "../../style/device.responsive";

export const MainStyle = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  padding: 2% 2%;
  flex-direction:column;
  `

export const Section_Higher = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 20%;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 3%;
`;

export const Titulo = styled.h1`
  color: #5d405c;
  font-size: 2rem;
  padding-bottom: 3%;
`;

export const SubTitulo = styled.span`
  font-size: 1rem;
  font-weight: 200;
  letter-spacing: 0.1rem;
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

    @media ${devices.mobileL}{  //425px
    flex-direction: column;
    align-items: center;
  }

    @media ${devices.tablet}{  //768px
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.laptop}{  //1024px
    flex-direction: column;
    align-items: center;
  }


  @media ${devices.laptopHD}{  //1280px
    flex-direction: row;
    align-items: flex-start;

  }
`
export const Section_BarraSimples = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 0.8rem;
    box-shadow:0 0 0.8rem  #e2dfdf ;
    width: 48%;

    @media ${devices.mobileL}{   //425px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.tablet}{   //768px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.laptop}{   //1024px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.laptopHD}{   //1280px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }
`

export const Section_Scatter = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 0.8rem;
    box-shadow:0 0 0.8rem  #e2dfdf ;
    width: 48%;


    @media ${devices.mobileL}{   //425px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.tablet}{   //768px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.laptop}{   //1024px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }

    @media ${devices.laptopHD}{   //1280px
      width: fit-content;
      justify-content: center;
      margin-bottom: 5%;
    }
`