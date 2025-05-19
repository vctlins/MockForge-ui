import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const gerarMock = async (payload) => {
  const response = await axios.post(`${API_URL}/gerar-json`, payload);
  return response.data;
};