import { useEffect, useState } from 'react';
import getPrestacoes from '../../service/getPrestacoes'; // Importando a função getPrestacoes
import Prestacao from '../prestacao';
import IPrestacao from '../../types/IPrestacao'
import style from './style.module.scss'
function ListaPrestacao() {
    const [prestacoes, setPrestacoes] = useState([]);

    useEffect(() => {
        async function fetchPrestacoes() {
            const data = await getPrestacoes();
            setPrestacoes(data);
        }
        fetchPrestacoes();
    }, []);

    return (
        <ul className={style.listaPrestacao}>
            {prestacoes.map((prestacao:IPrestacao) => (
                <Prestacao descricao={prestacao.descricao} instituicao={prestacao.instituicao} ano={prestacao.ano} cpf={prestacao.cpf} dataFinal={prestacao.dataFinal} dataInicial={prestacao.dataInicial} formaPagamento={prestacao.formaPagamento} mes={prestacao.mes} tipoPagamento={prestacao.tipoPagamento} valor={prestacao.valor} key={prestacao.id}></Prestacao>
            ))}
        </ul>
    );
}

export default ListaPrestacao;
