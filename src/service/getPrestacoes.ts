export default async function getPrestacoes() {
    try {
        let response = await fetch('http://127.0.0.1:5000');
        let text = await response.text();
        
        text = text.replace(/NaN/g, 'null');

        console.log(text); 

        let json = JSON.parse(text);
        return json;
    } catch (error) {
        console.error('Erro ao obter prestacoes:', error);
        throw error;
    }
}
