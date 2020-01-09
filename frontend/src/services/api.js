import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000' || 'https://shopping-cart-jv.herokuapp.com' ,
    timeout: 6000,
    headers: { 'Content-type' : 'application/json' }
})

export default api