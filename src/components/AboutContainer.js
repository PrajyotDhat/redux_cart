import React from 'react'
import { connect } from 'react-redux'
import { buyNewProduct } from '../redux_t/actions/Action'

function AboutContainer(props) {
    return (
        <div>
            <h2>Number of New Products = {props.numOfNewProducts}</h2>
            <button onClick={props.buyNewProduct}>Buy New Products</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfNewProducts: state.newProduct.numOfNewProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyNewProduct: () => dispatch(buyNewProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer)