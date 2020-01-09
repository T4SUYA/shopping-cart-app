import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API || 'http://localhost:5000',
    timeout: 6000,
    headers: { 'Content-type' : 'application/json' }
})

export default api