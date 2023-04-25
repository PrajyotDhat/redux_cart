import { BUY_NEW_PRODUCT } from "../Action";

const initialState = {
    numOfNewProducts: 20
}

const newProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_NEW_PRODUCT:
            return {
                ...state,
                numOfNewProducts: state.numOfNewProducts - 1
            }
        default: return state
    }

}

export default newProductReducer