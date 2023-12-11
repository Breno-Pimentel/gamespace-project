import axios from 'axios';
import apiConfig from './apiConfig'; // Caminho para o arquivo de configuração

const api = axios.create({
  baseURL: apiConfig.baseURL,
});

// Exemplo de uma função para buscar dados do backend
export const fetchData = () => {
  return api.get('/api/dados') // Substitua '/api/dados' pela rota real do seu backend
    .then(response => {
      // Faça algo com os dados recebidos
      return response.data;
    })
    .catch(error => {
      // Trate erros apropriadamente
      throw error;
    });
};

// Se você não estiver usando createRoot em nenhum lugar, pode remover a importação.

