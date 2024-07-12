import IPrestacao from "../../types/IPrestacao";
import style from "./style.module.css";
export default function Prestacao({
	descricao,
	instituicao,
	cpf,
	tipoPagamento,
	dataInicial,
	formaPagamento,
	dataFinal,
	valor,
	mes,
	ano,
}: IPrestacao) {
	return (
		<li className={style.itemLista}>

			<div className={style.descricaoItem}>
				<h1 >Descricao</h1>
				<p>{descricao}</p>
			</div>

			<div className={style.instituicaoItem}>
				<h1>Instuticao</h1>
				<p>{instituicao}</p>
			</div>

			{/* <div className={style.cpfItem}>
				<h1>CPF</h1>
				<p>{cpf}</p>
			</div>

			<div>
				<h1>Tipo de Pagamento</h1>
				<p>{tipoPagamento}</p>
			</div>

			<div>
				<h1>Data Inicial</h1>
				<p>{dataInicial}</p>
			</div>

			<div>
				<h1>Data Final</h1>
				<p>{dataFinal}</p>
			</div>

			<div>
				<h1>Forma Pagamento</h1>
				<p>{formaPagamento}</p>
			</div> */}

			<div>
				<h1>Valor</h1>
				<p>{valor}</p>
			</div>

			<div>
				<h1>Mês</h1>
				<p>{mes}</p>
			</div>

			<div>
				<h1>Ano</h1>
				<p>{ano}</p>
			</div>
		</li>
	);
}
