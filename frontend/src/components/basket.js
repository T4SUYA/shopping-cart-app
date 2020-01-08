import React, { Component } from 'react'

export default class basket extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <div className = 'alert alert-info'>
                { cartItems.length === 0 ? 'Basket is empty': <div>You have {cartItems.length} products in th basket</div>}
                { cartItems.length > 0 &&
                    <div>
                        <ul>
                        { cartItems.map(item => {
                            return(
                                    <li key = {item.id}>
                                        <b> {item.title} - {item.count} - {item.price * item.count} </b>
                                        <button className = 'btn btn-danger'
                                        onClick = {(e) => this.props.handleRemoveFromCart(e,item)}
                                        >X</button>
                                    </li>
                            )
                        }) }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}
