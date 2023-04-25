import React, { useState } from 'react'
import { buyProduct } from '../redux/actions/Action'
import { connect } from 'react-redux'

function NewContainer(props) {

    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Products = {props.numOfProducts}</h2>
            <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
            <button onClick={()=>props.buyProduct(number)}>Buy {number} Products</button>
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
        buyProduct: number => dispatch(buyProduct(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewContainer)