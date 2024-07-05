export default async function getPrestacoes() {
    try {
        let response = await fetch('http://127.0.0.1:5000');
        return await response.json();
    } catch (error) {
        console.error('Erro ao obter prestacoes:', error);
        throw error;
    }
}
