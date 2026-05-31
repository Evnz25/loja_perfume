import axios from "axios";

// Defina a URL base da sua API
const API_URL = "http://localhost:3000/api/produtos";

const perfumeService = {
  // Busca todos os perfumes
  getProdutos: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  // Busca um perfume específico pelo ID
  getProdutoById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  // Cria um novo perfume (já preparado para receber FormData)
  createProduto: async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
  },
};

export default perfumeService;
