import React, { Component } from 'react'
import './checkout.css'
import util from '../util'
export default class checkout extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartItems: []
        }
    }
    async componentDidMount() {
        const cartItems =  JSON.parse(localStorage.getItem('cartItems'))
        this.setState ({ cartItems: cartItems })
    }

    render() {
        return (
            <div className  = 'container'>
                <h1> Shopping Cart App </h1>
                <hr/>
                <div className = 'row'>
                    <div className= 'col-lg- mx-auto text-center back'>
                        <h1 className = 'h1'>Cart Review</h1>
                        <p className = 'lead adjust'>Bellow you have the details of the items, that you just bought</p>
                        <div className = 'col-xl- mt-10'>
                            <h2 className = 'h2 top'>Your items:</h2>
                            <ul className = 'item'>
                                { this.state.cartItems.map(item => (
                                    <li key = {item.id}>
                                        <img src = {`/products/${item.imgId}.jpg`} alt = 'img' className = 'img-thumbnail' width = "150px" height = "150px"/>
                                <h3 className = 'h3' >{item.title} - Qtd = {item.count}</h3>
                                        <h4>Price = { util.formatCurrency(item.count * item.price)}</h4>
                                    </li>
                                )) }
                            </ul>
                        </div>
                    </div>
                    <div className = 'col-md-4'>
                        <h3 className = 'alert alert-info total'>Total : {util.formatCurrency(this.state.cartItems.reduce((a,curr) => a + curr.price * curr.count, 0))}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
