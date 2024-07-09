import { useState } from "react"
import postPrestacoes from "../../service/postPrestacoes"

export default function Formulario(){
    let [descricao,setDescricao] = useState<string>('')
    return(
        <form onSubmit={e => {
            e.preventDefault()
            postPrestacoes(descricao)
        }}>
            <input
                type="text"
                onChange={e => setDescricao(e.target.value)}
            />

            <button type="submit">Botao</button>
        </form>
    )
}