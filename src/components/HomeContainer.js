import React from 'react'
import { buyProduct } from '../redux/actions/Action'
import { connect } from 'react-redux'

function HomeContainer(props) {
    return (
        <div>
            <h2>Number of Products = {props.numOfProducts}</h2>
            <button onClick={props.buyProduct}>Buy Products</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfProducts: state.product.numOfProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyProduct: () => dispatch(buyProduct())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
