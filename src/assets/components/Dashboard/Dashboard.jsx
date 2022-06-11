import React from "react";
import { StyleDashboard } from "./Dashboard.style";
import { Section } from "./Dashboard.style";
import { Div_Texto } from "./Dashboard.style";
import { Titulo } from "./Dashboard.style";
import { SubTitulo } from "./Dashboard.style";
import { BotaoFiltrar } from "../Botao_Filtrar/Botao_Filtrar";
import { Section_Graphics } from "./Dashboard.style";

export const Dashboard = () => {
    return (
        <StyleDashboard>
            <Section>
                <Div_Texto>
                    <Titulo>Dashboard</Titulo>
                    <SubTitulo>Desafio Técnico Frontend</SubTitulo>
                </Div_Texto>
                <BotaoFiltrar />
            </Section>
        </StyleDashboard>
    );
};
