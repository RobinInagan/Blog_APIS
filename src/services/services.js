import axios from "axios";

const newsUrl = 'https://newsapi.org/v2/everything'
const usersUrl = 'https://randomuser.me/api/'

export default class Services{
    getNews = async (page) => {
        try {
            const response = await axios.get(newsUrl, {
                params: {
                    apiKey: process.env.REACT_APP_API_KEY,
                    pageSize:10,
                    page,
                    q: 'technology'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener noticias:', error);
            throw error; 
        }
    }

    getUsers = async (page) => {
        try {
            const response = await axios.get(usersUrl, {
                params: {
                    inc: 'gender,name,nat,picture',
                    page,
                    results: 10,
                    seed: 'be724bfd4181df4c'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error al obtener usuarios:', error);
            throw error;
        }
    }
}