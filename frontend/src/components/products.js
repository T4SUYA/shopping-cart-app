import React, { Component } from 'react'
import util from '../util'
export default class products extends Component {
    render() {
        let filteredProducts = this.props.products.filter(
            (product) => {
                return product.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1
            })
        const productItens = filteredProducts.map(product => (
            <div className = 'col-md-4' key = {product.id}>
                <div className = 'thumbnail text-center mt-20'>
                    <a href = {`#${product.id}`} onClick = {(e) => this.props.handleAddToCart(e, product)} style = {{textDecoration: 'none'}}>
                        <img src = { `/products/${product.imgId}.jpg` } alt = {product.title} width = '150px' height = '150px' />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>
                            {util.formatCurrency(product.price)}
                        </b>
                        <button 
                        className ='btn btn-primary' 
                        onClick = {(e) => this.props.handleAddToCart(e, product)}> Add to cart </button>
                    </div>
                </div>
            </div>
        ))
        return (
            <div className ='row'>
                {productItens}
            </div>
        )
    }
}
