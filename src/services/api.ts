import axios from 'axios';
//Requisição a API criada pelo Json Server
export const api = axios.create({
    baseURL: 'http://localhost:5000/'
});