import axios from "axios";

const newsUrl = ''
const usersUrl = 'https://randomuser.me/api/'

export default class Services{

    getNews = async() => {
        await axios.get(newsUrl)
        .then(data =>{
            return data
        })
    }
    
    getUsers = async(page) => {
        await axios.get(usersUrl,{
            params:{
                inc:'gender,name,nat,picture',
                page,
                results : 10,
                seed:'be724bfd4181df4c'
            }
        })
        .then(data =>{
            return data
        })
    }
}