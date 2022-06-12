import React from "react";
import { MainStyle } from "./Main.style";
import { Section_Higher } from "./Main.style";
import { Div_Texto } from "./Main.style";
import { Titulo } from "./Main.style";
import { SubTitulo } from "./Main.style";
import { BotaoFiltrar } from "../Botao_Filtrar/Botao_Filtrar";
import { Section_Graphics } from "./Main.style";
import BarraSimples from "../Graficos/Barra_Simples/Barra_Simples";
import Scatter from "../Graficos/Scatter/Scatter";
import { Section_BarraSimples } from "./Main.style";
import { Section_Scatter } from "./Main.style";

export const Main = () => {
    return (
        <MainStyle>
            <Section_Higher>
                <Div_Texto>
                    <Titulo>Dashboard</Titulo>
                    <SubTitulo>Desafio Técnico Frontend</SubTitulo>
                </Div_Texto>
                <BotaoFiltrar />
            </Section_Higher>
            <Section_Graphics>
                <Section_BarraSimples>
                    <BarraSimples />
                </Section_BarraSimples>
                <Section_Scatter>
                    <Scatter />
                </Section_Scatter>
            </Section_Graphics>
        </MainStyle>
    );
};
