import { BUY_PRODUCT } from "../Action"

const initialState = {
    numOfProducts: 10
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT: return {
            ...state,
            numOfProducts: state.numOfProducts - action.payload
        }
        default: return state
    }

}
export default productReducer