import axios from "axios";

const API_URL = "http://localhost:3000/api/produtos";

const perfumeService = {
  getProdutos: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getProdutoById: async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  createProduto: async (formData) => {
    const response = await axios.post(API_URL, formData);
    return response.data;
  },
};

export default perfumeService;
