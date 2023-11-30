import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/syntraprogrammeurs/fake/concerten',
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