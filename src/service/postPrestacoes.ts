import IPrestacao from '../types/IPrestacao'
export default async function postPrestacoes({
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
    id
}: IPrestacao) {
  try {
      const response = await fetch('http://127.0.0.1:5000', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            descricao:descricao,
            instituicao:instituicao,
            cpf:cpf,
            tipoPagamento:tipoPagamento,
            dataInicial:dataInicial,
            formaPagamento:formaPagamento,
            dataFinal:dataFinal,
            valor:valor,
            mes:mes,
            ano:ano
          }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error:', error);
  }
}
