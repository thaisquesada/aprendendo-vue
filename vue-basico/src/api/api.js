import axios from 'axios';
import utilStorage from '@/utils/storage';

const api = axios.create({
    baseURL: 'http://localhost:3400'
});

api.interceptors.request.use((config) => {
    //TODAS AS REQUISIÇÕES VIRÃO PARA CÁ ANTES DE ENVIAR PARA A API
    let token = utilStorage.obterTokenNaStorage();
    config.headers.Authorization = token;
    return config;
})

export default api;