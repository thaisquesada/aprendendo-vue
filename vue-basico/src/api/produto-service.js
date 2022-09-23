import api from './api';

// CREATE - POST

function cadastrar(produto) {
    return new Promise((resolve, reject) => {
        return api.post(`/produtos`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
 }

// READ - GET

 function obterTodos() {
    return new Promise((resolve, reject) => {
        return api.get('/produtos')
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
 }

 function obterPorId(id) {
    return new Promise((resolve, reject) => {
        return api.get(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
 }

// UPDATE - PUT

function atualizar(produto) {
    return new Promise((resolve, reject) => {
        return api.put(`/produtos/${produto.id}`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
 }

// DELETE

function deletar(id) {
    return new Promise((resolve, reject) => {
        return api.delete(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
 }

 export default {
    obterTodos,
    obterPorId,
    cadastrar,
    atualizar,
    deletar
 }