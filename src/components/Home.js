import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyProduct } from '../redux/actions/Action'


function Home() {
    const numOfProducts=useSelector(state=>state.product.numOfProducts)
    const dispatch=useDispatch()
  return (
    <div>
      <h2>Num of Products = {numOfProducts}</h2>
      <button onClick={()=>dispatch(buyProduct)}>BuyProduct</button>
    </div>
  )
}

export default Home
