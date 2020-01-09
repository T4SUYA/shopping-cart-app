import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cart from './components/cart'
import Checkout from './components/checkout'


const App = () => ( 
    <Router>
        <Route path = '/' exact component = { Cart } />
        <Route path = '/checkout' component = { Checkout } />
    </Router>
)

export default App
