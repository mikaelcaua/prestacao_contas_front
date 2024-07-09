// service/postPrestacoes.ts
export default async function postPrestacoes(descricao: string) {
  try {
      const response = await fetch('http://127.0.0.1:5000', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ descricao }),
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
