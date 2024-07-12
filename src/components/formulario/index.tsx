import { useState } from "react";
import postPrestacoes from "../../service/postPrestacoes";
import IPrestacao from "../../types/IPrestacao";
import style from "./style.module.scss";

export default function Formulario() {
    const [dadosForm, setDadosForm] = useState<IPrestacao>({
        descricao: '',
        instituicao: '',
        cpf: '',
        tipoPagamento: '',
        dataInicial: '',
        formaPagamento: '',
        dataFinal: '',
        valor: '',
        mes: '',
        ano: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        console.log(value)
        setDadosForm((prevDadosForm) => ({
            ...prevDadosForm,
            [id]: value,
        }));
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            postPrestacoes(dadosForm);
        }} className={style.form}>
            <div className={style.formGroup}>
                <label htmlFor="descricao">Descrição</label>
                <textarea
                    id="descricao"
                    value={dadosForm.descricao}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="instituicao">Instituição</label>
                <input 
                    required
                    type="text"
                    id="instituicao"
                    value={dadosForm.instituicao}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="cpf">CPF</label>
                <input 
                    required
                    type="text"
                    id="cpf"
                    value={dadosForm.cpf}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="tipoPagamento">Tipo de Pagamento</label>
                <input 
                    required
                    type="text"
                    id="tipoPagamento"
                    value={dadosForm.tipoPagamento}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="formaPagamento">Forma de Pagamento</label>
                <input 
                    required
                    type="text"
                    id="formaPagamento"
                    value={dadosForm.formaPagamento}
                    onChange={handleChange}
                />
            </div>

            
            <div className={style.formGroup}>
                <label htmlFor="dataInicial">Data Inicial</label>
                <input 
                    required
                    type="date"
                    id="dataInicial"
                    min="2023-01-01"
                    value={dadosForm.dataInicial}
                    onChange={handleChange}
                />
            </div>
        
            <div className={style.formGroup}>
                <label htmlFor="dataFinal">Data Final</label>
                <input 
                    required
                    type="date"
                    id="dataFinal"
                    min="2023-01-01"
                    value={dadosForm.dataFinal}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="valor">Valor</label>
                <input 
                    required
                    type="number"
                    id="valor"
                    value={dadosForm.valor}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="mes">Mês</label>
                <input 
                    required
                    type="number"
                    id="mes"
                    value={dadosForm.mes}
                    onChange={handleChange}
                />
            </div>

            <div className={style.formGroup}>
                <label htmlFor="ano">Ano</label>
                <input 
                    required
                    type="number"
                    id="ano"
                    value={dadosForm.ano}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Enviar</button>
        </form>
    );
}
