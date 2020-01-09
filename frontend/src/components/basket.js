import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import util from '../util'
export default class basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className = 'alert alert-info'>
                { cartItems.length === 0 ? 'Basket is empty': <div>You have {cartItems.length} products in the basket</div>}
                { cartItems.length > 0 &&
                    <div>
                        <ul className = 'list-group'>
                        { cartItems.map(item => {
                            return(
                                    <li className = 'list-group-item' key = {item.id}>
                                        <b> {item.title}<br/> Qtd:{ item.count }<br/>Price:{ util.formatCurrency(item.price * item.count) } </b>
                                        <button type = 'button' className = 'close' aria-label = 'Close'
                                        onClick = {(e) => this.props.handleRemoveFromCart(e,item)}
                                        >X</button>
                                    </li>
                            )
                        }) }
                        </ul>
                        Total :{util.formatCurrency(cartItems.reduce((a,curr) => a + curr.price * curr.count, 0))}
                        <br/>
                        <Link to = '/checkout'>
                            <button className = 'btn btn-primary'>Checkout</button>
                        </Link>
                        
                    </div>
                }
            </div>
        )
    }
}
