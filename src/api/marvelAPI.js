import axios from "axios";

export const marvelAPI = axios.create({
    baseURL: 'https://gateway.marvel.com'
})