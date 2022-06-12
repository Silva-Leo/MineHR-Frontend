import React from 'react';
import { VscFilterFilled } from'react-icons/vsc';
import { Botao } from './Botao.style';

export function BotaoFiltrar(){
    return(
        <Botao>
            <VscFilterFilled size={16} color='#FFF'/>
            Filtrar
        </Botao>
    )
}
    

