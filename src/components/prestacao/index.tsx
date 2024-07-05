import IPrestacao from '../../types/IPrestacao'

export default function Prestacao({descricao,instituicao,cpf,tipoPagamento,dataInicial,formaPagamento,dataFinal,valor,mes,ano}:IPrestacao){
    // descricao,instituicao,cpf,tipoPagamento,dataInicial,formaPagamento,dataFinal,valor,mes,ano
    return(
        <li>
            <h1>Descricao</h1>
            <p>{descricao}</p>

            <h1>Instuticao</h1>
            <p>{instituicao}</p>

            <h1>CPF</h1>
            <p>{cpf}</p>

            <h1>Tipo de Pagamento</h1>
            <p>{tipoPagamento}</p>

            <h1>Data Inicial</h1>
            <p>{dataInicial}</p>

            <h1>Data Final</h1>
            <p>{dataFinal}</p>

            <h1>Forma Pagamento</h1>
            <p>{formaPagamento}</p>

            <h1>Valor</h1>
            <p>{valor}</p>

            <h1>Mês</h1>
            <p>{mes}</p>

            <h1>Ano</h1>
            <p>{ano}</p>
        </li>
    )
}
