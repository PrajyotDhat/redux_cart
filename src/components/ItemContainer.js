import React from 'react'
import { connect } from 'react-redux'
import { buyNewProduct } from '../redux_t/actions/Action'
import { buyProduct } from '../redux/actions/Action'

function ItemContainer(props) {
    return (
        <div>
            <h2>Item = {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.product
     ? state.product.numOfProducts
      : state.newProduct.numOfNewProducts

      return{
        item:itemState
      }
    }

    const mapDispatchToProps=(dispatch,ownProps) =>{
        const dispatchFunction = ownProps.product
        ? ()=> dispatch(buyProduct())
        : ()=> dispatch(buyNewProduct())

      return{
        buyItem:dispatchFunction
      }
    }



export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
