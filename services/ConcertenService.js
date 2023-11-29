import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:5173/db.json',
    withCredentials:false,
    headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
    }
})
export default{
    getConcerten(){
        return apiClient.get('/')
    }
   
}