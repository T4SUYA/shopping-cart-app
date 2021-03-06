import React, { Component} from 'react'
import Products from './products'
import Filter from './filter'
import Basket from './basket'
import api from '../services/api'
export default class cart extends Component {
    constructor(props){
        super(props)
        this.state = {
            products: [],
            filteredProducts: [],
            cartItems: [],
            search: ''
        }
        this.handleChangeSort = this.handleChangeSort.bind(this)
        this.handleChangeSize = this.handleChangeSize.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
    }
    handleChangeSort(e) {
        this.setState({sort: e.target.value})
        this.listProductsbyPrice();
    }
    handleChangeSize(e) {
        this.setState({size: e.target.value})
        this.listProductsbySize();
    }
    listProductsbyPrice() {
        this.setState(state => {
            if(state.sort !== '') {
             return {filteredProducts: state.products.sort((a,b) => (state.sort === 'lowest') ? (a.price > b.price? 1:-1): (a.price < b.price? 1:-1) ) }   
            }else {
                return {filteredProducts: state.products.sort((a,b) => a.id < b.id? 1:-1)}
            }
        })
    }
    listProductsbySize() {
        this.setState(state => {
            if (state.size !== ''){
                return { filteredProducts: state.products.filter(a =>
                    a.availableSizes.indexOf(state.size.toUpperCase()) >= 0    
                )}
            }else {
                return {filteredProducts: state.products}
            }
        })
    }
    handleAddToCart(e, product) {
        this.setState(state => {
            const cartItems = state.cartItems
            let productAlreadyInCart = false
            cartItems.forEach(item => {
                if(item.id === product.id){
                    productAlreadyInCart = true
                    item.count++
                }
            })
            if(!productAlreadyInCart) {
                cartItems.push({...product, count: 1})
            }
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
            return cartItems
        })
    }
    handleRemoveFromCart(e,item) {
        console.log(item)
        this.setState(state => {
         const cartItems = state.cartItems.filter(cartItem => cartItem.id !== item.id)
         localStorage.setItem('cartItems', cartItems)

         return {cartItems}
        })
    }
    updateSearch(e) {
        e.preventDefault()
        this.setState({ search: e.target.value.substr(0,20) })
    }
   async componentDidMount() {
        const response = await api.get('/products')
        console.log(response.data)
        this.setState({
            products: response.data.products,
            filteredProducts: response.data.products
        })
        if(localStorage.getItem('cartItems')){
            try {
                this.setState({cartItems: JSON.parse(localStorage.getItem('cartItems'))})
            } catch (error) {
                console.log(error)
            }     
        }
    }
    render() {
        return (
        <div className = 'container'>
            <h1>Shopping Cart App</h1>
            <hr/>
            <div className = 'row'>
                <div className ='col-md-8'>
                    <Filter size = {this.state.size} sort = { this.state.sort } handleChangeSize = {this.handleChangeSize}
                    handleChangeSort = {this.handleChangeSort} count = {this.state.filteredProducts.length} updateSearch = {this.updateSearch} />
                    <Products products = {this.state.filteredProducts} handleAddToCart = {this.handleAddToCart} search = {this.state.search}/>
                </div>
                <div className ='col-md-4'>
                    <Basket cartItems = {this.state.cartItems} handleRemoveFromCart = {this.handleRemoveFromCart}/>
                </div>
            </div>
        </div>
        )
    }
}
