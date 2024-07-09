import { useState } from "react"
import postPrestacoes from "../../service/postPrestacoes"
import IPrestacao from "../../types/IPrestacao"
export default function Formulario(){
    let [dadosForm, setDadosForm] = useState<IPrestacao>({
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
    return(
        <form onSubmit={e => {
            e.preventDefault()
            postPrestacoes(dadosForm)
        }}>
            <input
                type="text"
                id="descricao"
                value={dadosForm.descricao}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        descricao: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="instituicao"
                value={dadosForm.instituicao}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        instituicao: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="cpf"
                value={dadosForm.cpf}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        cpf: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="tipoPagamento"
                value={dadosForm.tipoPagamento}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        tipoPagamento: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="dataInicial"
                value={dadosForm.dataInicial}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        dataInicial: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="formaPagamento"
                value={dadosForm.formaPagamento}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        formaPagamento: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="dataFinal"
                value={dadosForm.dataFinal}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        dataFinal: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="valor"
                value={dadosForm.valor}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        valor: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="mes"
                value={dadosForm.mes}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        mes: e.target.value
                    }))
                }
            />
            <input
                type="text"
                id="ano"
                value={dadosForm.ano}
                onChange={(e) =>
                    setDadosForm((prevDadosForm) => ({
                        ...prevDadosForm,
                        ano: e.target.value
                    }))
                }
            />
            <button type="submit">Botao</button>
        </form>
    )
}