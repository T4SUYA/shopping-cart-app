import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333' || 'https://shopping-cart-jv.herokuapp.com' ,
    timeout: 5000,
    headers: { 'Content-type' : 'application/json' }
})

export default api