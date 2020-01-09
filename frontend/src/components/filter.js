import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div className='row'>
                <div className ='col-md-4'>
                    <form className="form-inline md-form form-sm mt-10">
                    <i className="fas fa-search" aria-hidden="true"></i>
                    <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                    aria-label="Search" onChange = { (e) => this.props.updateSearch(e) } onKeyPress={event => event.key === 'Enter' ? event.preventDefault() : null}/>
                </form>  
                </div>
                <div className ='col-md-4 form-group'>
                    <label htmlFor="exampleFormControlSelect1">
                        Filter by price
                        <select className = 'form-control' id="exampleFormControlSelect1" value = {this.props.sort}
                    onChange = {this.props.handleChangeSort}>
                            <option value = ''>Select</option>
                            <option value = 'lowest'>Lowest to highest</option>
                            <option value = 'highest'>Highest to Lowest</option>
                    </select>
                    </label>
                </div>
                <div className ='col-md-4'>
                    <label>
                        Filter by size
                        <select className = 'form-control' value = {this.props.size}
                        onChange = {this.props.handleChangeSize}>
                            <option value = ''>ALL</option>
                            <option value = 'x'>XS</option>
                            <option value = 's'>S</option>
                            <option value = 'm'>M</option>
                            <option value = 'l'>L</option>
                            <option value = 'xl'>XL</option>
                            <option value = 'xxl'>XXL</option>
                        </select>
                    </label>
                </div>
                
            </div>
        )
    }
}
